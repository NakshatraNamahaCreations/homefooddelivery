const leftFeatures = [
  {
    title: "Cold-Pressed Pure Oils",
    desc: "Cold-pressed coconut and groundnut oils, extracted in small batches to lock in flavour and nutrition.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#f4c542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14c0 4 5 4 5 8M20 12c0 4 5 4 5 8M28 14c0 4 5 4 5 8" />
        <path d="M10 24c0 6 4 10 14 10s14-4 14-10z" fill="rgba(244,197,66,0.05)" />
        <line x1="8" y1="38" x2="40" y2="38" />
      </svg>
    ),
  },
  {
    title: "No Preservatives",
    desc: "Every jar is made the traditional way — no preservatives, no artificial colours, no shortcuts.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#f4c542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 28a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v4H12z" fill="rgba(244,197,66,0.05)" />
        <path d="M16 20c2-4 6-6 8-6s6 2 8 6" />
        <circle cx="20" cy="26" r="1" fill="#f4c542" />
        <circle cx="28" cy="28" r="1" fill="#f4c542" />
        <path d="M14 38h20" />
      </svg>
    ),
  },
];

const rightFeatures = [
  {
    title: "Stone-Ground Spices",
    desc: "Sun-dried, stone-ground spice powders blended in small batches for that real homemade aroma.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="12" fill="rgba(230,57,70,0.06)" />
        <path d="M16 22 Q24 16, 32 22" />
        <circle cx="20" cy="26" r="1.4" fill="#e63946" />
        <circle cx="28" cy="26" r="1.4" fill="#e63946" />
        <circle cx="24" cy="30" r="1.2" fill="#f4c542" />
      </svg>
    ),
  },
  {
    title: "Farm-Fresh Honey & Ghee",
    desc: "Raw, unfiltered wildflower honey and slow-churned ghee — straight from the source to your kitchen.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 14h16v4H16z" fill="rgba(230,57,70,0.06)" />
        <path d="M16 18 L18 38 H30 L32 18Z" fill="rgba(230,57,70,0.06)" />
        <path d="M20 24 Q22 28, 26 26" />
        <line x1="12" y1="42" x2="36" y2="42" />
      </svg>
    ),
  },
];

export default function ValueSection() {
  return (
    <section className="vs">
      <div className="container">
        <div className="vs-head">
          <span className="vs-fries" aria-hidden="true">
            {/* covered serving cloche — matches the brand icon */}
            <svg width="40" height="34" viewBox="0 0 64 50">
              <path d="M22 5c0 3 -2 5 0 8 M32 3c0 3 -2 5 0 8 M42 5c0 3 -2 5 0 8" stroke="#f4c542" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.85" />
              <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#e63946" />
              <circle cx="32" cy="16" r="2.5" fill="#f4c542" />
              <ellipse cx="32" cy="38" rx="28" ry="3" fill="#f4c542" />
            </svg>
          </span>

          <h2 className="vs-title">
            We Value Real Food,
            <br />
            Families &amp; Local Communities
          </h2>

          <svg className="vs-zigzag" width="64" height="14" viewBox="0 0 64 14" fill="none" stroke="#666" strokeWidth="1.6" strokeLinecap="round">
            <path d="M2 8 L10 2 L18 8 L26 2 L34 8 L42 2 L50 8 L58 2" />
          </svg>

          <p className="vs-lead">
            We&apos;re obsessed with bringing real, homemade food to your door. Here&apos;s how we actually do it.
          </p>
        </div>

        <div className="vs-paragraphs">
          <p>
            Every product we deliver is made the way it would be in your grandmother&apos;s kitchen — slow,
            unhurried, and full of care. We partner directly with home cooks, organic farmers and small
            family producers across the country to source honey, spices, oils and pickles you can trust.
          </p>
          <p>
            No factories, no shortcuts, no chemicals. From the wildflower honey poured into the jar to the
            stone-ground masala packed for delivery, the whole chain stays small, transparent and
            community-first — so what reaches your table is food the way it&apos;s meant to be.
          </p>
        </div>

        <div className="vs-grid">
          <div className="vs-col">
            {leftFeatures.map((f) => (
              <article key={f.title} className="vs-feature vs-feature-left">
                <div className="vs-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>

          <div className="vs-center">
            <div className="vs-ring">
              <div className="vs-circle">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85"
                  alt="A spread of homemade jars — honey, ghee, pickles and spices"
                />
                <button className="vs-play" aria-label="Watch our story">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1f1f1f">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="vs-col">
            {rightFeatures.map((f) => (
              <article key={f.title} className="vs-feature vs-feature-right">
                <div className="vs-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
