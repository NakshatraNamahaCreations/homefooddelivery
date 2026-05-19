"use client";

import { useRef, useState, useEffect } from "react";
import { useShop } from "./ShopStore";

const ALL = "ALL";

const products = [
  {
    name: "Pure Homemade Honey",
    sub: "Raw & Unprocessed",
    price: 24.0,
    rating: 4,
    category: "HONEY",
    img: "/golden-honey-glass-jar-with-burlap-lid_84443-76686-removebg-preview.png",
  },
  {
    name: "Organic Turmeric Powder",
    sub: "Stone-Ground & Pure",
    price: 28.0,
    rating: 4,
    category: "SPICES",
    img: "/turmeric-powder-wooden-bowl-with-green-leaves_9975-132220-removebg-preview.png",
  },
  {
    name: "Homemade Pickles",
    sub: "Traditional Family Recipe",
    price: 58.0,
    rating: 4,
    category: "PICKLES",
    img: "/pickled-red-peppers-mushrooms-glass-jar-wooden-plate__1_-removebg-preview.png",
  },
  {
    name: "Cold Pressed Coconut Oil",
    sub: "Wood-Pressed The Old Way",
    price: 70.0,
    rating: 4,
    category: "OILS",
    img: "/bottle-coconut-water-put-dark-background-removebg-preview.png",
  },
  {
    name: "Cold Pressed Groundnut Oil",
    sub: "Small-Batch, Natural",
    price: 65.0,
    rating: 4,
    category: "OILS",
    img: "/wood-cold-pressed-groundnut-oil-500x500.webp",
  },
  {
    name: "Homemade Ghee",
    sub: "Slow-Churned & Pure",
    price: 48.0,
    rating: 4,
    category: "GHEE",
    img: "/high-angle-jar-with-baby-food-removebg-preview.png",
  },
  {
    name: "Organic Jaggery",
    sub: "Naturally Sweet & Rich",
    price: 32.0,
    rating: 4,
    category: "JAGGERY",
    img: "/side-view-different-types-lump-sugar-bowls-white-background-removebg-preview.png",
  },
  {
    name: "Handmade Masala Powder",
    sub: "Freshly Ground Spice Blend",
    price: 38.0,
    rating: 4,
    category: "SPICES",
    img: "/still-life-with-various-spices-removebg-preview.png",
  },
  {
    name: "Homemade Sambar Powder",
    sub: "South Indian Family Recipe",
    price: 35.0,
    rating: 4,
    category: "SPICES",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=85",
  },
  {
    name: "Homemade Rasam Powder",
    sub: "Tangy & Aromatic Blend",
    price: 35.0,
    rating: 4,
    category: "SPICES",
    img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=85",
  },
  {
    name: "Organic Red Chilli Powder",
    sub: "Sun-Dried & Stone Ground",
    price: 42.0,
    rating: 4,
    category: "SPICES",
    img: "/red-curry-paste-made-from-chili-removebg-preview.png",
  },
  {
    name: "Organic Coriander Powder",
    sub: "Fresh & Fragrant",
    price: 30.0,
    rating: 4,
    category: "SPICES",
    img: "/bowls-with-green-matcha-wooden-tray_23-2148296727-removebg-preview.png",
  },
  {
    name: "Fresh Seasonal Fruits",
    sub: "Farm-Picked, Naturally Sweet",
    price: 55.0,
    rating: 4,
    category: "FRUITS",
    img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=85",
  },
  {
    name: "Mixed Fruit Basket",
    sub: "Hand-Selected Ripe & Ready",
    price: 75.0,
    rating: 5,
    category: "FRUITS",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=85",
  },
  {
    name: "Alphonso Mango Box",
    sub: "Pure Desi Aam, Seasonal",
    price: 120.0,
    rating: 5,
    category: "FRUITS",
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=85",
  },
  {
    name: "Fresh Vegetables Box",
    sub: "Garden-Fresh, Delivered Daily",
    price: 49.0,
    rating: 4,
    category: "VEGGIES",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=85",
  },
  {
    name: "Organic Greens Bundle",
    sub: "Spinach, Methi & Coriander",
    price: 39.0,
    rating: 4,
    category: "VEGGIES",
    img: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&q=85",
  },
  {
    name: "Farm Tomatoes & Onions",
    sub: "Straight From The Farm",
    price: 35.0,
    rating: 4,
    category: "VEGGIES",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=85",
  },
];

