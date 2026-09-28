"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ALL, products, tabs } from "../data/catalog";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
  { id: "name", label: "Name A–Z" },
];

const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

export default function MenuBrowser() {
  const [cat, setCat] = useState(ALL);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const searchRef = useRef(null);

  // honour ?cat=SPICES links from the hero / footer and #search from the navbar icon
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("cat")?.toUpperCase();
    if (fromUrl) setCat(fromUrl);
    const focusSearch = () => {
      if (window.location.hash === "#search") searchRef.current?.focus();
    };
    focusSearch();
    window.addEventListener("hashchange", focusSearch);
    return () => window.removeEventListener("hashchange", focusSearch);
  }, []);

  const chooseCat = (id) => {
    setCat(id);
    const url = id === ALL ? "/menu" : `/menu?cat=${id}`;
    window.history.replaceState(null, "", url);
  };

  const counts = useMemo(() => {
    const c = { [ALL]: products.length };
    products.forEach((p) => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter(
      (p) =>
        (cat === ALL || p.category === cat) &&
        (!q || `${p.name} ${p.sub} ${p.category}`.toLowerCase().includes(q))
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [cat, query, sort]);

  const activeLabel = tabs.find((t) => t.id === cat)?.label || cat;

  return (
    <div className="container">
      {/* TOOLBAR — search + sort */}
      <div className="mn-toolbar">
        <label className="mn-search">
          <IconSearch />
          <input
            id="search"
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search honey, masala, ghee…"
            aria-label="Search products"
          />
        </label>
        <label className="mn-sort">
          <span>Sort by</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>

      {/* CATEGORY CHIPS */}
      <nav className="mn-cats" aria-label="Filter by category">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`mn-cat ${cat === t.id ? "is-on" : ""}`}
            onClick={() => chooseCat(t.id)}
            aria-pressed={cat === t.id}
          >
            <span className="mn-cat-icon">{t.icon}</span>
            <span className="mn-cat-label">{t.label}</span>
            <span className="mn-cat-count">{counts[t.id] || 0}</span>
          </button>
        ))}
      </nav>

      <div className="mn-result-row">
        <p>
          Showing <strong>{visible.length}</strong> {visible.length === 1 ? "product" : "products"}
          {cat !== ALL && <> in <strong>{activeLabel}</strong></>}
          {query && <> for &ldquo;<strong>{query}</strong>&rdquo;</>}
        </p>
        {(cat !== ALL || query) && (
          <button type="button" className="mn-clear" onClick={() => { chooseCat(ALL); setQuery(""); }}>
            Clear filters ✕
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="pg-empty">
          <div className="pg-empty-icon"><IconSearch /></div>
          <h3>Nothing here yet</h3>
          <p>
            {cat !== ALL && !counts[cat]
              ? `Our ${activeLabel.toLowerCase()} range is coming soon — check back shortly.`
              : "Try a different search or browse all categories."}
          </p>
          <button type="button" className="pg-btn" onClick={() => { chooseCat(ALL); setQuery(""); }}>
            SHOW ALL PRODUCTS
          </button>
        </div>
      ) : (
        <div className="mn-grid">
          {visible.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      )}

      <aside className="pg-band">
        <div>
          <span className="pg-band-eyebrow">FREE DELIVERY</span>
          <h3>On every order above ₹499</h3>
          <p>Hand-packed fresh and delivered to your door in 2–3 days.</p>
        </div>
        <a href="/order" className="pg-btn">HOW ORDERING WORKS</a>
      </aside>
    </div>
  );
}
