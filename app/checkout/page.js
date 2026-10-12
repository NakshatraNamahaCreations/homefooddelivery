"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useShop } from "../components/ShopStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { FREE_DELIVERY_ABOVE, orderTotals } from "../data/pricing";

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

// loads Razorpay's checkout popup script once, on demand
function loadRazorpay() {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = RAZORPAY_SCRIPT;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

const IconBack = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconCheck = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);
const IconCash = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);
const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const IconTruck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="14" height="12" rx="1" />
    <path d="M15 8h4l3 3v5h-7z" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);
const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const PERKS = [
  { icon: <IconLeaf />,   title: "Packed fresh today",  sub: "Small batches, no preservatives" },
  { icon: <IconTruck />,  title: "Free delivery ₹499+", sub: "Doorstep in 2–3 days" },
  { icon: <IconHeart />,  title: "100% homemade",       sub: "From real home kitchens" },
  { icon: <IconShield />, title: "Secure payments",     sub: "256-bit encrypted" },
];

const METHODS = [
  { id: "online", label: "Pay Online",       hint: "UPI, cards, netbanking, wallets", icon: <IconCard /> },
  { id: "cod",    label: "Cash on Delivery", hint: "Pay when it arrives",             icon: <IconCash /> },
];

function StepTracker({ active }) {
  const steps = ["Cart", "Details", "Payment", "Confirmed"];
  return (
    <ol className="co-steps" aria-label="Checkout progress">
      {steps.map((label, i) => {
        const state = i < active ? "is-done" : i === active ? "is-on" : "";
        return (
          <li key={label} className={`co-step ${state}`}>
            <span className="co-step-dot">{i < active ? "✓" : i + 1}</span>
            <span className="co-step-label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

const onlyDigits = (s) => s.replace(/\D/g, "");

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, setQty, removeFromCart, placeOrder, lastOrder, user } = useShop();
  const [step, setStep] = useState("form"); // form | success
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);
  const [payError, setPayError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    notes: "",
    method: "online", // online | cod
  });

  // redirect to home if cart is empty AND we're not on the success screen
  useEffect(() => {
    if (step === "form" && cart.length === 0) {
      const t = setTimeout(() => router.replace("/"), 50);
      return () => clearTimeout(t);
    }
  }, [step, cart.length, router]);

  // prefill from signed-in user
  useEffect(() => {
    if (user) {
      setForm((f) => ({
        ...f,
        name: f.name || user.name || "",
        email: f.email || user.email || "",
      }));
    }
  }, [user]);

  const subTotal = cartTotal;
  const { deliveryFee, gst, grandTotal } = useMemo(() => orderTotals(subTotal), [subTotal]);
  const freeProgress = Math.min(100, (subTotal / FREE_DELIVERY_ABOVE) * 100);

  // tracker moves to "Payment" once the shipping block looks complete
  const shippingDone =
    form.name.trim() && form.phone.length === 10 && form.address.trim() && form.city.trim() && form.pincode.length === 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "phone") v = onlyDigits(v).slice(0, 10);
    if (name === "pincode") v = onlyDigits(v).slice(0, 6);
    setForm((f) => ({ ...f, [name]: v }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    setPayError("");
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (form.phone.length !== 10) e.phone = "10-digit phone number";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (form.pincode.length !== 6) e.pincode = "6-digit pincode";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const shipping = () => ({
    name: form.name,
    phone: form.phone,
    email: form.email,
    address: form.address,
    city: form.city,
    pincode: form.pincode,
    notes: form.notes,
  });

  const finish = (payment, breakdown) => {
    const placed = placeOrder({ shipping: shipping(), payment, breakdown });
    setOrder(placed);
    setSubmitting(false);
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const failPayment = (msg) => {
    setPayError(msg);
    setSubmitting(false);
  };

  // creates a Razorpay order on the server, opens the payment popup, then has
  // the server verify the payment signature before confirming the order
  const payOnline = async () => {
    if (!(await loadRazorpay())) {
      return failPayment("Could not load the payment window. Check your internet connection and try again.");
    }

    let rzOrder;
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((it) => ({ name: it.name, qty: it.qty })),
          shipping: shipping(),
        }),
      });
      rzOrder = await res.json().catch(() => ({}));
      if (!res.ok) return failPayment(rzOrder.error || "Could not start the payment. Please try again.");
    } catch {
      return failPayment("Could not reach the payment server. Please try again.");
    }

    const rzp = new window.Razorpay({
      key: rzOrder.keyId,
      order_id: rzOrder.orderId,
      amount: rzOrder.amount,
      currency: rzOrder.currency,
      description: `${cart.reduce((s, it) => s + it.qty, 0)} items`,
      prefill: { name: form.name, email: form.email, contact: form.phone },
      theme: { color: "#c2410c" },
      modal: {
        ondismiss: () => {
          // keep a failure reason from payment.failed if there was one
          setPayError((prev) => prev || "Payment cancelled. Your cart is still here — try again whenever you're ready.");
          setSubmitting(false);
        },
      },
      handler: async (resp) => {
        try {
          const res = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resp),
          });
          const out = await res.json().catch(() => ({}));
          if (!res.ok || !out.ok) throw new Error();
        } catch {
          return failPayment(
            `We couldn't confirm your payment (ID ${resp.razorpay_payment_id}). If money was deducted, please contact us with this ID.`
          );
        }
        finish(
          { method: "online", paymentId: resp.razorpay_payment_id, razorpayOrderId: resp.razorpay_order_id },
          rzOrder.breakdown
        );
      },
    });
    rzp.on("payment.failed", (resp) => {
      setPayError(resp?.error?.description || "Payment failed. Please try again or choose another method.");
    });
    rzp.open();
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) {
      const firstErr = document.querySelector(".co-input.is-error, .co-method.is-error");
      if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setPayError("");
    setSubmitting(true);
    if (form.method === "online") payOnline();
    else finish({ method: "cod" }, { subTotal, deliveryFee, gst, grandTotal });
  };

  if (step === "success") {
    const o = order || lastOrder;
    const eta = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      weekday: "short", month: "short", day: "numeric",
    });

    return (
      <>
        <Navbar />
        <PageHero
          title="Thank You!"
          crumb="Order Confirmed"
          sub="Your homemade goodies are being hand-packed with love."
        >
          <StepTracker active={4} />
        </PageHero>

        <main className="co-page">
          <div className="co-container">
            <div className="co-success">
              <div className="co-success-tick">
                <IconCheck />
              </div>
              <h2>Order Placed!</h2>
              <p className="co-success-sub">
                Thank you{o?.shipping?.name ? `, ${o.shipping.name.split(" ")[0]}` : ""} — your pantry is being hand-packed.
              </p>

              <div className="co-success-card">
                <div className="co-success-row">
                  <span>Order ID</span>
                  <strong>{o?.id}</strong>
                </div>
                <div className="co-success-row">
                  <span>Total paid</span>
                  <strong>₹{o?.breakdown?.grandTotal?.toFixed(2) ?? o?.total?.toFixed(2)}</strong>
                </div>
                <div className="co-success-row">
                  <span>Payment</span>
                  <strong>
                    {o?.payment?.method === "online" && `Paid online · ${o.payment.paymentId}`}
                    {o?.payment?.method === "card" && `Card •••• ${o.payment.last4}`}
                    {o?.payment?.method === "upi" && `UPI · ${o.payment.upi}`}
                    {o?.payment?.method === "cod" && "Cash on Delivery"}
                  </strong>
                </div>
                <div className="co-success-row">
                  <span>Estimated delivery</span>
                  <strong>{eta}</strong>
                </div>
                {o?.shipping?.address && (
                  <div className="co-success-row">
                    <span>Shipping to</span>
                    <strong className="co-success-addr">
                      {o.shipping.address}, {o.shipping.city} — {o.shipping.pincode}
                    </strong>
                  </div>
                )}
              </div>

              <div className="co-success-actions">
                <Link href="/" className="co-success-cta">CONTINUE SHOPPING</Link>
                {user && <Link href="/profile" className="co-success-ghost">View my account</Link>}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageHero
        title="Checkout"
        sub="Just a few details and your homemade order is on its way."
      >
        <StepTracker active={shippingDone ? 2 : 1} />
      </PageHero>

      <main className="co-page">
        <div className="co-container">
          <ul className="co-perks">
            {PERKS.map((p) => (
              <li key={p.title} className="co-perk">
                <span className="co-perk-icon">{p.icon}</span>
                <span>
                  <strong>{p.title}</strong>
                  <small>{p.sub}</small>
                </span>
              </li>
            ))}
          </ul>

          {cart.length === 0 ? (
            <div className="co-empty">
              <p>Your cart is empty. Redirecting…</p>
            </div>
          ) : (
            <form className="co-grid" onSubmit={handleSubmit} noValidate>
              {/* LEFT — shipping + payment */}
              <section className="co-col">
                <div className="co-card">
                  <h2 className="co-card-title">
                    <span className="co-step-num">1</span>
                    <span>
                      Shipping Details
                      <small className="co-card-sub">Where should we deliver your order?</small>
                    </span>
                  </h2>

                  <div className="co-row">
                    <div className="co-field">
                      <label>Full name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Aarav Sharma" autoComplete="name"
                        className={`co-input ${errors.name ? "is-error" : ""}`}
                      />
                      {errors.name && <small className="co-err">{errors.name}</small>}
                    </div>
                    <div className="co-field">
                      <label>Phone *</label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="9876543210" inputMode="numeric" autoComplete="tel"
                        className={`co-input ${errors.phone ? "is-error" : ""}`}
                      />
                      {errors.phone && <small className="co-err">{errors.phone}</small>}
                    </div>
                  </div>

                  <div className="co-field">
                    <label>Email (for order updates)</label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" type="email" autoComplete="email"
                      className={`co-input ${errors.email ? "is-error" : ""}`}
                    />
                    {errors.email && <small className="co-err">{errors.email}</small>}
                  </div>

                  <div className="co-field">
                    <label>Address *</label>
                    <input
                      name="address" value={form.address} onChange={handleChange}
                      placeholder="House no, street, locality" autoComplete="street-address"
                      className={`co-input ${errors.address ? "is-error" : ""}`}
                    />
                    {errors.address && <small className="co-err">{errors.address}</small>}
                  </div>

                  <div className="co-row">
                    <div className="co-field">
                      <label>City *</label>
                      <input
                        name="city" value={form.city} onChange={handleChange}
                        placeholder="Bengaluru" autoComplete="address-level2"
                        className={`co-input ${errors.city ? "is-error" : ""}`}
                      />
                      {errors.city && <small className="co-err">{errors.city}</small>}
                    </div>
                    <div className="co-field">
                      <label>Pincode *</label>
                      <input
                        name="pincode" value={form.pincode} onChange={handleChange}
                        placeholder="560001" inputMode="numeric" autoComplete="postal-code"
                        className={`co-input ${errors.pincode ? "is-error" : ""}`}
                      />
                      {errors.pincode && <small className="co-err">{errors.pincode}</small>}
                    </div>
                  </div>

                  <div className="co-field">
                    <label>Delivery notes (optional)</label>
                    <textarea
                      name="notes" value={form.notes} onChange={handleChange}
                      placeholder="Leave at the door, call on arrival, etc."
                      rows={2}
                      className="co-input"
                    />
                  </div>
                </div>

                <div className="co-card">
                  <h2 className="co-card-title">
                    <span className="co-step-num">2</span>
                    <span>
                      Payment Method
                      <small className="co-card-sub">All transactions are secure and encrypted.</small>
                    </span>
                  </h2>

                  <div className="co-methods" role="radiogroup" aria-label="Payment method">
                    {METHODS.map((m) => (
                      <label
                        key={m.id}
                        className={`co-method ${form.method === m.id ? "is-on" : ""}`}
                      >
                        <input
                          type="radio"
                          name="method"
                          value={m.id}
                          checked={form.method === m.id}
                          onChange={handleChange}
                        />
                        <span className="co-method-icon" aria-hidden="true">{m.icon}</span>
                        <span className="co-method-text">
                          <strong>{m.label}</strong>
                          <small>{m.hint}</small>
                        </span>
                        <span className="co-method-radio" aria-hidden="true" />
                      </label>
                    ))}
                  </div>

                  {form.method === "online" && (
                    <div className="co-pay-fields">
                      <p className="co-pay-note">
                        <IconLock /> You&apos;ll pay in Razorpay&apos;s secure window — choose UPI (GPay, PhonePe, Paytm), card, netbanking or a wallet. We never see your card details.
                      </p>
                    </div>
                  )}

                  {form.method === "cod" && (
                    <div className="co-cod">
                      <p>Pay <strong>₹{grandTotal.toFixed(2)}</strong> in cash or via UPI when your order arrives. Keep change ready.</p>
                    </div>
                  )}
                </div>
              </section>

              {/* RIGHT — order summary */}
              <aside className="co-col co-aside">
                <div className="co-card co-summary">
                  <div className="co-summary-head">
                    <h2>Order Summary</h2>
                    <span className="co-summary-count">
                      {cart.reduce((s, it) => s + it.qty, 0)} items
                    </span>
                  </div>

                  <div className="co-summary-body">
                    <ul className="co-items">
                      {cart.map((it) => (
                        <li key={it.name} className="co-item">
                          <div className="co-item-img">
                            <img src={it.img} alt={it.name} />
                            <span className="co-item-qty">{it.qty}</span>
                          </div>
                          <div className="co-item-body">
                            <h4>{it.name}</h4>
                            <div className="co-item-controls">
                              <div className="co-qty">
                                <button type="button" onClick={() => setQty(it.name, it.qty - 1)} disabled={it.qty <= 1} aria-label="Decrease">−</button>
                                <span>{it.qty}</span>
                                <button type="button" onClick={() => setQty(it.name, it.qty + 1)} aria-label="Increase">+</button>
                              </div>
                              <button type="button" className="co-item-remove" onClick={() => removeFromCart(it.name)}>
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="co-item-price">₹{(it.qty * it.price).toFixed(2)}</div>
                        </li>
                      ))}
                    </ul>

                    <div className="co-free-meter">
                      <p>
                        {subTotal < FREE_DELIVERY_ABOVE ? (
                          <>Add <strong>₹{(FREE_DELIVERY_ABOVE - subTotal).toFixed(2)}</strong> more for FREE delivery</>
                        ) : (
                          <>🎉 You&apos;ve unlocked <strong>FREE delivery!</strong></>
                        )}
                      </p>
                      <div className="co-free-bar"><span style={{ width: `${freeProgress}%` }} /></div>
                    </div>

                    <div className="co-breakdown">
                      <div><span>Subtotal</span><span>₹{subTotal.toFixed(2)}</span></div>
                      <div>
                        <span>Delivery</span>
                        <span>{deliveryFee === 0 ? <em className="co-free">FREE</em> : `₹${deliveryFee.toFixed(2)}`}</span>
                      </div>
                      <div><span>GST (5%)</span><span>₹{gst.toFixed(2)}</span></div>
                      <div className="co-grand"><span>Total</span><span>₹{grandTotal.toFixed(2)}</span></div>
                    </div>

                    {payError && <p className="co-pay-error" role="alert">{payError}</p>}

                    <button type="submit" className="co-submit" disabled={submitting}>
                      {submitting ? (
                        <>
                          <span className="co-spinner" aria-hidden="true" /> PROCESSING…
                        </>
                      ) : (
                        <>
                          <IconLock /> {form.method === "online" ? "PAY" : "PLACE ORDER"} · ₹{grandTotal.toFixed(2)}
                        </>
                      )}
                    </button>

                    <p className="co-trust">
                      <IconLock /> 256-bit encrypted · no card data stored
                    </p>
                    <Link href="/" className="co-back">
                      <IconBack /> Continue shopping
                    </Link>
                  </div>
                </div>
              </aside>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
