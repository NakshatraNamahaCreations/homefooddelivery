const posts = [
  {
    day: "08",
    month: "May",
    author: "By HomePlate",
    category: "Honey",
    title: "Why Raw Wildflower Honey Beats The Supermarket Jar",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=900&q=80",
    href: "#blog-honey",
  },
  {
    day: "12",
    month: "May",
    author: "By HomePlate",
    category: "Spices",
    title: "Stone-Ground Turmeric: The Golden Spice In Your Kitchen",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=900&q=80",
    href: "#blog-turmeric",
  },
  {
    day: "20",
    month: "May",
    author: "By HomePlate",
    category: "Cold Pressed",
    title: "Cold-Pressed Oils & The Small-Batch Difference",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
    href: "#blog-oils",
  },
];

const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconTag = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const IconChevron = ({ dir = "left" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === "right" ? "rotate(180deg)" : "none" }}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default function Blog() {
  return (
    <section className="bg-news">
      {/* decorative line-art accents */}
      <span className="bg-deco bg-deco-burger" aria-hidden="true">
        <svg width="140" height="120" viewBox="0 0 140 120" fill="none" stroke="#cfc5b6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 70 Q70 30, 120 70" />
          <path d="M18 78 H122 Q122 96, 110 100 H30 Q18 96, 18 78 Z" />
          <path d="M22 82 H118" />
          <path d="M28 70 Q34 64, 40 70 M52 66 Q58 60, 64 66 M76 68 Q82 62, 88 68 M100 70 Q106 64, 112 70" />
        </svg>
      </span>

      <span className="bg-deco bg-deco-pizza" aria-hidden="true">
        <svg width="120" height="110" viewBox="0 0 120 110" fill="none" stroke="#cfc5b6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90 L60 10 L110 90 Z" />
          <path d="M22 80 L60 22 L98 80" />
          <circle cx="55" cy="55" r="4" />
          <circle cx="72" cy="68" r="4" />
          <circle cx="42" cy="72" r="3" />
        </svg>
      </span>

      <div className="container">
        <div className="bg-head">
          <span className="section-eyebrow">OUR BLOG</span>
          <h2 className="section-title">Our Latest Foods News</h2>
        </div>

        <div className="bg-stage">
          <button className="bg-arrow bg-arrow-left" aria-label="Previous post" type="button">
            <IconChevron dir="left" />
          </button>

          <div className="bg-grid">
            {posts.map((p) => (
              <article key={p.title} className="bg-card">
                <a href={p.href} className="bg-card-media" aria-label={p.title}>
                  <img src={p.image} alt={p.title} />
                  <span className="bg-card-overlay" aria-hidden="true" />
                </a>

                <div className="bg-card-body">
                  <div className="bg-meta-row">
                    <span className="bg-date">
                      <strong>{p.day}</strong>
                      <span>{p.month}</span>
                    </span>

                    <span className="bg-meta">
                      <IconUser />
                      {p.author}
                    </span>

                    <span className="bg-meta">
                      <IconTag />
                      {p.category}
                    </span>
                  </div>

                  <h3 className="bg-title">
                    <a href={p.href}>{p.title}</a>
                  </h3>

                  <a href={p.href} className="bg-readmore">
                    Read More
                    <IconArrow />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button className="bg-arrow bg-arrow-right" aria-label="Next post" type="button">
            <IconChevron dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
