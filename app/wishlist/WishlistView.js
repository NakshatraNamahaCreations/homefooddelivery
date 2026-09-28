"use client";

import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { useShop } from "../components/ShopStore";
import { products } from "../data/catalog";

const IconHeart = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function WishlistView() {
  const { wishlist, addToCart, removeFromWishlist, showToast, hydrated } = useShop();

  const suggestions = products
    .filter((p) => !wishlist.some((w) => w.name === p.name))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const addAll = () => {
    wishlist.forEach((it) => addToCart(it));
    showToast(`${wishlist.length} item${wishlist.length > 1 ? "s" : ""} added to cart`);
  };

  const clearAll = () => {
    wishlist.forEach((it) => removeFromWishlist(it.name));
    showToast("Wishlist cleared", "warn");
  };

  if (!hydrated) return <div className="container pg-loading" aria-busy="true" />;

  const total = wishlist.reduce((s, it) => s + it.price, 0);

  return (
    <div className="container">
      {wishlist.length === 0 ? (
        <div className="pg-empty">
          <div className="pg-empty-icon"><IconHeart /></div>
          <h3>Your wishlist is empty</h3>
          <p>Tap the heart on any product to save it here for later.</p>
          <Link href="/menu" className="pg-btn">EXPLORE THE MENU</Link>
        </div>
      ) : (
        <>
          <div className="wl-bar">
            <div>
              <strong>{wishlist.length} saved {wishlist.length === 1 ? "item" : "items"}</strong>
              <span>Worth ₹{total.toFixed(2)} in total</span>
            </div>
            <div className="wl-bar-actions">
              <button type="button" className="pg-btn-ghost" onClick={clearAll}>Clear all</button>
              <button type="button" className="pg-btn" onClick={addAll}>ADD ALL TO CART</button>
            </div>
          </div>

          <div className="mn-grid">
            {wishlist.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </>
      )}

      {suggestions.length > 0 && (
        <section className="wl-suggest">
          <header className="pg-head">
            <span className="section-eyebrow">YOU MAY ALSO LIKE</span>
            <h2 className="section-title">More Homemade Favourites</h2>
          </header>
          <div className="mn-grid">
            {suggestions.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