const tabs = [
  {
    id: ALL,
    label: "ALL",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="9" height="9" rx="2" />
        <rect x="18" y="5" width="9" height="9" rx="2" />
        <rect x="5" y="18" width="9" height="9" rx="2" />
        <rect x="18" y="18" width="9" height="9" rx="2" />
      </svg>
    ),
  },
  {
    id: "HONEY",
    label: "HONEY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8 h12 v3 h-12 z" />
        <path d="M11 11 v3 q0 2 5 2 t5 -2 v-3" />
        <path d="M11 16 v8 q0 2 5 2 t5 -2 v-8" />
        <path d="M16 11 v15" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "SPICES",
    label: "SPICES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="20" rx="11" ry="6" />
        <path d="M5 20 q11 -8 22 0" />
        <circle cx="10" cy="20" r="1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="22" r="1" fill="currentColor" stroke="none" />
        <circle cx="22" cy="20" r="1" fill="currentColor" stroke="none" />
        <path d="M16 14 q-1 -3 1 -5" />
      </svg>
    ),
  },
  {
    id: "OILS",
    label: "OILS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 6 h6 v3 h-6 z" />
        <path d="M14 9 q-3 1 -3 4 v13 q0 2 2 2 h6 q2 0 2 -2 v-13 q0 -3 -3 -4" />
        <path d="M13 18 h6" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "GHEE",
    label: "GHEE",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="10" rx="9" ry="3" />
        <path d="M7 10 v14 q0 3 9 3 t9 -3 v-14" />
        <path d="M11 16 q5 -2 10 0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "PICKLES",
    label: "PICKLES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="6" width="14" height="4" rx="1" />
        <path d="M10 10 v15 q0 2 2 2 h8 q2 0 2 -2 v-15" />
        <circle cx="14" cy="17" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
        <circle cx="15" cy="23" r="1.2" />
      </svg>
    ),
  },
  {
    id: "JAGGERY",
    label: "JAGGERY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22 l3 -10 h10 l3 10 z" />
        <path d="M11 12 l2 -4 h6 l2 4" />
        <path d="M11 17 h10" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "FRUITS",
    label: "FRUITS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 6 q1 -3 4 -3" />
        <path d="M10 10 q-3 0 -4 4 q-2 6 1 11 q2 4 5 5 q2 1 4 0 q2 1 4 0 q3 -1 5 -5 q3 -5 1 -11 q-1 -4 -4 -4 z" />
        <path d="M12 16 q4 -2 8 0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "VEGGIES",
    label: "VEGGIES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 26 q0 -8 0 -14" />
        <path d="M16 12 q-5 -1 -7 -5 q3 0 7 5" />
        <path d="M16 15 q5 -2 7 -6 q-3 0 -7 6" />
        <path d="M16 18 q-4 -1 -6 -4 q3 0 6 4" />
        <ellipse cx="16" cy="26" rx="5" ry="2" />
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

const Star = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f5b400" : "#e3e3e3"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const CartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
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

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function Dishes() {
  const trackRef = useRef(null);
  const [activeTab, setActiveTab] = useState(ALL);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const { addToCart, toggleWishlist, inWishlist } = useShop();

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
                    <article key={pr.name} className="pd-card">
                      <button
                        className={`pd-wish ${inWishlist(pr.name) ? "is-on" : ""}`}
                        onClick={() => toggleWishlist(pr)}
                        aria-label={inWishlist(pr.name) ? `Remove ${pr.name} from wishlist` : `Add ${pr.name} to wishlist`}
                        type="button"
                      >
                        <HeartIcon filled={inWishlist(pr.name)} />
                      </button>

                      <div className="pd-img-wrap">
                        <span className="pd-ring" aria-hidden="true" />
                        <img className="pd-img" src={pr.img} alt={pr.name} />
                      </div>

                      <div className="pd-body">
                        <span className="pd-cat-badge">{pr.category}</span>
                        <h3 className="pd-name">{pr.name}</h3>
                        <div className="pd-stars" aria-label={`${pr.rating} out of 5`}>
                          {[0, 1, 2, 3, 4].map((i) => (
                            <Star key={i} filled={i < pr.rating} />
                          ))}
                        </div>
                        <p className="pd-sub">{pr.sub}</p>
                        <div className="pd-price">₹{pr.price.toFixed(2)}</div>
                        <button
                          className="pd-order"
                          aria-label={`Add ${pr.name} to cart`}
                          type="button"
                          onClick={() => addToCart(pr)}
                        >
                          ADD TO CART
                          <CartIcon />
                        </button>
                      </div>
                    </article>
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
          <a href="#all" className="pd-viewall">
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
