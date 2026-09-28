"use client";

import { useShop } from "./ShopStore";

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

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Circular-image product card shared by the home carousel and the menu / order / wishlist pages.
export default function ProductCard({ product: pr }) {
  const { addToCart, toggleWishlist, inWishlist } = useShop();
  const wished = inWishlist(pr.name);

  return (
    <article className="pd-card">
      <button
        className={`pd-wish ${wished ? "is-on" : ""}`}
        onClick={() => toggleWishlist(pr)}
        aria-label={wished ? `Remove ${pr.name} from wishlist` : `Add ${pr.name} to wishlist`}
        type="button"
      >
        <HeartIcon filled={wished} />
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
  );
}
