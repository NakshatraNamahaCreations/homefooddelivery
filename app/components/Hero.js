"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Order Today, While It's Pure!",
    sub: "Real Homemade Pantry With Honest Flavours",
  },
  {
    title: "Stone-Ground, Sun-Dried Spices",
    sub: "Hand-Crafted Masalas Straight From Family Kitchens",
  },
  {
    title: "Cold-Pressed, Slow-Made Oils",
    sub: "Wood-Pressed The Old Way — Just Like Grandma's",
  },
];

// category pills — pure inline SVG icons, on-brand for a pantry shop
const categories = [
  {
    name: "HONEY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8 h12 v3 h-12 z" />
        <path d="M11 11 v3 q0 2 5 2 t5 -2 v-3" />
        <path d="M11 16 v8 q0 2 5 2 t5 -2 v-8" />
        <path d="M16 11 v15" opacity="0.45" />
      </svg>
    ),
  },
  {
    name: "SPICES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="20" rx="11" ry="6" />
        <path d="M5 20 q11 -8 22 0" />
        <circle cx="10" cy="20" r="1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="22" r="1" fill="currentColor" stroke="none" />
        <circle cx="22" cy="20" r="1" fill="currentColor" stroke="none" />
        <path d="M16 14 q-1 -3 1 -5" />
      </svg>
    ),
  },
  {
    name: "OILS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 6 h6 v3 h-6 z" />
        <path d="M14 9 q-3 1 -3 4 v13 q0 2 2 2 h6 q2 0 2 -2 v-13 q0 -3 -3 -4" />
        <path d="M13 18 h6" opacity="0.45" />
      </svg>
    ),
  },
  {
    name: "GHEE",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="10" rx="9" ry="3" />
        <path d="M7 10 v14 q0 3 9 3 t9 -3 v-14" />
        <path d="M11 16 q5 -2 10 0" opacity="0.55" />
      </svg>
    ),
  },
  {
    name: "PICKLES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="6" width="14" height="4" rx="1" />
        <path d="M10 10 v15 q0 2 2 2 h8 q2 0 2 -2 v-15" />
        <circle cx="14" cy="17" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
        <circle cx="15" cy="23" r="1.2" />
      </svg>
    ),
  },
  {
    name: "JAGGERY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22 l3 -10 h10 l3 10 z" />
        <path d="M11 12 l2 -4 h6 l2 4" />
        <path d="M11 17 h10" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "BAKERY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20 q0 -8 11 -8 t11 8 q0 4 -11 4 t-11 -4 z" />
        <path d="M10 17 l3 3 M14 16 l3 3 M18 17 l3 3" />
      </svg>
    ),
  },
  {
    name: "FRUITS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 6 q1 -3 4 -3" />
        <path d="M10 10 q-3 0 -4 4 q-2 6 1 11 q2 4 5 5 q2 1 4 0 q2 1 4 0 q3 -1 5 -5 q3 -5 1 -11 q-1 -4 -4 -4 z" />
        <path d="M12 16 q4 -2 8 0" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "VEGGIES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 26 q0 -8 0 -14" />
        <path d="M16 12 q-5 -1 -7 -5 q3 0 7 5" />
        <path d="M16 15 q5 -2 7 -6 q-3 0 -7 6" />
        <path d="M16 18 q-4 -1 -6 -4 q3 0 6 4" />
        <ellipse cx="16" cy="26" rx="5" ry="2" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[idx];

  return (
    <section className="hb">
      {/* fixed dark food backdrop + tint */}
      <div className="hb-bg" aria-hidden="true" />
      <div className="hb-bg-tint" aria-hidden="true" />

      <div className="hb-inner container">
        {/* CATEGORY ICON ROW */}
        <nav className="hb-cats" aria-label="Pantry categories">
          {categories.map((c) => (
            <a key={c.name} href={`/menu?cat=${c.name}`} className="hb-cat">
              <span className="hb-cat-icon">{c.icon}</span>
              <span className="hb-cat-name">{c.name}</span>
            </a>
          ))}
        </nav>

        {/* HEADLINE + CTA */}
        <div key={`copy-${idx}`} className="hb-copy">
          <h1 className="hb-title">{slide.title}</h1>
          <p className="hb-sub">{slide.sub}</p>
          <a href="/menu" className="hb-cta">VIEW OUR PRODUCT</a>
        </div>

        {/* PAGINATION DOTS */}
        <div className="hb-dots" role="tablist" aria-label="Banner slides">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`Show slide ${i + 1}`}
              className={`hb-dot ${i === idx ? "is-on" : ""}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
