// POST /api/razorpay/verify
// Confirms a payment really came from Razorpay by checking its signature
// (HMAC-SHA256 of "<order_id>|<payment_id>" with the key secret).

import crypto from "node:crypto";

export const config = { path: "/api/razorpay/verify" };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) return json({ ok: false, error: "Payments are not configured." }, 503);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = body || {};
  if (![orderId, paymentId, signature].every((v) => typeof v === "string" && v)) {
    return json({ ok: false, error: "Missing payment details" }, 400);
  }

  const expected = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  const ok = a.length === b.length && crypto.timingSafeEqual(a, b);

  return ok ? json({ ok: true }) : json({ ok: false, error: "Payment could not be verified" }, 400);
};
