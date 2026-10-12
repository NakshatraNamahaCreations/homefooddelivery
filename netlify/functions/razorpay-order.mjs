// POST /api/razorpay/order
// Prices the cart from the server-side catalogue (never trusting prices sent by
// the browser) and creates a Razorpay order for that amount.

import { productList } from "../../app/data/products.js";
import { orderTotals } from "../../app/data/pricing.js";

export const config = { path: "/api/razorpay/order" };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

// Razorpay allows at most 15 notes of 256 characters each
const note = (v) => String(v ?? "").slice(0, 250);

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return json({ error: "Online payments are not configured yet. Please choose Cash on Delivery." }, 503);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const items = Array.isArray(body?.items) ? body.items : [];
  if (!items.length || items.length > 100) return json({ error: "Your cart is empty." }, 400);

  const priced = [];
  for (const it of items) {
    const product = productList.find((p) => p.name === it?.name);
    const qty = Number(it?.qty);
    if (!product) return json({ error: `"${it?.name}" is no longer available. Please remove it from your cart.` }, 400);
    if (!Number.isInteger(qty) || qty < 1 || qty > 50) return json({ error: `Invalid quantity for ${product.name}.` }, 400);
    priced.push({ name: product.name, qty, price: product.price });
  }

  const subTotal = +priced.reduce((s, it) => s + it.qty * it.price, 0).toFixed(2);
  const totals = orderTotals(subTotal);
  const ship = body?.shipping || {};

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
    },
    body: JSON.stringify({
      amount: Math.round(totals.grandTotal * 100), // paise
      currency: "INR",
      receipt: "web-" + Date.now(),
      // shown on the payment in the Razorpay dashboard, so the shop can fulfil it
      notes: {
        customer: note(ship.name),
        phone: note(ship.phone),
        email: note(ship.email),
        address: note(`${ship.address || ""}, ${ship.city || ""} - ${ship.pincode || ""}`),
        delivery_notes: note(ship.notes),
        items: note(priced.map((it) => `${it.qty} x ${it.name}`).join(", ")),
      },
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("Razorpay order failed", res.status, data);
    return json({ error: "Could not start the payment. Please try again." }, 502);
  }

  return json({
    keyId,
    orderId: data.id,
    amount: data.amount,
    currency: data.currency,
    breakdown: totals,
  });
};
