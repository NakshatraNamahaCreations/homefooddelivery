"use client";

import { useState } from "react";

const reviews = [
  {
    text: "I never thought a jar of honey could change my morning chai, but here we are. You can actually taste the wildflowers — nothing like the supermarket stuff. The pickles arrived sealed perfectly and the ghee smells exactly like my mother's kitchen. This is real food, finally.",
    name: "Anjali Mehra",
    loc: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&q=85",
    accent: "#f08533",
  },
  {
    text: "Ordered the masala powder and the cold-pressed groundnut oil on a whim — both blew us away. The masala is small-batch and you can smell it the moment you open the jar. Delivery was on time, packaging was sturdy, and the family hasn't bought anything from the chain shop since.",
    name: "Rohan Iyer",
    loc: "Chennai",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=85",
    accent: "#e8a87c",
  },
  {
    text: "What I love is the story behind every product — you can tell these are made by people who actually care. The turmeric is bright and earthy, the jaggery is genuinely organic, and even the labels feel personal. Easily my favourite pantry switch this year.",
    name: "Karthik Raman",
    loc: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=85",
    accent: "#e63946",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
  "https://images.unsplash.com/photo-1495546968767-f0573cca821e?w=900&q=85",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85",
];

const DishIcon = () => (
  <svg width="22" height="18" viewBox="0 0 64 50" fill="none" stroke="#f08533" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#f08533" stroke="#f08533" />
    <circle cx="32" cy="14" r="2.5" fill="#fff" stroke="none" />
    <line x1="4" y1="40" x2="60" y2="40" stroke="#f08533" />
  </svg>
);

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const review = reviews[idx];
  const hero = heroImages[idx];

  const go = (dir) => {
    const next = (idx + dir + reviews.length) % reviews.length;
    setIdx(next);
  };

  return (
    <section id="reviews" className="tm-section">
      {/* chilli accent in top-right (matches the popular deals section) */}
      <span className="tm-chilli" aria-hidden="true">
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
          <path d="M50 80 Q80 50, 130 30 Q145 24, 160 22" stroke="#3a8a3a" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M130 30 Q140 36, 150 50 Q155 65, 152 78 Q148 90, 138 92 Q128 92, 122 82 Q118 70, 122 56 Q126 42, 130 30 Z" fill="#e63946" />
          <circle cx="68" cy="78" r="3" fill="#e63946" />
          <circle cx="82" cy="68" r="2.5" fill="#e63946" />
          <circle cx="96" cy="58" r="3" fill="#e63946" />
          <circle cx="110" cy="48" r="2" fill="#e63946" />
          <circle cx="155" cy="98" r="3" fill="#e63946" />
          <circle cx="165" cy="86" r="2" fill="#e63946" />
        </svg>
      </span>

      {/* lettuce accent bottom-left */}
      <span className="tm-leaf" aria-hidden="true">
        <svg width="160" height="120" viewBox="0 0 160 120" fill="none">
          <path d="M20 100 Q10 80, 24 60 Q14 44, 32 32 Q26 18, 46 14 Q56 4, 72 14 Q86 6, 98 18 Q116 14, 124 32 Q140 36, 138 58 Q150 68, 142 86 Q146 102, 124 108 Q108 118, 90 110 Q72 118, 56 108 Q36 112, 20 100 Z" fill="#4aa84a" />
          <path d="M40 60 Q60 50, 80 60 M50 80 Q70 70, 90 80 M60 40 Q80 30, 100 40" stroke="#2a6e2a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </span>

      <div className="container tm-grid">
        {/* LEFT — copy */}
        <div className="tm-copy">
          <span className="tm-eyebrow">
            <DishIcon />
            TESTIMONIALS
            <DishIcon />
          </span>

          <h2 className="tm-title">
            What Have Lots Of Happy
            <br />
            Customer Feedback
          </h2>

          <div className="tm-divider" />

          <span className="tm-quote" aria-hidden="true">
            <svg width="38" height="32" viewBox="0 0 38 32" fill="#f08533">
              <path d="M0 32 V18 C0 8, 4 2, 14 0 L16 6 C10 8, 8 12, 8 16 H14 V32 Z" />
              <path d="M22 32 V18 C22 8, 26 2, 36 0 L38 6 C32 8, 30 12, 30 16 H36 V32 Z" />
            </svg>
          </span>

          <p key={idx} className="tm-text">{review.text}</p>

          {/* avatars + nav */}
          <div className="tm-foot">
            <div className="tm-avatars" role="tablist" aria-label="Choose a customer story">
              {reviews.map((r, i) => (
                <button
                  key={i}
                  className={`tm-avatar ${i === idx ? "is-active" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Read ${r.name}'s review`}
                  aria-selected={i === idx}
                  style={{ "--avatar-accent": r.accent }}
                >
                  <img src={r.avatar} alt="" />
                </button>
              ))}
              <span className="tm-rule" aria-hidden="true" />
            </div>

            <div className="tm-nav">
              <button className="tm-nav-btn" onClick={() => go(-1)} aria-label="Previous review">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button className="tm-nav-btn" onClick={() => go(1)} aria-label="Next review">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — hexagon photo */}
        <div className="tm-hex-wrap">
          <div className="tm-hex-ring" aria-hidden="true" />
          <div className="tm-hex">
            <img key={idx} src={hero} alt={`Customer enjoying ${review.name}'s favourite homemade product`} />
          </div>
        </div>
      </div>
    </section>
  );
}
