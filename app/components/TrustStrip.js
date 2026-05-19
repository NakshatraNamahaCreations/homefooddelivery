"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    label: "100% Organic",
    sub: "Certified & natural produce",
    accent: "#7cbf3f",
    bg: "#e9f7d6",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-11 5 3 8 7 8 11a7 7 0 0 1-7 7z" />
        <path d="M12 4v16" />
      </svg>
    ),
  },
  {
    label: "Secure Payments",
    sub: "Safe & encrypted checkout",
    accent: "#e63946",
    bg: "#ffe4e7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Sustainable Packaging",
    sub: "Eco-friendly & recyclable",
    accent: "#f08533",
    bg: "#ffe9d3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
      </svg>
    ),
  },
  {
    label: "Happy Customers",
    sub: "Trusted by thousands",
    accent: "#f4c542",
    bg: "#fff3c8",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="tx" ref={ref}>
      <div className="container">
        <div className={`tx-strip${visible ? " is-in" : ""}`}>
          {items.map((it, i) => (
            <div
              key={it.label}
              className="tx-item"
              style={{
                transitionDelay: `${i * 110}ms`,
                "--tx-accent": it.accent,
                "--tx-bg": it.bg,
              }}
            >
              <span className="tx-icon">{it.icon}</span>
              <div className="tx-text">
                <div className="tx-label">{it.label}</div>
                <div className="tx-sub">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
