const features = [
  {
    title: "Free Delivery",
    desc: "Free doorstep delivery on every order above ₹499 — your homemade pantry, brought to you with care.",
    accent: "#e63946",
    bg: "#ffe4e7",
    glow: "rgba(230, 57, 70, 0.18)",
    stat: "₹499+",
    statLabel: "Free over",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    desc: "Bank-grade encryption on every transaction. Pay with cards, UPI or wallets — your data never leaves our vault.",
    accent: "#f08533",
    bg: "#ffe9d3",
    glow: "rgba(240, 133, 51, 0.18)",
    stat: "256-bit",
    statLabel: "Encryption",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Quality Guarantee",
    desc: "Every batch is tasted and sealed by hand. If a jar doesn't meet our standard, we'll replace or refund it — no questions asked.",
    accent: "#7cbf3f",
    bg: "#e9f7d6",
    glow: "rgba(124, 191, 63, 0.18)",
    stat: "100%",
    statLabel: "Guaranteed",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Save With Plans",
    desc: "Subscribe to our monthly pantry box and save up to 25%. Loyal customers unlock first access to seasonal harvests.",
    accent: "#f4c542",
    bg: "#fff3c8",
    glow: "rgba(244, 197, 66, 0.22)",
    stat: "25%",
    statLabel: "Save up to",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const DishIcon = () => (
  <svg width="22" height="18" viewBox="0 0 64 50" fill="none" stroke="#f08533" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#f08533" stroke="#f08533" />
    <circle cx="32" cy="14" r="2.5" fill="#fff" stroke="none" />
    <line x1="4" y1="40" x2="60" y2="40" stroke="#f08533" />
  </svg>
);

export default function Lifestyle() {
  return (
    <section className="ls">
      {/* ambient gradient mesh background */}
      <div className="ls-mesh" aria-hidden="true">
        <span className="ls-mesh-blob ls-mesh-blob-1" />
        <span className="ls-mesh-blob ls-mesh-blob-2" />
        <span className="ls-mesh-blob ls-mesh-blob-3" />
      </div>

      {/* decorative chilli accent top-right */}
      <span className="ls-deco-chilli" aria-hidden="true">
        <svg width="160" height="110" viewBox="0 0 180 120" fill="none">
          <path d="M50 80 Q80 50, 130 30 Q145 24, 160 22" stroke="#3a8a3a" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M130 30 Q140 36, 150 50 Q155 65, 152 78 Q148 90, 138 92 Q128 92, 122 82 Q118 70, 122 56 Q126 42, 130 30 Z" fill="#e63946" />
          <circle cx="68" cy="78" r="3" fill="#e63946" />
          <circle cx="96" cy="58" r="3" fill="#e63946" />
        </svg>
      </span>

      {/* decorative leaf bottom-left */}
      <span className="ls-deco-leaf" aria-hidden="true">
        <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
          <path d="M20 100 Q10 80, 24 60 Q14 44, 32 32 Q26 18, 50 14 Q70 4, 88 18 Q108 14, 118 36 Q132 48, 124 70 Q132 90, 110 100 Q90 110, 70 102 Q44 110, 20 100 Z" fill="#4aa84a" />
          <path d="M40 60 Q60 50, 80 60 M50 80 Q70 70, 90 80" stroke="#2a6e2a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </span>

      <div className="container ls-grid">
        {/* LEFT — 2x2 feature cards */}
        <div className="ls-left">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="ls-card"
              style={{
                "--ls-accent": f.accent,
                "--ls-bg": f.bg,
                "--ls-glow": f.glow,
                "--ls-delay": `${i * 0.08}s`,
              }}
            >
              <div className="ls-card-inner">
                <div className="ls-card-top">
                  <span className="ls-icon">
                    <span className="ls-icon-ring" aria-hidden="true" />
                    {f.icon}
                  </span>
                  <span className="ls-stat">
                    <span className="ls-stat-num">{f.stat}</span>
                    <span className="ls-stat-label">{f.statLabel}</span>
                  </span>
                </div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
                <span className="ls-card-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT — eyebrow, headline, copy, CTA, framed image */}
        <div className="ls-right">
          <span className="ls-eyebrow">
            <DishIcon />
            WHY HOMEPLATE
            <DishIcon />
          </span>

          <h2 className="ls-headline">
            We don&apos;t just Sell <br />
            Food<span className="ls-dash">—</span>We Promote <br />
            a <span className="ls-accent">Lifestyle.</span>
          </h2>

          <p className="ls-desc">
            From the wildflower honey on your morning toast to the masala that wakes up your
            dinner, every product we deliver is small-batch, real-ingredient and proudly
            homemade. We&apos;re building a quieter, kinder food chain — one jar at a time.
          </p>

          <div className="ls-cta-row">
            <a href="#order" className="ls-cta">
              EXPLORE THE PANTRY
              <span className="ls-cta-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>

            <div className="ls-mini-trust" aria-label="Customer rating">
              <div className="ls-stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f4c542">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="ls-mini-trust-text">
                <strong>4.9/5</strong> from 2,400+ pantries
              </span>
            </div>
          </div>

          <div className="ls-image">
            <span className="ls-image-bg" aria-hidden="true" />
            <span className="ls-image-blob ls-image-blob-1" aria-hidden="true" />
            <span className="ls-image-blob ls-image-blob-2" aria-hidden="true" />

            {/* floating chip — fresh badge */}
            <span className="ls-float-chip ls-float-chip-1" aria-hidden="true">
              <span className="ls-chip-dot" />
              100% Homemade
            </span>

            {/* floating chip — delivery */}
            <span className="ls-float-chip ls-float-chip-2" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              Delivered in 45 min
            </span>

            <img src="/ChatGPT_Image_May_12__2026__01_15_30_PM-removebg-preview.png" alt="A friendly local producer with a basket of fresh homemade pantry essentials" />
          </div>
        </div>
      </div>
    </section>
  );
}
