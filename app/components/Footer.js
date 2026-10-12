"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="hp-footer">
        <div className="hp-foot-top container">
          <a href="/" className="hp-brand" aria-label="Prakruthi Dan — home">
            <img src="/logo.jpeg" alt="Prakruthi Dan" className="hp-logo-img" />
          </a>

          <p className="hp-tagline">
            Real homemade pantry essentials — <span className="hp-accent">honey, ghee, spices &amp; pickles</span>
            <br />
            sourced straight from home cooks and small family farms.
          </p>

          <div className="hp-socials">
            <a href="#" className="hp-soc" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.68.93 3.35.62 4.14.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.55 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.28 1.64.49 2.91.55 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.28-.76.49-1.64.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.55-2.91-.31-.79-.72-1.46-1.39-2.13C21.32 1.34 20.65.93 19.86.62 19.1.34 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zM18.41 4.16a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="#" className="hp-soc" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.9h-2.33v6.99C18.34 21.13 22 16.99 22 12z"/></svg>
            </a>
            <a href="#" className="hp-soc" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3.02 3.02 0 0 0 2.12-2.13C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.55 15.59V8.41L15.82 12l-6.27 3.59z"/></svg>
            </a>
            <a href="#" className="hp-soc" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 12 9.03c0 .32.04.64.1.94A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.48 4.07 4.07 0 0 1-1.86-.52v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.28a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68l-.01-.53A8.36 8.36 0 0 0 22 5.92z"/></svg>
            </a>
          </div>
        </div>

        <div className="hp-foot-cols container">
          <div className="hp-col">
            <h4>Help &amp; Information</h4>
            <p className="hp-help">
              Have a question about a product, an order, or a partnership? Our team
              is always happy to help — reach us by phone or email and we&apos;ll get
              back the same day.
            </p>
            <p className="hp-contact">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 98765 45678
            </p>
            <p className="hp-contact">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@homeplate.in
            </p>
          </div>

          <div className="hp-col">
            <h4>Our Pantry</h4>
            <ul>
              <li><a href="/menu?cat=HONEY">Pure Homemade Honey</a></li>
              <li><a href="/menu?cat=OILS">Cold-Pressed Oils</a></li>
              <li><a href="/menu?cat=SPICES">Stone-Ground Masala</a></li>
              <li><a href="/menu?cat=PICKLES">Traditional Pickles</a></li>
              <li><a href="/menu?cat=JAGGERY">Organic Jaggery</a></li>
              <li><a href="/menu?cat=GRAINS">Grains &amp; Millets</a></li>
              <li><a href="/menu?cat=CHIPS">Homemade Chips</a></li>
            </ul>
          </div>

          <div className="hp-col">
            <h4>Information</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/about#sourcing">Sourcing &amp; Producers</a></li>
              <li><a href="/order#delivery">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          <div className="hp-col">
            <h4>My Account</h4>
            <ul>
              <li><a href="/profile">Your Account</a></li>
              <li><a href="/checkout">Shopping Cart</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="/profile#orders-card">Order History</a></li>
              <li><a href="/contact#faq">Returns &amp; Refunds</a></li>
            </ul>
          </div>
        </div>

        <div className="hp-foot-bottom container">
          <p>© {new Date().getFullYear()} HomePlate. All rights reserved.</p>
          <p>Made with care for families who love real food.</p>
        </div>
      </footer>

      {/* Floating WhatsApp + Back to Top buttons */}
      <a
        href="https://wa.me/919876545678"
        target="_blank"
        rel="noopener noreferrer"
        className="hp-fab hp-fab-wa"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.86.51 3.6 1.4 5.1L2 22l5.05-1.33A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        className={`hp-fab hp-fab-top ${showTop ? "is-visible" : ""}`}
        aria-label="Back to top"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </>
  );
}
