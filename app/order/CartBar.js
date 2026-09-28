"use client";

import Link from "next/link";
import { useShop } from "../components/ShopStore";

// Sticky bottom bar on the order page — appears once the cart has something in it.
export default function CartBar() {
  const { cartCount, cartTotal, setCartOpen } = useShop();
  if (cartCount === 0) return null;

  return (
    <div className="od-cartbar" role="region" aria-label="Cart summary">
      <div className="od-cartbar-inner">
        <button type="button" className="od-cartbar-info" onClick={() => setCartOpen(true)}>
          <span className="od-cartbar-count">{cartCount}</span>
          <span>
            <strong>₹{cartTotal.toFixed(2)}</strong>
            <small>{cartCount === 1 ? "1 item" : `${cartCount} items`} · view cart</small>
          </span>
        </button>
        <Link href="/checkout" className="pg-btn">CHECKOUT →</Link>
      </div>
    </div>
  );
}
