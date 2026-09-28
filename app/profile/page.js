"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useShop } from "../components/ShopStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const PROFILE_KEY = "hp-profile-v1";
const ADDR_KEY = "hp-addresses-v1";

const IconBag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const IconHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const IconBox = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);
const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconHome = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconBriefcase = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const IconTag = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

function readLS(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(window.localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function writeLS(key, value) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

const onlyDigits = (s) => s.replace(/\D/g, "");
const newId = () => Math.random().toString(36).slice(2, 10);

const labelIcon = (label) => {
  if (label === "Home")  return <IconHome />;
  if (label === "Work")  return <IconBriefcase />;
  return <IconTag />;
};

export default function ProfilePage() {
  const router = useRouter();
  const {
    user, showToast, userOrders, wishCount, cartCount,
    setWishOpen, setCartOpen, setOrdersOpen,
  } = useShop();

  const [profile, setProfile] = useState({
    name: "", email: "", phone: "", dob: "",
  });
  const [originalProfile, setOriginalProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});

  const [addresses, setAddresses] = useState([]);
  const [addrModal, setAddrModal] = useState(null); // null | {} new | {id, ...} edit
  const [addrErrors, setAddrErrors] = useState({});

  // gate — only signed-in users
  useEffect(() => {
    if (!user) {
      const t = setTimeout(() => router.replace("/"), 80);
      return () => clearTimeout(t);
    }
  }, [user, router]);

  // hydrate per-user profile/addresses
  useEffect(() => {
    if (!user) return;
    const key = user.email;
    const allProfiles = readLS(PROFILE_KEY, {});
    const allAddr = readLS(ADDR_KEY, {});
    const p = allProfiles[key] || { name: user.name, email: user.email, phone: "", dob: "" };
    setProfile(p);
    setOriginalProfile(p);
    setAddresses(allAddr[key] || []);
  }, [user]);

  const persistProfile = (p) => {
    if (!user) return;
    const all = readLS(PROFILE_KEY, {});
    all[user.email] = p;
    writeLS(PROFILE_KEY, all);
  };
  const persistAddresses = (list) => {
    if (!user) return;
    const all = readLS(ADDR_KEY, {});
    all[user.email] = list;
    writeLS(ADDR_KEY, list ? all : all);
    writeLS(ADDR_KEY, all);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "phone") v = onlyDigits(v).slice(0, 10);
    setProfile((p) => ({ ...p, [name]: v }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validateProfile = () => {
    const e = {};
    if (!profile.name.trim()) e.name = "Required";
    if (profile.phone && profile.phone.length !== 10) e.phone = "Enter 10 digits or leave empty";
    if (profile.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(profile.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleProfileSave = (ev) => {
    ev.preventDefault();
    if (!validateProfile()) return;
    persistProfile(profile);
    setOriginalProfile(profile);
    setEditing(false);
    showToast("Profile updated");
  };

  const handleProfileCancel = () => {
    if (originalProfile) setProfile(originalProfile);
    setErrors({});
    setEditing(false);
  };

  // ----- ADDRESSES -----

  const openAddNew = () => {
    setAddrErrors({});
    setAddrModal({
      id: null,
      label: "Home",
      name: profile.name,
      phone: profile.phone,
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
      isDefault: addresses.length === 0,
    });
  };

  const openEdit = (a) => {
    setAddrErrors({});
    setAddrModal({ ...a });
  };

  const handleAddrChange = (e) => {
    const { name, value, type, checked } = e.target;
    let v = type === "checkbox" ? checked : value;
    if (name === "phone") v = onlyDigits(v).slice(0, 10);
    if (name === "pincode") v = onlyDigits(v).slice(0, 6);
    setAddrModal((m) => ({ ...m, [name]: v }));
    setAddrErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validateAddr = () => {
    const e = {};
    if (!addrModal.name?.trim()) e.name = "Required";
    if (!addrModal.phone || addrModal.phone.length !== 10) e.phone = "10-digit phone";
    if (!addrModal.line1?.trim()) e.line1 = "Required";
    if (!addrModal.city?.trim()) e.city = "Required";
    if (!addrModal.state?.trim()) e.state = "Required";
    if (!addrModal.pincode || addrModal.pincode.length !== 6) e.pincode = "6-digit pincode";
    setAddrErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAddrSave = (ev) => {
    ev.preventDefault();
    if (!validateAddr()) return;

    let next;
    if (addrModal.id) {
      next = addresses.map((a) => (a.id === addrModal.id ? { ...addrModal } : a));
    } else {
      next = [...addresses, { ...addrModal, id: newId() }];
    }

    // if marked default, unset others
    if (addrModal.isDefault) {
      next = next.map((a) => ({ ...a, isDefault: a.id === (addrModal.id || next[next.length - 1].id) }));
    } else if (!next.some((a) => a.isDefault) && next.length) {
      next[0].isDefault = true;
    }

    setAddresses(next);
    persistAddresses(next);
    setAddrModal(null);
    showToast(addrModal.id ? "Address updated" : "Address saved");
  };

  const handleAddrDelete = (id) => {
    let next = addresses.filter((a) => a.id !== id);
    if (!next.some((a) => a.isDefault) && next.length) next[0].isDefault = true;
    setAddresses(next);
    persistAddresses(next);
    showToast("Address removed", "warn");
  };

  const makeDefault = (id) => {
    const next = addresses.map((a) => ({ ...a, isDefault: a.id === id }));
    setAddresses(next);
    persistAddresses(next);
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <PageHero title="My Account" />
        <main className="pf-page">
          <div className="co-container">
            <div className="co-empty"><p>Sign in to view your profile…</p></div>
          </div>
        </main>
      </>
    );
  }

  const initials = profile.name
    ? profile.name.split(" ").map((s) => s[0]).filter(Boolean).slice(0, 2).join("").toUpperCase()
    : "?";

  const memberSince = new Date(user.joined || Date.now()).toLocaleDateString(undefined, {
    month: "long", year: "numeric",
  });

  const firstName = (profile.name || user.name || "").split(" ")[0];
  const recentOrders = userOrders.slice(0, 3);

  const tiles = [
    { label: "Orders",    value: userOrders.length, icon: <IconBag />,   onClick: () => setOrdersOpen(true) },
    { label: "Wishlist",  value: wishCount,         icon: <IconHeart />, onClick: () => setWishOpen(true) },
    { label: "In cart",   value: cartCount,         icon: <IconCart />,  onClick: () => setCartOpen(true) },
    { label: "Addresses", value: addresses.length,  icon: <IconPin />,   href: "#addr-card" },
  ];

  return (
    <>
    <Navbar />
    <PageHero
      title={`Hello, ${firstName || "there"}!`}
      crumb="My Account"
      sub="Your orders, favourites and saved addresses — all in one place."
    />
    <main className="pf-page">
      <div className="co-container">
        <div className="pf-grid">
          {/* LEFT — profile card + nav */}
          <aside className="pf-aside">
            <div className="pf-summary">
              <div className="pf-summary-cover" aria-hidden="true" />
              <div className="pf-avatar">{initials}</div>
              <h2>{profile.name || user.name}</h2>
              <p className="pf-email">{user.email}</p>
              <span className="pf-since">Member since {memberSince}</span>

              <div className="pf-stats">
                <div>
                  <strong>{userOrders.length}</strong>
                  <span>Orders</span>
                </div>
                <div>
                  <strong>{addresses.length}</strong>
                  <span>Addresses</span>
                </div>
              </div>
            </div>

            <nav className="pf-nav">
              <a href="#profile-card"><IconUser /> Personal Info</a>
              <a href="#orders-card"><IconBox /> Recent Orders</a>
              <a href="#addr-card"><IconPin /> Saved Addresses</a>
            </nav>
          </aside>

          {/* RIGHT — editable cards */}
          <section className="pf-main">
            {/* QUICK STAT TILES */}
            <div className="pf-tiles">
              {tiles.map((t) => {
                const inner = (
                  <>
                    <span className="pf-tile-icon">{t.icon}</span>
                    <span className="pf-tile-text">
                      <strong>{t.value}</strong>
                      <small>{t.label}</small>
                    </span>
                  </>
                );
                return t.href ? (
                  <a key={t.label} href={t.href} className="pf-tile">{inner}</a>
                ) : (
                  <button key={t.label} type="button" className="pf-tile" onClick={t.onClick}>{inner}</button>
                );
              })}
            </div>

            {/* PROFILE CARD */}
            <div id="profile-card" className="co-card pf-card">
              <header className="pf-card-head">
                <div>
                  <h2 className="co-card-title">Personal Info</h2>
                  <p className="pf-card-sub">Manage your name, contact, and date of birth.</p>
                </div>
                {!editing && (
                  <button type="button" className="pf-btn-ghost" onClick={() => setEditing(true)}>
                    <IconEdit /> Edit
                  </button>
                )}
              </header>

              {!editing ? (
                <dl className="pf-dl">
                  <div>
                    <dt>Full name</dt>
                    <dd>{profile.name || <em>Not set</em>}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>{profile.email}</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>{profile.phone ? `+91 ${profile.phone}` : <em>Not set</em>}</dd>
                  </div>
                  <div>
                    <dt>Date of birth</dt>
                    <dd>{profile.dob || <em>Not set</em>}</dd>
                  </div>
                </dl>
              ) : (
                <form className="pf-form" onSubmit={handleProfileSave} noValidate>
                  <div className="co-row">
                    <div className="co-field">
                      <label>Full name *</label>
                      <input
                        name="name" value={profile.name} onChange={handleProfileChange}
                        className={`co-input ${errors.name ? "is-error" : ""}`}
                      />
                      {errors.name && <small className="co-err">{errors.name}</small>}
                    </div>
                    <div className="co-field">
                      <label>Phone</label>
                      <input
                        name="phone" value={profile.phone} onChange={handleProfileChange}
                        placeholder="10-digit" inputMode="numeric"
                        className={`co-input ${errors.phone ? "is-error" : ""}`}
                      />
                      {errors.phone && <small className="co-err">{errors.phone}</small>}
                    </div>
                  </div>
                  <div className="co-row">
                    <div className="co-field">
                      <label>Email</label>
                      <input
                        name="email" value={profile.email} onChange={handleProfileChange}
                        type="email"
                        className={`co-input ${errors.email ? "is-error" : ""}`}
                      />
                      {errors.email && <small className="co-err">{errors.email}</small>}
                    </div>
                    <div className="co-field">
                      <label>Date of birth</label>
                      <input
                        name="dob" value={profile.dob} onChange={handleProfileChange}
                        type="date"
                        className="co-input"
                      />
                    </div>
                  </div>

                  <div className="pf-form-actions">
                    <button type="button" className="pf-btn-ghost" onClick={handleProfileCancel}>Cancel</button>
                    <button type="submit" className="pf-btn-primary">Save changes</button>
                  </div>
                </form>
              )}
            </div>

            {/* RECENT ORDERS CARD */}
            <div id="orders-card" className="co-card pf-card">
              <header className="pf-card-head">
                <div>
                  <h2 className="co-card-title">Recent Orders</h2>
                  <p className="pf-card-sub">Track what&apos;s cooking and reorder your favourites.</p>
                </div>
                {userOrders.length > 0 && (
                  <button type="button" className="pf-btn-ghost" onClick={() => setOrdersOpen(true)}>
                    View all
                  </button>
                )}
              </header>

              {recentOrders.length === 0 ? (
                <div className="pf-empty">
                  <IconBag />
                  <p>No orders yet — your first homemade treat awaits!</p>
                  <Link href="/#menu" className="pf-btn-primary pf-btn-sm">Browse the menu</Link>
                </div>
              ) : (
                <ul className="pf-orders">
                  {recentOrders.map((o) => {
                    const count = (o.items || []).reduce((s, it) => s + it.qty, 0);
                    const total = o.breakdown?.grandTotal ?? o.total ?? 0;
                    return (
                      <li key={o.id} className="pf-order">
                        <div className="pf-order-thumbs">
                          {(o.items || []).slice(0, 3).map((it) => (
                            <img key={it.name} src={it.img} alt={it.name} />
                          ))}
                        </div>
                        <div className="pf-order-body">
                          <strong>{o.id}</strong>
                          <small>
                            {new Date(o.date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}
                            {" · "}{count} {count === 1 ? "item" : "items"}
                          </small>
                        </div>
                        <span className="pf-order-status">{o.status}</span>
                        <span className="pf-order-total">₹{total.toFixed(2)}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* ADDRESSES CARD */}
            <div id="addr-card" className="co-card pf-card">
              <header className="pf-card-head">
                <div>
                  <h2 className="co-card-title">Saved Addresses</h2>
                  <p className="pf-card-sub">Faster checkout — your default address is auto-filled.</p>
                </div>
                <button type="button" className="pf-btn-primary pf-btn-sm" onClick={openAddNew}>
                  <IconPlus /> Add new
                </button>
              </header>

              {addresses.length === 0 ? (
                <div className="pf-empty">
                  <IconPin />
                  <p>No saved addresses yet</p>
                  <button type="button" className="pf-btn-link" onClick={openAddNew}>
                    Add your first address
                  </button>
                </div>
              ) : (
                <div className="pf-addr-grid">
                  {addresses.map((a) => (
                    <article key={a.id} className={`pf-addr ${a.isDefault ? "is-default" : ""}`}>
                      <div className="pf-addr-head">
                        <span className="pf-addr-label">
                          {labelIcon(a.label)} {a.label}
                        </span>
                        {a.isDefault && <span className="pf-addr-default">Default</span>}
                      </div>
                      <p className="pf-addr-name">{a.name} <span>· +91 {a.phone}</span></p>
                      <p className="pf-addr-body">
                        {a.line1}
                        {a.line2 ? `, ${a.line2}` : ""}
                        <br />
                        {a.city}, {a.state} — {a.pincode}
                      </p>
                      <div className="pf-addr-actions">
                        {!a.isDefault && (
                          <button type="button" className="pf-btn-link" onClick={() => makeDefault(a.id)}>
                            Set as default
                          </button>
                        )}
                        <button type="button" className="pf-btn-link" onClick={() => openEdit(a)}>
                          <IconEdit /> Edit
                        </button>
                        <button type="button" className="pf-btn-link pf-link-danger" onClick={() => handleAddrDelete(a.id)}>
                          <IconTrash /> Remove
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* ADDRESS MODAL */}
      {addrModal && (
        <>
          <div className="hp-overlay is-open" onClick={() => setAddrModal(null)} aria-hidden="true" />
          <div className="hp-modal-wrap" role="dialog" aria-modal="true">
            <div className="hp-modal pf-modal">
              <button className="hp-modal-close" onClick={() => setAddrModal(null)} aria-label="Close">×</button>
              <div className="hp-modal-head">
                <h2>{addrModal.id ? "Edit address" : "New address"}</h2>
                <p>Saved here for faster checkout next time.</p>
              </div>

              <form className="pf-form" onSubmit={handleAddrSave} noValidate>
                <div className="pf-label-tabs" role="radiogroup" aria-label="Address label">
                  {["Home", "Work", "Other"].map((l) => (
                    <label key={l} className={`pf-label-tab ${addrModal.label === l ? "is-on" : ""}`}>
                      <input
                        type="radio"
                        name="label"
                        value={l}
                        checked={addrModal.label === l}
                        onChange={handleAddrChange}
                      />
                      {labelIcon(l)} {l}
                    </label>
                  ))}
                </div>

                <div className="co-row">
                  <div className="co-field">
                    <label>Full name *</label>
                    <input
                      name="name" value={addrModal.name || ""} onChange={handleAddrChange}
                      className={`co-input ${addrErrors.name ? "is-error" : ""}`}
                    />
                    {addrErrors.name && <small className="co-err">{addrErrors.name}</small>}
                  </div>
                  <div className="co-field">
                    <label>Phone *</label>
                    <input
                      name="phone" value={addrModal.phone || ""} onChange={handleAddrChange}
                      placeholder="10-digit" inputMode="numeric"
                      className={`co-input ${addrErrors.phone ? "is-error" : ""}`}
                    />
                    {addrErrors.phone && <small className="co-err">{addrErrors.phone}</small>}
                  </div>
                </div>

                <div className="co-field">
                  <label>Address line 1 *</label>
                  <input
                    name="line1" value={addrModal.line1 || ""} onChange={handleAddrChange}
                    placeholder="House no, street"
                    className={`co-input ${addrErrors.line1 ? "is-error" : ""}`}
                  />
                  {addrErrors.line1 && <small className="co-err">{addrErrors.line1}</small>}
                </div>

                <div className="co-field">
                  <label>Address line 2</label>
                  <input
                    name="line2" value={addrModal.line2 || ""} onChange={handleAddrChange}
                    placeholder="Apartment, landmark (optional)"
                    className="co-input"
                  />
                </div>

                <div className="co-row">
                  <div className="co-field">
                    <label>City *</label>
                    <input
                      name="city" value={addrModal.city || ""} onChange={handleAddrChange}
                      className={`co-input ${addrErrors.city ? "is-error" : ""}`}
                    />
                    {addrErrors.city && <small className="co-err">{addrErrors.city}</small>}
                  </div>
                  <div className="co-field">
                    <label>State *</label>
                    <input
                      name="state" value={addrModal.state || ""} onChange={handleAddrChange}
                      className={`co-input ${addrErrors.state ? "is-error" : ""}`}
                    />
                    {addrErrors.state && <small className="co-err">{addrErrors.state}</small>}
                  </div>
                </div>

                <div className="co-field">
                  <label>Pincode *</label>
                  <input
                    name="pincode" value={addrModal.pincode || ""} onChange={handleAddrChange}
                    placeholder="6-digit" inputMode="numeric"
                    className={`co-input ${addrErrors.pincode ? "is-error" : ""}`}
                  />
                  {addrErrors.pincode && <small className="co-err">{addrErrors.pincode}</small>}
                </div>

                <label className="pf-check">
                  <input
                    type="checkbox" name="isDefault"
                    checked={!!addrModal.isDefault} onChange={handleAddrChange}
                  />
                  <span>Set as default address</span>
                </label>

                <div className="pf-form-actions">
                  <button type="button" className="pf-btn-ghost" onClick={() => setAddrModal(null)}>Cancel</button>
                  <button type="submit" className="pf-btn-primary">
                    {addrModal.id ? "Save changes" : "Save address"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
    <Footer />
    </>
  );
}
