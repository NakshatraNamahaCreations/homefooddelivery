export default function AboutSection() {
  return (
    <section className="ab">
      {/* faint decorative line icons scattered in the background */}
      <div className="ab-deco" aria-hidden="true">
        <svg className="ab-deco-1" width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="#d8d8d8" strokeWidth="1.4">
          <path d="M6 28 C 6 18, 14 12, 20 12 C 26 12, 34 18, 34 28 Z" />
          <circle cx="20" cy="14" r="1.5" fill="#d8d8d8" stroke="none" />
          <line x1="2" y1="30" x2="38" y2="30" />
        </svg>
        <svg className="ab-deco-2" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#d8d8d8" strokeWidth="1.4">
          <circle cx="20" cy="20" r="14" />
          <circle cx="20" cy="20" r="8" />
          <path d="M14 14 L26 26 M26 14 L14 26" />
        </svg>
        <svg className="ab-deco-3" width="44" height="40" viewBox="0 0 44 40" fill="none" stroke="#d8d8d8" strokeWidth="1.4">
          <path d="M4 14 Q 22 4, 40 14" />
          <path d="M6 18 Q 22 8, 38 18" />
          <path d="M8 22 Q 22 12, 36 22" />
        </svg>
        <svg className="ab-deco-4" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#d8d8d8" strokeWidth="1.4">
          <path d="M12 8 C 18 14, 22 26, 28 32" />
          <path d="M14 14 C 12 18, 12 22, 14 24" />
          <path d="M18 18 C 16 22, 16 26, 20 28" />
        </svg>
        <svg className="ab-deco-5" width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="#d8d8d8" strokeWidth="1.4">
          <circle cx="20" cy="20" r="15" />
          <line x1="8" y1="20" x2="32" y2="20" />
          <line x1="20" y1="8" x2="20" y2="32" />
        </svg>
      </div>

      <div className="ab-grid">
        {/* LEFT — backdrop photo + rotating plate */}
        <div className="ab-image ab-image-left">
          <img
            className="ab-bg"
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1100&q=85"
            alt=""
            aria-hidden="true"
          />
          <img
            className="ab-plate ab-plate-spin"
            src="/ChatGPT_Image_May_12__2026__12_56_17_PM__1_-removebg-preview.png"
            alt="Homemade pantry plate"
          />
        </div>

        {/* CENTER — about copy */}
        <div className="ab-copy">
          <div className="ab-eyebrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 18 C 4 12, 9 8, 12 8 C 15 8, 20 12, 20 18 Z" fill="#f08533" />
              <circle cx="12" cy="10" r="1" fill="#fff" />
              <line x1="2" y1="20" x2="22" y2="20" stroke="#f08533" strokeWidth="2" strokeLinecap="round" />
            </svg>
            ABOUT US
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 18 C 4 12, 9 8, 12 8 C 15 8, 20 12, 20 18 Z" fill="#f08533" />
              <circle cx="12" cy="10" r="1" fill="#fff" />
              <line x1="2" y1="20" x2="22" y2="20" stroke="#f08533" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="ab-title">
            Real Homemade Pantry, <br />
            Crafted The Honest Way
          </h2>

          <p className="ab-desc">
            From wildflower honey and stone-ground masala to cold-pressed oils and traditionally
            aged pickles — every jar is made in small batches by home cooks and family farms,
            with no preservatives and no shortcuts.
          </p>

          <a href="#order" className="ab-cta">
            ORDER NOW
            <span className="ab-cta-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* RIGHT — backdrop photo + rotating plate */}
        <div className="ab-image ab-image-right">
          <img
            className="ab-bg"
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1100&q=85"
            alt=""
            aria-hidden="true"
          />
          <img
            className="ab-plate ab-plate-spin"
            src="/ChatGPT_Image_May_12__2026__12_56_17_PM__2_-removebg-preview.png"
            alt="Homemade pantry plate"
          />
        </div>
      </div>
    </section>
  );
}
