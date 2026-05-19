"use client";

import { useState } from "react";

const slides = [
  {
    hero: "/golden-honey-glass-jar-with-burlap-lid_84443-76686-removebg-preview.png",
    heroAlt: "Hand-jarred wildflower honey",
    eyebrow: "Order Your Own Pantry",
    title: "It takes 2 minutes to pick your homemade pantry and order from us",
    steps: [
      {
        n: 1,
        title: "Pick Your Jar",
        desc: "Browse small-batch honey, ghee, masalas, oils & pickles. Every jar is hand-labelled and traceable to the family that made it.",
        img: "/golden-honey-glass-jar-with-burlap-lid_84443-76686-removebg-preview.png",
      },
      {
        n: 2,
        title: "Hand-Packed Fresh",
        desc: "Your order is hand-packed the same week it's made — no preservatives, no factory line, just clean food in honest packaging.",
        img: "/top-view-woman-holding-plum-basket-wooden-background_141793-52163-removebg-preview.png",
      },
      {
        n: 3,
        title: "Delivered Warm",
        desc: "Couriers bring it straight to your home, usually in 2 days — fully tracked, sealed, and ready for your kitchen shelf.",
        img: "/ChatGPT_Image_May_12__2026__01_15_30_PM-removebg-preview.png",
      },
    ],
  },
  {
    hero: "/turmeric-powder-wooden-bowl-with-green-leaves_9975-132220-removebg-preview.png",
    heroAlt: "Stone-ground turmeric powder",
    eyebrow: "From Field to Spice Rack",
    title: "It takes 2 minutes to bring real, stone-ground spices to your kitchen",
    steps: [
      {
        n: 1,
        title: "Sun-Dried Roots",
        desc: "Turmeric, chilli and coriander are sun-dried on small farms — no kilns, no shortcuts, just patient ancestral methods.",
        img: "/turmeric-powder-wooden-bowl-with-green-leaves_9975-132220-removebg-preview.png",
      },
      {
        n: 2,
        title: "Stone-Ground",
        desc: "Slow stone-grinding keeps the oils alive. The aroma you'll smell in your jar is the same aroma we smell at the mill.",
        img: "/still-life-with-various-spices-removebg-preview.png",
      },
      {
        n: 3,
        title: "Sealed & Sent",
        desc: "Vacuum-sealed within 48 hours, dispatched the same week, on your shelf with the flavour fully intact.",
        img: "/red-curry-paste-made-from-chili-removebg-preview.png",
      },
    ],
  },
];

const IconChevron = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke="#e63946" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWavy = () => (
  <svg width="56" height="14" viewBox="0 0 56 14" fill="none" aria-hidden="true">
    <path d="M2 7 Q 8 1, 14 7 T 26 7 T 38 7 T 50 7 L 54 7" stroke="#7cbf3f" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const IconChilli = () => (
  <svg width="44" height="70" viewBox="0 0 44 70" fill="none" aria-hidden="true" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4 Q 18 0, 14 4 Q 12 8, 16 12" />
    <path d="M16 12 Q 8 22, 8 38 Q 8 54, 16 64 Q 24 66, 30 60 Q 36 50, 34 36 Q 32 22, 22 12 Z" fill="rgba(255,255,255,0.04)" />
    <path d="M18 20 Q 14 32, 18 50" />
  </svg>
);

const IconFork = () => (
  <svg width="40" height="180" viewBox="0 0 40 180" fill="none" aria-hidden="true" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4 L 10 38" />
    <path d="M18 4 L 18 38" />
    <path d="M26 4 L 26 38" />
    <path d="M14 4 L 14 32 Q 14 38, 18 40 L 18 90 Q 18 100, 22 100 L 22 176" />
    <path d="M22 38 L 22 90" />
  </svg>
);

export default function HowItWorks() {
  const [idx, setIdx] = useState(0);
  const slide = slides[idx];

  return (
    <section id="how" className="hw">
      {/* fixed dark backdrop with subtle pattern */}
      <div className="hw-bg" aria-hidden="true" />
      <div className="hw-bg-tint" aria-hidden="true" />

      {/* decorative cutlery & chilli line art */}
      <span className="hw-deco hw-deco-fork-l" aria-hidden="true"><IconFork /></span>
      <span className="hw-deco hw-deco-fork-r" aria-hidden="true"><IconFork /></span>
      <span className="hw-deco hw-deco-chilli" aria-hidden="true"><IconChilli /></span>
      <span className="hw-deco hw-deco-plate" aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.3">
          <circle cx="80" cy="80" r="68" />
          <circle cx="80" cy="80" r="56" strokeDasharray="3 5" />
          <circle cx="80" cy="80" r="40" />
          <path d="M40 80 L 120 80 M 80 40 L 80 120" strokeLinecap="round" />
        </svg>
      </span>

      <div className="hw-inner container">
        {/* HEAD */}
        <header className="hw-head">
          <span className="hw-eyebrow">
            {slide.eyebrow} <IconWavy />
          </span>
          <h2 className="hw-title">{slide.title}</h2>
        </header>

        {/* STAGE — hero on the left, 3 circular steps on the right */}
        <div className="hw-stage">
          <div className="hw-hero" aria-hidden="true">
            <span className="hw-hero-glow" />
            <img src={slide.hero} alt={slide.heroAlt} />
          </div>

          <div className="hw-steps">
            {slide.steps.map((s, i) => (
              <div key={s.n} className="hw-step">
                <div className="hw-step-media">
                  <span className="hw-step-ring" aria-hidden="true" />
                  <div className="hw-step-img">
                    <img src={s.img} alt="" />
                  </div>
                </div>

                <span className="hw-step-label">Step {s.n}</span>
                <h3 className="hw-step-title">{s.title}</h3>
                <p className="hw-step-desc">{s.desc}</p>

                {i < slide.steps.length - 1 && (
                  <span className="hw-step-arrow" aria-hidden="true">
                    <IconChevron />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* pagination dots */}
        <div className="hw-dots" role="tablist" aria-label="How it works steps">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`Show slide ${i + 1}`}
              className={`hw-dot ${i === idx ? "is-on" : ""}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
