"use client";

import Link from "next/link";
import { useState } from "react";

const ALL = "All";

export default function NewsGrid({ posts }) {
  const [cat, setCat] = useState(ALL);
  const cats = [ALL, ...new Set(posts.map((p) => p.category))];
  const visible = cat === ALL ? posts : posts.filter((p) => p.category === cat);

  return (
    <section className="nw-list">
      <div className="nw-filter" role="group" aria-label="Filter articles by topic">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            className={`nw-chip ${cat === c ? "is-on" : ""}`}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="nw-grid">
        {visible.map((p) => (
          <article key={p.slug} className="nw-card">
            <Link href={`/news/${p.slug}`} className="nw-card-media" aria-label={p.title}>
              <img src={p.image} alt="" />
              <span className="nw-date">
                <strong>{p.day}</strong>
                {p.month}
              </span>
            </Link>
            <div className="nw-card-body">
              <p className="nw-meta">
                <span className="nw-cat">{p.category}</span>
                {p.readTime}
              </p>
              <h3>
                <Link href={`/news/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="nw-excerpt">{p.excerpt}</p>
              <Link href={`/news/${p.slug}`} className="nw-more">Read more →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
