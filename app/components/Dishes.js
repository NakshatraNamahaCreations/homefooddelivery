"use client";

import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ALL, products, tabs } from "../data/catalog";

const DishIcon = () => (
  <svg width="22" height="18" viewBox="0 0 64 50" fill="none" stroke="#f08533" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#f08533" stroke="#f08533" />
    <circle cx="32" cy="14" r="2.5" fill="#fff" stroke="none" />
    <line x1="4" y1="40" x2="60" y2="40" stroke="#f08533" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Dishes() {
  const trackRef = useRef(null);
  const [activeTab, setActiveTab] = useState(ALL);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const filtered = activeTab === ALL ? products : products.filter((p) => p.category === activeTab);

  const perPage = () => {
    if (typeof window === "undefined") return 5;
    const w = window.innerWidth;
    return w <= 460 ? 1 : w <= 720 ? 2 : w <= 960 ? 3 : w <= 1180 ? 4 : 5;
  };

  useEffect(() => {
    const update = () => {
      const per = perPage();
      const count = Math.max(1, Math.ceil(filtered.length / per));
      setPageCount(count);
      setPage(0);
      if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: "instant" });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeTab, filtered.length]);

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const next = Math.min(pageCount - 1, Math.max(0, page + dir));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setPage(next);
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setPage(i);
  };

  const handleTab = (id) => {
    setActiveTab(id);
    setPage(0);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: "instant" });
  };

  const per = perPage();
  const pages = Math.max(1, Math.ceil(filtered.length / per));

  return (
    <section id="menu" className="pd-section">
      <span className="pd-chilli" aria-hidden="true">
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

      <div className="container">
        <div className="pd-head">
          <span className="pd-eyebrow">
            <DishIcon />
            OUR PRODUCTS
            <DishIcon />
          </span>
          <h2 className="pd-title">Handpicked Pantry Essentials</h2>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="pd-tabs-wrap">
          <nav className="pd-tabs" aria-label="Filter products by category">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`pd-tab ${activeTab === t.id ? "is-active" : ""}`}
                onClick={() => handleTab(t.id)}
                aria-pressed={activeTab === t.id}
              >
                <span className="pd-tab-icon">{t.icon}</span>
                <span className="pd-tab-label">{t.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pd-carousel">
          <button
            className="pd-nav pd-nav-prev"
            onClick={() => scrollByPage(-1)}
            disabled={page === 0}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <div className="pd-track" ref={trackRef}>
            {Array.from({ length: pages }).map((_, p) => (
              <div className="pd-page" key={p}>
                {filtered
                  .slice(p * per, p * per + per)
                  .map((pr) => (
                    <ProductCard key={pr.name} product={pr} />
                  ))}
              </div>
            ))}
          </div>

          <button
            className="pd-nav pd-nav-next"
            onClick={() => scrollByPage(1)}
            disabled={page >= pages - 1}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>

        {pages > 1 && (
          <div className="pd-dots" role="tablist" aria-label="Carousel pages">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={`pd-dot ${i === page ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                aria-selected={i === page}
              />
            ))}
          </div>
        )}

        <div className="pd-foot">
          <a href="/menu" className="pd-viewall">
            VIEW ALL ITEM
            <span className="pd-viewall-icon" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
