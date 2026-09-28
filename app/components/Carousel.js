"use client";

import { useRef } from "react";

const items = [
  {
    name: "Classic Vada Pav",
    tag: "Vibrant Taste",
    price: 60,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300&q=80",
  },
  {
    name: "Crunchy Bhel",
    tag: "Vibrant Taste",
    price: 110,
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&q=80",
  },
  {
    name: "Golden Samosa",
    tag: "Vibrant Taste",
    price: 45,
    rating: 4.2,
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80",
  },
  {
    name: "Kathi Roll",
    tag: "Vibrant Taste",
    price: 180,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1626500155449-1d27bdfd1f9b?w=300&q=80",
  },
  {
    name: "Pani Puri",
    tag: "Vibrant Taste",
    price: 80,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&q=80",
  },
  {
    name: "Paneer Tikka",
    tag: "Vibrant Taste",
    price: 220,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80",
  },
  {
    name: "Masala Chai",
    tag: "Vibrant Taste",
    price: 40,
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=300&q=80",
  },
  {
    name: "Dahi Puri",
    tag: "Vibrant Taste",
    price: 90,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1626777553635-c54a5d12cb33?w=300&q=80",
  },
];

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="card-stars">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <span key={i}>★</span>;
        if (i === full && half) return <span key={i} className="half">★</span>;
        return <span key={i} className="empty">★</span>;
      })}
      <span className="rating-num">{value.toFixed(1)}</span>
    </span>
  );
}

export default function Carousel() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector(".cx-card");
    const step = card ? card.offsetWidth + 24 : 280;
    t.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="cx" id="menu">
      <div className="container">
        <div className="cx-head">
          <div>
            <span className="section-eyebrow">Our Menu</span>
            <h2 className="section-title">
              Street favorites, <span className="accent">crafted fresh daily</span>
            </h2>
          </div>
          <div className="cx-arrows">
            <button className="cx-arrow" aria-label="Previous" onClick={() => scrollBy(-1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="cx-arrow" aria-label="Next" onClick={() => scrollBy(1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="cx-track" ref={trackRef}>
          {items.map((f) => (
            <article key={f.name} className="cx-card">
              <div className="cx-img">
                <img src={f.img} alt={f.name} />
              </div>
              <div className="cx-price">
                <span className="rupee">₹</span>{f.price}
              </div>
              <div className="cx-body">
                <h4>{f.name}</h4>
                <span className="cx-tag">{f.tag}</span>
                <Stars value={f.rating} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
