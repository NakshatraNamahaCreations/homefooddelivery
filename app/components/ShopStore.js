"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const ShopCtx = createContext(null);

const CART_KEY = "hp-cart-v1";
const WISH_KEY = "hp-wishlist-v1";
const USER_KEY = "hp-user-v1";
const USERS_KEY = "hp-users-v1";
const ORDERS_KEY = "hp-orders-v1";

function readLS(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const v = window.localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function writeLS(key, value) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin"); // signin | signup
  const [accountOpen, setAccountOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ordersOpen, setOrdersOpen] = useState(false);

  // hydrate from localStorage once
  useEffect(() => {
    setCart(readLS(CART_KEY, []));
    setWishlist(readLS(WISH_KEY, []));
    setUser(readLS(USER_KEY, null));
    setOrders(readLS(ORDERS_KEY, []));
    setHydrated(true);
  }, []);

  // persist
  useEffect(() => { if (hydrated) writeLS(CART_KEY, cart); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) writeLS(WISH_KEY, wishlist); }, [wishlist, hydrated]);
  useEffect(() => { if (hydrated) writeLS(USER_KEY, user); }, [user, hydrated]);
  useEffect(() => { if (hydrated) writeLS(ORDERS_KEY, orders); }, [orders, hydrated]);

  const showToast = useCallback((text, variant = "ok") => {
    setToast({ text, variant, id: Date.now() });
    setTimeout(() => setToast(null), 2200);
  }, []);

  const placeOrder = useCallback((orderInfo) => {
    const order = {
      id: "HP-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      date: new Date().toISOString(),
      items: cart,
      total: cart.reduce((s, it) => s + it.qty * it.price, 0),
      status: "Confirmed",
      userEmail: user?.email || null,
      ...orderInfo,
    };
    setOrders((o) => [order, ...o]);
    setLastOrder(order);
    setCart([]);
    return order;
  }, [cart, user]);

  const reorder = useCallback((order) => {
    if (!order?.items?.length) return;
    setCart(order.items.map((it) => ({ ...it })));
    showToast(`${order.items.length} item${order.items.length > 1 ? "s" : ""} added from #${order.id}`);
  }, [showToast]);

  const signUp = useCallback(({ name, email, password }) => {
    const users = readLS(USERS_KEY, {});
    const key = email.trim().toLowerCase();
    if (users[key]) return { ok: false, error: "An account with this email already exists." };
    users[key] = { name: name.trim(), email: key, password };
    writeLS(USERS_KEY, users);
    const u = { name: name.trim(), email: key, joined: Date.now() };
    setUser(u);
    showToast(`Welcome, ${u.name.split(" ")[0]}!`);
    return { ok: true };
  }, [showToast]);

  const signIn = useCallback(({ email, password }) => {
    const users = readLS(USERS_KEY, {});
    const key = email.trim().toLowerCase();
    const rec = users[key];
    if (!rec || rec.password !== password) {
      return { ok: false, error: "Invalid email or password." };
    }
    const u = { name: rec.name, email: rec.email, joined: rec.joined || Date.now() };
    setUser(u);
    showToast(`Welcome back, ${u.name.split(" ")[0]}!`);
    return { ok: true };
  }, [showToast]);

  const signOut = useCallback(() => {
    setUser(null);
    setAccountOpen(false);
    showToast("Signed out");
  }, [showToast]);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((c) => {
      const idx = c.findIndex((it) => it.name === product.name);
      if (idx >= 0) {
        const next = [...c];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...c, { ...product, qty }];
    });
    showToast(`Added to cart: ${product.name}`);
  }, [showToast]);

  const removeFromCart = useCallback((name) => {
    setCart((c) => c.filter((it) => it.name !== name));
  }, []);

  const setQty = useCallback((name, qty) => {
    setCart((c) =>
      c
        .map((it) => (it.name === name ? { ...it, qty: Math.max(1, qty) } : it))
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((product) => {
    setWishlist((w) => {
      const exists = w.some((it) => it.name === product.name);
      if (exists) {
        showToast(`Removed from wishlist: ${product.name}`, "warn");
        return w.filter((it) => it.name !== product.name);
      }
      showToast(`Added to wishlist: ${product.name}`);
      return [...w, product];
    });
  }, [showToast]);

  const removeFromWishlist = useCallback((name) => {
    setWishlist((w) => w.filter((it) => it.name !== name));
  }, []);

  const inWishlist = useCallback((name) => wishlist.some((it) => it.name === name), [wishlist]);

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);
  const cartTotal = cart.reduce((s, it) => s + it.qty * it.price, 0);
  const wishCount = wishlist.length;

  const userOrders = user
    ? orders.filter((o) => o.userEmail === user.email || !o.userEmail)
    : orders.filter((o) => !o.userEmail);

  const value = {
    cart, wishlist,
    addToCart, removeFromCart, setQty, clearCart,
    toggleWishlist, removeFromWishlist, inWishlist,
    cartOpen, setCartOpen,
    wishOpen, setWishOpen,
    cartCount, cartTotal, wishCount,
    toast, showToast,
    lastOrder, placeOrder,
    user, signIn, signUp, signOut,
    authOpen, setAuthOpen,
    authMode, setAuthMode,
    accountOpen, setAccountOpen,
    orders, userOrders,
    ordersOpen, setOrdersOpen,
    reorder,
    hydrated,
  };

  return <ShopCtx.Provider value={value}>{children}</ShopCtx.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopCtx);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
