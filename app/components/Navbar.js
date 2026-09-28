"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShop } from "./ShopStore";
import { AccountMenu } from "./ShopUI";

export default function Navbar() {
  const {
    setCartOpen, setWishOpen, cartCount, wishCount,
    user, setAuthOpen, setAuthMode, accountOpen, setAccountOpen,
  } = useShop();
  const pathname = usePathname();
  // "/news/some-post" still highlights "Latest News"
  const linkClass = (href) =>
    (href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "sp-active" : undefined;

  const handleAccountClick = () => {
    if (user) {
      setAccountOpen(!accountOpen);
    } else {
      setAuthMode("signin");
      setAuthOpen(true);
    }
  };

  const initials = user
    ? user.name.split(" ").map((s) => s[0]).filter(Boolean).slice(0, 2).join("").toUpperCase()
    : null;
  return (
    <header className="sp-nav">
      {/* TOP ROW — split links around the centered circular logo */}
      <div className="sp-row sp-row-top">
        <ul className="sp-links sp-links-left">
          <li><Link href="/" className={linkClass("/")}>Home</Link></li>
          <li><Link href="/order" className={linkClass("/order")}>Order Online</Link></li>
          <li>
            <Link href="/wishlist" className={linkClass("/wishlist")}>
              Your Wishlist{wishCount > 0 ? ` (${wishCount})` : ""}
            </Link>
          </li>
        </ul>

        <div className="sp-logo-wrap">
          <Link href="/" className="sp-logo" aria-label="Prakruthi Dan — home">
            <img src="/logo.jpeg" alt="Prakruthi Dan" className="sp-logo-img" />
          </Link>
        </div>

        <ul className="sp-links sp-links-right">
          <li><Link href="/menu" className={linkClass("/menu")}>Our Menu</Link></li>
          <li><Link href="/news" className={linkClass("/news")}>Latest News</Link></li>
          <li><Link href="/contact" className={linkClass("/contact")}>Contact us</Link></li>
        </ul>
      </div>

      {/* BOTTOM ROW — delivery info on left, action icons + CTA on right */}
      <div className="sp-row sp-row-bot">
        <div className="sp-delivery">
          <span className="sp-truck">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="6" width="22" height="16" rx="1" />
              <path d="M23 12h6l4 4v6h-10z" />
              <circle cx="8" cy="26" r="3.5" />
              <circle cx="28" cy="26" r="3.5" />
              <path d="M5 11h6M5 15h4" />
            </svg>
          </span>
          <div className="sp-delivery-text">
            <span className="sp-delivery-label">For Delivery, Call us</span>
            <a href="tel:+13205448749" className="sp-delivery-phone">9876545678</a>
          </div>
        </div>

        <div className="sp-actions">
          <Link href="/menu#search" className="sp-icon-btn" aria-label="Search products">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
          <div className="sp-acct-wrap">
            <button
              className={`sp-icon-btn sp-icon-acct ${user ? "is-signed" : ""}`}
              aria-label={user ? `Account menu for ${user.name}` : "Sign in"}
              aria-expanded={user ? accountOpen : undefined}
              onClick={handleAccountClick}
              type="button"
            >
              {user ? (
                <span className="sp-acct-initials">{initials}</span>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              )}
            </button>
            <AccountMenu />
          </div>
          <button className="sp-icon-btn sp-icon-wish" aria-label="Wishlist" onClick={() => setWishOpen(true)} type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishCount > 0 && <span className="sp-icon-badge">{wishCount}</span>}
          </button>
          <button className="sp-icon-btn sp-icon-cart" aria-label="Cart" onClick={() => setCartOpen(true)} type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            {cartCount > 0 && <span className="sp-icon-badge">{cartCount}</span>}
          </button>
          <Link href="/order" className="sp-cta">
            ORDER HOME MEAL
            <span className="sp-cta-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 64 50" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#fff" />
                <circle cx="32" cy="16" r="2.5" fill="#e63946" stroke="none" />
                <line x1="4" y1="40" x2="60" y2="40" stroke="#fff" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
