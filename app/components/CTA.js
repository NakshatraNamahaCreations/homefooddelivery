"use client";

export default function CTA() {
  return (
    <section className="ts">
      <div className="ts-inner">
        {/* RED CURVED PANEL on the right */}
        <div className="ts-red" aria-hidden="true">
          <svg className="ts-red-pattern" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="ts-x" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M4 4 L10 10 M10 4 L4 10" stroke="rgba(255,255,255,0.16)" strokeWidth="1.4" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#ts-x)" />
          </svg>
        </div>

        {/* DECORATIONS — scattered ingredient accents on the dark side */}
        <span className="ts-deco ts-deco-tl" aria-hidden="true">
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
            <circle cx="14" cy="14" r="6" stroke="#f4c542" strokeWidth="2" fill="none" />
            <circle cx="32" cy="22" r="3" stroke="#f4c542" strokeWidth="1.6" fill="none" />
            <path d="M8 30 Q14 24, 22 28" stroke="#7cbf3f" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>

        <span className="ts-deco ts-deco-bl" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="8" stroke="#e63946" strokeWidth="2" fill="rgba(230,57,70,0.08)" />
            <path d="M22 18 Q24 14, 26 18" stroke="#7cbf3f" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>

        <span className="ts-deco ts-deco-bm" aria-hidden="true">
          <svg width="56" height="40" viewBox="0 0 60 40" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="22" cy="20" r="10" />
            <path d="M16 20 L28 20 M20 14 L26 26" />
          </svg>
        </span>

        {/* LEFT — copy */}
        <div className="ts-content">
          <span className="ts-eyebrow">FROM OUR HOME TO YOURS</span>
          <h2 className="ts-title">
            PANTRY ESSENTIALS,
            <br />
            HANDMADE FRESH
          </h2>
          <p className="ts-sub">Flat 45% off on our homemade range — this week only</p>
          <a href="#order" className="ts-cta">
            SHOP THE OFFER
            <span className="ts-cta-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* STARBURST 45% OFF BADGE — straddles the red/dark boundary */}
        <span className="ts-badge" aria-label="45% Off">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <path
              fill="#f08533"
              d="M70 4 l8 11 13-5 4 13 14 1 -1 14 13 5 -6 13 11 9 -11 9 6 13 -13 5 1 14 -14 1 -4 13 -13 -5 -8 11 -8 -11 -13 5 -4 -13 -14 -1 1 -14 -13 -5 6 -13 -11 -9 11 -9 -6 -13 13 -5 -1 -14 14 -1 4 -13 13 5z"
            />
          </svg>
          <span className="ts-badge-text">
            45%
            <br />
            Off
          </span>
        </span>

        {/* GROUP of products composed as an attractive cluster */}
        <div className="ts-group" aria-hidden="true">
          {/* glow disc behind the hero */}
          <span className="ts-glow" aria-hidden="true" />

          {/* back row — smaller, further away */}
          <img className="ts-prod ts-prod-back ts-prod-back-1" src="/turmeric-powder-wooden-bowl-with-green-leaves_9975-132220-removebg-preview.png" alt="" />
          <img className="ts-prod ts-prod-back ts-prod-back-2" src="/side-view-different-types-lump-sugar-bowls-white-background-removebg-preview.png" alt="" />

          {/* mid row — medium, flanking the hero */}
          <img className="ts-prod ts-prod-mid ts-prod-mid-1" src="/high-angle-jar-with-baby-food-removebg-preview.png" alt="" />
          <img className="ts-prod ts-prod-mid ts-prod-mid-2" src="/bottle-coconut-water-put-dark-background-removebg-preview.png" alt="" />

          {/* hero — biggest, raised, center */}
          <img className="ts-prod ts-prod-hero" src="/golden-honey-glass-jar-with-burlap-lid_84443-76686-removebg-preview.png" alt="Today's special — pure homemade honey" />

          {/* front row — small, closer, leaning into the hero */}
          <img className="ts-prod ts-prod-front ts-prod-front-1" src="/red-curry-paste-made-from-chili-removebg-preview.png" alt="" />
          <img className="ts-prod ts-prod-front ts-prod-front-2" src="/pickled-red-peppers-mushrooms-glass-jar-wooden-plate__1_-removebg-preview.png" alt="" />
          <img className="ts-prod ts-prod-front ts-prod-front-3" src="/still-life-with-various-spices-removebg-preview.png" alt="" />

          {/* sprinkles / spice flecks scattered around the cluster */}
          <span className="ts-fleck ts-fleck-1" aria-hidden="true" />
          <span className="ts-fleck ts-fleck-2" aria-hidden="true" />
          <span className="ts-fleck ts-fleck-3" aria-hidden="true" />
          <span className="ts-fleck ts-fleck-4" aria-hidden="true" />
          <span className="ts-fleck ts-fleck-5" aria-hidden="true" />
          <span className="ts-fleck ts-fleck-6" aria-hidden="true" />

          {/* small chilli accent leaning into the hero */}
          <svg className="ts-chilli" viewBox="0 0 60 80" aria-hidden="true">
            <path d="M28 8 Q26 4, 32 6 Q36 10, 34 16" stroke="#3a8a3a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M30 16 Q22 26, 22 44 Q22 60, 30 72 Q40 60, 40 44 Q40 28, 30 16 Z" fill="#e63946" />
            <path d="M30 22 Q26 32, 28 48" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
