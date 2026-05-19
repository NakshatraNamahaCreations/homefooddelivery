// Food images selected for dark/colorful backgrounds — they look great on the
// dark promo cards even without transparent PNGs (no harsh white background).
// Inline SVG product illustrations — float cleanly on the dark card with no background
const HoneyArt = () => (
  <svg viewBox="0 0 220 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.55))" }}>
    {/* honey dipper */}
    <g transform="translate(132 12) rotate(20)">
      <rect x="-2" y="0" width="4" height="60" fill="#a16a3a" />
      <ellipse cx="0" cy="68" rx="13" ry="11" fill="#a16a3a" />
      <ellipse cx="0" cy="63" rx="12" ry="2" fill="#7d4f24" />
      <ellipse cx="0" cy="68" rx="12" ry="2.5" fill="#7d4f24" />
      <ellipse cx="0" cy="73" rx="11" ry="2" fill="#7d4f24" />
      {/* dripping honey */}
      <path d="M -1 79 Q -2 88, 0 96 Q 2 100, 0 110" fill="#f5a623" />
      <ellipse cx="0" cy="110" rx="3" ry="2" fill="#f5a623" />
    </g>
    {/* jar */}
    <g transform="translate(60 60)">
      <rect x="-2" y="0" width="64" height="14" rx="2" fill="#b87a2a" stroke="#7d4f24" strokeWidth="1.2" />
      <rect x="-2" y="0" width="64" height="3" fill="#7d4f24" />
      <path d="M 0 14 L 0 110 Q 0 116, 6 116 L 54 116 Q 60 116, 60 110 L 60 14 Z" fill="#f4a93a" stroke="#c47616" strokeWidth="1.5" />
      <ellipse cx="30" cy="14" rx="30" ry="3" fill="#d18620" />
      {/* honey gradient highlight */}
      <path d="M 5 22 Q 8 60, 5 100" fill="none" stroke="rgba(255,225,150,0.5)" strokeWidth="6" strokeLinecap="round" />
      {/* label */}
      <rect x="10" y="56" width="40" height="28" rx="2" fill="#fff" stroke="#c47616" strokeWidth="1" />
      <line x1="14" y1="65" x2="46" y2="65" stroke="#c47616" strokeWidth="1" />
      <text x="30" y="74" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c47616" fontFamily="sans-serif">HONEY</text>
      <line x1="14" y1="78" x2="46" y2="78" stroke="#c47616" strokeWidth="1" />
    </g>
    {/* small drip */}
    <ellipse cx="160" cy="155" rx="6" ry="3" fill="rgba(244,166,58,0.5)" />
  </svg>
);

const TurmericArt = () => (
  <svg viewBox="0 0 220 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.55))" }}>
    {/* wooden spoon */}
    <g transform="translate(20 90) rotate(-15)">
      <rect x="0" y="-3" width="80" height="6" rx="2" fill="#a16a3a" />
      <ellipse cx="100" cy="0" rx="28" ry="18" fill="#c89478" />
      <ellipse cx="100" cy="0" rx="24" ry="14" fill="#a16a3a" />
      {/* turmeric pile on spoon */}
      <path d="M 80 -8 Q 100 -16, 122 -10 Q 120 4, 100 6 Q 82 4, 80 -8 Z" fill="#e89318" />
      <circle cx="92" cy="-6" r="2" fill="#f5a623" />
      <circle cx="104" cy="-3" r="1.5" fill="#c47616" />
      <circle cx="110" cy="-7" r="1.5" fill="#f5a623" />
    </g>
    {/* turmeric root */}
    <g transform="translate(130 30) rotate(25)">
      <path d="M 0 0 Q 18 -4, 36 0 Q 50 4, 60 14 Q 56 28, 42 30 Q 24 32, 12 24 Q 0 14, 0 0 Z" fill="#e89318" stroke="#a86c10" strokeWidth="1.5" />
      <path d="M 8 8 Q 18 6, 28 9" stroke="#a86c10" strokeWidth="0.8" fill="none" />
      <path d="M 10 16 Q 22 14, 36 18" stroke="#a86c10" strokeWidth="0.8" fill="none" />
      {/* small root */}
      <ellipse cx="46" cy="34" rx="8" ry="5" fill="#e89318" stroke="#a86c10" strokeWidth="1" />
    </g>
    {/* scattered powder */}
    <circle cx="60" cy="60" r="2.5" fill="#f5a623" opacity="0.8" />
    <circle cx="50" cy="72" r="1.8" fill="#e89318" opacity="0.7" />
    <circle cx="48" cy="55" r="1.5" fill="#f5a623" opacity="0.6" />
    <circle cx="170" cy="125" r="2" fill="#e89318" opacity="0.7" />
    <circle cx="180" cy="115" r="1.5" fill="#f5a623" opacity="0.6" />
    <circle cx="190" cy="140" r="2.5" fill="#e89318" opacity="0.8" />
  </svg>
);

