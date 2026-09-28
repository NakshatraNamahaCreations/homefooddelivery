"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useShop } from "./ShopStore";

const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconMinus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconHeart = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconBag = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export function CartDrawer() {
  const router = useRouter();
  const {
    cart, cartOpen, setCartOpen, removeFromCart, setQty, clearCart,
    cartTotal, cartCount,
  } = useShop();

  const handleCheckout = () => {
    if (!cart.length) return;
    setCartOpen(false);
    router.push("/checkout");
  };

  return (
    <>
      <div
        className={`hp-overlay ${cartOpen ? "is-open" : ""}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside className={`hp-drawer ${cartOpen ? "is-open" : ""}`} aria-label="Cart" role="dialog">
        <header className="hp-drawer-head">
          <h3>
            Your Cart
            {cartCount > 0 && <span className="hp-drawer-count">{cartCount}</span>}
          </h3>
          <button className="hp-drawer-close" onClick={() => setCartOpen(false)} aria-label="Close cart">
            <IconClose />
          </button>
        </header>

        {cart.length === 0 ? (
          <div className="hp-drawer-empty">
            <IconBag />
            <p>Your cart is empty</p>
            <button className="hp-drawer-link" onClick={() => setCartOpen(false)}>
              Browse pantry
            </button>
          </div>
        ) : (
          <>
            <div className="hp-drawer-body">
              {cart.map((it) => (
                <article className="hp-line" key={it.name}>
                  <div className="hp-line-img">
                    <img src={it.img} alt={it.name} />
                  </div>
                  <div className="hp-line-body">
                    <h4>{it.name}</h4>
                    <div className="hp-line-price">₹{it.price.toFixed(2)}</div>
                    <div className="hp-qty">
                      <button onClick={() => setQty(it.name, it.qty - 1)} aria-label="Decrease quantity" disabled={it.qty <= 1}>
                        <IconMinus />
                      </button>
                      <span>{it.qty}</span>
                      <button onClick={() => setQty(it.name, it.qty + 1)} aria-label="Increase quantity">
                        <IconPlus />
                      </button>
                    </div>
                  </div>
                  <button className="hp-line-remove" onClick={() => removeFromCart(it.name)} aria-label={`Remove ${it.name}`}>
                    <IconClose />
                  </button>
                </article>
              ))}
            </div>

            <footer className="hp-drawer-foot">
              <div className="hp-drawer-total">
                <span>Subtotal</span>
                <strong>₹{cartTotal.toFixed(2)}</strong>
              </div>
              <button className="hp-drawer-cta" onClick={handleCheckout}>
                PROCEED TO CHECKOUT
              </button>
              <button className="hp-drawer-link" onClick={clearCart}>
                Clear cart
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}

export function WishlistDrawer() {
  const {
    wishlist, wishOpen, setWishOpen, removeFromWishlist, addToCart,
  } = useShop();

  return (
    <>
      <div
        className={`hp-overlay ${wishOpen ? "is-open" : ""}`}
        onClick={() => setWishOpen(false)}
        aria-hidden="true"
      />
      <aside className={`hp-drawer ${wishOpen ? "is-open" : ""}`} aria-label="Wishlist" role="dialog">
        <header className="hp-drawer-head">
          <h3>
            Your Wishlist
            {wishlist.length > 0 && <span className="hp-drawer-count">{wishlist.length}</span>}
          </h3>
          <button className="hp-drawer-close" onClick={() => setWishOpen(false)} aria-label="Close wishlist">
            <IconClose />
          </button>
        </header>

        {wishlist.length === 0 ? (
          <div className="hp-drawer-empty">
            <IconHeart />
            <p>Your wishlist is empty</p>
            <button className="hp-drawer-link" onClick={() => setWishOpen(false)}>
              Browse pantry
            </button>
          </div>
        ) : (
          <div className="hp-drawer-body">
            {wishlist.map((it) => (
              <article className="hp-line" key={it.name}>
                <div className="hp-line-img">
                  <img src={it.img} alt={it.name} />
                </div>
                <div className="hp-line-body">
                  <h4>{it.name}</h4>
                  <div className="hp-line-price">₹{it.price.toFixed(2)}</div>
                  <button
                    className="hp-line-move"
                    onClick={() => { addToCart(it); removeFromWishlist(it.name); }}
                  >
                    Move to cart
                  </button>
                </div>
                <button className="hp-line-remove" onClick={() => removeFromWishlist(it.name)} aria-label={`Remove ${it.name}`}>
                  <IconClose />
                </button>
              </article>
            ))}
          </div>
        )}
      </aside>
    </>
  );
}

export function Toast() {
  const { toast } = useShop();
  if (!toast) return null;
  return (
    <div className={`hp-toast hp-toast-${toast.variant}`} role="status" aria-live="polite">
      {toast.text}
    </div>
  );
}

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconLockSm = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconEye = ({ off }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {off ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

export function AuthModal() {
  const {
    authOpen, setAuthOpen, authMode, setAuthMode, signIn, signUp,
  } = useShop();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // reset on open/mode-switch
  useEffect(() => {
    if (authOpen) {
      setForm({ name: "", email: "", password: "" });
      setErrors({});
      setShowPwd(false);
    }
  }, [authOpen, authMode]);

  if (!authOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined, form: undefined }));
  };

  const validate = () => {
    const e = {};
    if (authMode === "signup" && !form.name.trim()) e.name = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Invalid email";
    if (form.password.length < 6) e.password = "At least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      const result = authMode === "signin" ? signIn(form) : signUp(form);
      setSubmitting(false);
      if (!result.ok) {
        setErrors({ form: result.error });
        return;
      }
      setAuthOpen(false);
    }, 400);
  };

  return (
    <>
      <div className="hp-overlay is-open" onClick={() => setAuthOpen(false)} aria-hidden="true" />
      <div className="hp-modal-wrap" role="dialog" aria-modal="true" aria-labelledby="hp-auth-title">
        <div className="hp-modal">
          <button className="hp-modal-close" onClick={() => setAuthOpen(false)} aria-label="Close">
            <IconClose />
          </button>

          <div className="hp-modal-head">
            <div className="hp-modal-logo" aria-hidden="true">
              <svg width="44" height="36" viewBox="0 0 64 50">
                <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#e63946" />
                <circle cx="32" cy="16" r="2.6" fill="#f4c542" />
                <ellipse cx="32" cy="38" rx="28" ry="3" fill="#f4c542" />
              </svg>
            </div>
            <h2 id="hp-auth-title">
              {authMode === "signin" ? "Welcome back" : "Create your account"}
            </h2>
            <p>
              {authMode === "signin"
                ? "Sign in to track orders and save your pantry."
                : "Join HomePlate and get fresh, homemade pantry essentials at your door."}
            </p>
          </div>

          {/* tabs */}
          <div className="hp-auth-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={authMode === "signin"}
              className={`hp-auth-tab ${authMode === "signin" ? "is-on" : ""}`}
              onClick={() => setAuthMode("signin")}
            >
              Sign in
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={authMode === "signup"}
              className={`hp-auth-tab ${authMode === "signup" ? "is-on" : ""}`}
              onClick={() => setAuthMode("signup")}
            >
              Sign up
            </button>
          </div>

          <form className="hp-auth-form" onSubmit={handleSubmit} noValidate>
            {authMode === "signup" && (
              <label className="hp-auth-field">
                <span>Full name</span>
                <div className={`hp-auth-input ${errors.name ? "is-error" : ""}`}>
                  <IconUser />
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="Aarav Sharma" autoComplete="name" autoFocus
                  />
                </div>
                {errors.name && <small className="hp-auth-err">{errors.name}</small>}
              </label>
            )}

            <label className="hp-auth-field">
              <span>Email</span>
              <div className={`hp-auth-input ${errors.email ? "is-error" : ""}`}>
                <IconMail />
                <input
                  name="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" type="email" autoComplete="email"
                  autoFocus={authMode === "signin"}
                />
              </div>
              {errors.email && <small className="hp-auth-err">{errors.email}</small>}
            </label>

            <label className="hp-auth-field">
              <span>Password</span>
              <div className={`hp-auth-input ${errors.password ? "is-error" : ""}`}>
                <IconLockSm />
                <input
                  name="password" value={form.password} onChange={handleChange}
                  placeholder="••••••••" type={showPwd ? "text" : "password"}
                  autoComplete={authMode === "signin" ? "current-password" : "new-password"}
                />
                <button type="button" className="hp-auth-eye" onClick={() => setShowPwd((v) => !v)} aria-label={showPwd ? "Hide password" : "Show password"}>
                  <IconEye off={showPwd} />
                </button>
              </div>
              {errors.password && <small className="hp-auth-err">{errors.password}</small>}
            </label>

            {errors.form && <div className="hp-auth-formerr">{errors.form}</div>}

            <button type="submit" className="hp-auth-submit" disabled={submitting}>
              {submitting ? (
                <><span className="co-spinner" aria-hidden="true" /> {authMode === "signin" ? "SIGNING IN…" : "CREATING ACCOUNT…"}</>
              ) : (
                authMode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"
              )}
            </button>

            <p className="hp-auth-switch">
              {authMode === "signin" ? (
                <>New here? <button type="button" onClick={() => setAuthMode("signup")}>Create an account</button></>
              ) : (
                <>Already have an account? <button type="button" onClick={() => setAuthMode("signin")}>Sign in</button></>
              )}
            </p>
          </form>

          <p className="hp-auth-note">
            <IconLockSm /> Your details stay in your browser — this is a frontend demo.
          </p>
        </div>
      </div>
    </>
  );
}

export function AccountMenu() {
  const {
    user, accountOpen, setAccountOpen, signOut,
    setWishOpen, setCartOpen, wishCount, cartCount,
    setOrdersOpen, userOrders,
  } = useShop();
  const wrapRef = useRef(null);

  // close on outside click / escape
  useEffect(() => {
    if (!accountOpen) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setAccountOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setAccountOpen(false); };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [accountOpen, setAccountOpen]);

  if (!user || !accountOpen) return null;

  const initials = user.name
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="hp-acct-menu" ref={wrapRef} role="menu">
      <div className="hp-acct-head">
        <span className="hp-acct-avatar">{initials}</span>
        <div className="hp-acct-id">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      </div>

      <button className="hp-acct-row" role="menuitem" onClick={() => { setAccountOpen(false); setCartOpen(true); }}>
        <span>Your Cart</span>
        <span className="hp-acct-badge">{cartCount}</span>
      </button>
      <button className="hp-acct-row" role="menuitem" onClick={() => { setAccountOpen(false); setWishOpen(true); }}>
        <span>Your Wishlist</span>
        <span className="hp-acct-badge">{wishCount}</span>
      </button>
      <button className="hp-acct-row" role="menuitem" onClick={() => { setAccountOpen(false); setOrdersOpen(true); }}>
        <span>Order History</span>
        <span className="hp-acct-badge">{userOrders.length}</span>
      </button>
      <Link href="/profile" className="hp-acct-row" role="menuitem" onClick={() => setAccountOpen(false)}>
        <span>Profile & Addresses</span>
      </Link>

      <div className="hp-acct-sep" />

      <button className="hp-acct-row hp-acct-signout" role="menuitem" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

const IconBox = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconChev = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function statusTone(status) {
  switch (status) {
    case "Delivered": return "ok";
    case "Cancelled": return "warn";
    default: return "info";
  }
}

function formatOrderDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function OrdersDrawer() {
  const { userOrders, ordersOpen, setOrdersOpen, reorder, setCartOpen } = useShop();
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <div
        className={`hp-overlay ${ordersOpen ? "is-open" : ""}`}
        onClick={() => setOrdersOpen(false)}
        aria-hidden="true"
      />
      <aside className={`hp-drawer hp-drawer-wide ${ordersOpen ? "is-open" : ""}`} aria-label="Order history" role="dialog">
        <header className="hp-drawer-head">
          <h3>
            Order History
            {userOrders.length > 0 && <span className="hp-drawer-count">{userOrders.length}</span>}
          </h3>
          <button className="hp-drawer-close" onClick={() => setOrdersOpen(false)} aria-label="Close">
            <IconClose />
          </button>
        </header>

        {userOrders.length === 0 ? (
          <div className="hp-drawer-empty">
            <IconBox />
            <p>No orders yet</p>
            <button className="hp-drawer-link" onClick={() => setOrdersOpen(false)}>
              Browse pantry
            </button>
          </div>
        ) : (
          <div className="hp-drawer-body hp-orders-body">
            {userOrders.map((o) => {
              const isOpen = expanded === o.id;
              const total = o.breakdown?.grandTotal ?? o.total ?? 0;
              const itemCount = o.items?.reduce((s, it) => s + (it.qty || 1), 0) || 0;
              const tone = statusTone(o.status);
              return (
                <article key={o.id} className={`hp-order ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="hp-order-head"
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : o.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="hp-order-head-l">
                      <div className="hp-order-id">
                        <strong>#{o.id}</strong>
                        <span className={`hp-order-badge hp-order-badge-${tone}`}>
                          {o.status || "Confirmed"}
                        </span>
                      </div>
                      <div className="hp-order-meta">
                        {formatOrderDate(o.date)} · {itemCount} item{itemCount > 1 ? "s" : ""}
                      </div>
                    </div>
                    <div className="hp-order-head-r">
                      <strong>₹{Number(total).toFixed(2)}</strong>
                      <IconChev open={isOpen} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="hp-order-body">
                      <ul className="hp-order-items">
                        {o.items?.map((it) => (
                          <li key={it.name} className="hp-order-item">
                            <div className="hp-order-item-img">
                              <img src={it.img} alt={it.name} />
                            </div>
                            <div className="hp-order-item-body">
                              <h4>{it.name}</h4>
                              <small>Qty {it.qty} · ₹{it.price.toFixed(2)} each</small>
                            </div>
                            <div className="hp-order-item-price">
                              ₹{(it.qty * it.price).toFixed(2)}
                            </div>
                          </li>
                        ))}
                      </ul>

                      {o.breakdown && (
                        <div className="hp-order-breakdown">
                          <div><span>Subtotal</span><span>₹{Number(o.breakdown.subTotal).toFixed(2)}</span></div>
                          <div><span>Delivery</span><span>{o.breakdown.deliveryFee === 0 ? "FREE" : `₹${Number(o.breakdown.deliveryFee).toFixed(2)}`}</span></div>
                          <div><span>GST</span><span>₹{Number(o.breakdown.gst).toFixed(2)}</span></div>
                          <div className="hp-order-grand"><span>Total</span><span>₹{Number(o.breakdown.grandTotal).toFixed(2)}</span></div>
                        </div>
                      )}

                      {o.shipping && (
                        <div className="hp-order-block">
                          <h5>Delivered to</h5>
                          <p>
                            <strong>{o.shipping.name}</strong>
                            {o.shipping.phone ? <> · {o.shipping.phone}</> : null}
                            <br />
                            {o.shipping.address}, {o.shipping.city} — {o.shipping.pincode}
                          </p>
                        </div>
                      )}

                      {o.payment && (
                        <div className="hp-order-block">
                          <h5>Payment</h5>
                          <p>
                            {o.payment.method === "card" && `Card ending •••• ${o.payment.last4}`}
                            {o.payment.method === "upi"  && `UPI · ${o.payment.upi}`}
                            {o.payment.method === "cod"  && "Cash on Delivery"}
                          </p>
                        </div>
                      )}

                      <div className="hp-order-actions">
                        <button
                          type="button"
                          className="hp-order-reorder"
                          onClick={() => { reorder(o); setOrdersOpen(false); setCartOpen(true); }}
                        >
                          Reorder
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </aside>
    </>
  );
}