const VegetableArt = () => (
  <svg viewBox="0 0 220 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.55))" }}>
    {/* basket */}
    <path d="M 30 100 L 190 100 L 175 165 Q 173 170, 168 170 L 52 170 Q 47 170, 45 165 Z" fill="#8b5a2b" stroke="#5a3413" strokeWidth="2" />
    {/* basket weave */}
    <path d="M 50 110 L 170 110 M 48 122 L 172 122 M 50 134 L 170 134 M 52 146 L 168 146 M 54 158 L 166 158" stroke="#5a3413" strokeWidth="1" opacity="0.5" />
    {/* basket rim */}
    <ellipse cx="110" cy="100" rx="80" ry="8" fill="#a06a35" stroke="#5a3413" strokeWidth="1.5" />
    {/* tomato */}
    <circle cx="78" cy="85" r="20" fill="#e63946" stroke="#a01825" strokeWidth="1.5" />
    <ellipse cx="74" cy="78" rx="6" ry="3" fill="rgba(255,255,255,0.3)" />
    <path d="M 76 67 L 78 60 L 80 65 L 82 60 L 84 67" stroke="#2a6e2a" strokeWidth="2" fill="none" />
    {/* carrot */}
    <path d="M 138 70 L 148 100 L 158 70 Z" fill="#f08533" stroke="#c25a14" strokeWidth="1.5" />
    <path d="M 142 72 L 154 72 M 144 78 L 152 78 M 146 84 L 150 84" stroke="#c25a14" strokeWidth="0.8" />
    <path d="M 140 70 L 142 60 M 148 70 L 148 56 M 156 70 L 154 60" stroke="#3a8a3a" strokeWidth="2" strokeLinecap="round" />
    {/* broccoli */}
    <g transform="translate(105 70)">
      <ellipse cx="0" cy="0" rx="14" ry="10" fill="#3a8a3a" stroke="#1f5a1f" strokeWidth="1" />
      <circle cx="-8" cy="-4" r="5" fill="#4aa84a" />
      <circle cx="0" cy="-6" r="6" fill="#4aa84a" />
      <circle cx="8" cy="-4" r="5" fill="#4aa84a" />
      <circle cx="-5" cy="2" r="4" fill="#5cba5c" />
      <circle cx="5" cy="2" r="4" fill="#5cba5c" />
      <rect x="-2" y="6" width="4" height="6" fill="#d4cf9a" />
    </g>
    {/* leaf */}
    <path d="M 175 85 Q 195 75, 200 90 Q 195 100, 175 95 Z" fill="#4aa84a" stroke="#1f5a1f" strokeWidth="1" />
    {/* radish */}
    <circle cx="48" cy="95" r="10" fill="#d63a4a" stroke="#a01825" strokeWidth="1" />
    <ellipse cx="50" cy="100" rx="6" ry="3" fill="#fff" />
    <path d="M 45 86 L 44 78 M 50 84 L 51 76" stroke="#3a8a3a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const banners = [
  {
    eyebrow: "TODAY'S SPECIAL",
    title: "PURE HOMEMADE HONEY",
    sub: "Fresh, Natural, Delivered",
    badge: "30% OFF",
    ctaColor: "red",
    art: <HoneyArt />,
  },
  {
    eyebrow: "FARM FRESH PICK",
    title: "ORGANIC TURMERIC POWDER",
    sub: "Handmade, Chemical-Free",
    badge: "25% OFF",
    ctaColor: "orange",
    art: <TurmericArt />,
  },
  {
    eyebrow: "WEEKLY FRESH BASKET",
    title: "ORGANIC VEGETABLE COMBO",
    sub: "Fresh From Local Farms",
    badge: "40% OFF",
    ctaColor: "red",
    art: <VegetableArt />,
  },
];

export default function PromoBanners() {
  return (
    <section className="pb">
      <div className="container pb-grid">
        {banners.map((b, i) => (
          <article key={i} className="pb-card">
            <div className="pb-card-clip">
              <div className="pb-content">
                <span className="pb-eyebrow">{b.eyebrow}</span>
                <h3 className="pb-title">{b.title}</h3>
                <p className="pb-sub">{b.sub}</p>
                <a href="#order" className={`pb-cta pb-cta-${b.ctaColor}`}>
                  ORDER NOW
                  <span className="pb-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>

              <div className="pb-img">{b.art}</div>

              <span className="pb-sparkle" aria-hidden="true">
                <svg width="64" height="40" viewBox="0 0 64 40" fill="none" stroke="#f4c542" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M2 30 Q20 8, 40 12 T60 6" />
                  <circle cx="60" cy="6" r="1.5" fill="#f4c542" />
                </svg>
              </span>
            </div>

            <span className="pb-badge" aria-label={b.badge}>
              <svg width="66" height="66" viewBox="0 0 66 66">
                {/* scalloped/wavy edge — 12 petals around the badge */}
                <path
                  fill="#f4c542"
                  d="M33 3 l3.8 4.5 5.5-2 1.8 5.7 5.8.6-.5 5.8 5.5 2.2-2.7 5.2 4.5 3.8-4.5 3.8 2.7 5.2-5.5 2.2.5 5.8-5.8.6-1.8 5.7-5.5-2-3.8 4.5-3.8-4.5-5.5 2-1.8-5.7-5.8-.6.5-5.8-5.5-2.2 2.7-5.2L9 36l4.5-3.8L11 27 16.5 24.8 16 19l5.8-.6 1.8-5.7 5.5 2L33 3z"
                />
              </svg>
              <span className="pb-badge-text">{b.badge}</span>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
