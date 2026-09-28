import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import CartBar from "./CartBar";
import { products } from "../data/catalog";

export const metadata = {
  title: "Order Online — HomePlate",
  description: "Order homemade honey, spices, oils, ghee and pickles online. Free delivery above ₹499.",
};

const STEPS = [
  {
    title: "Pick your favourites",
    text: "Browse honey, masalas, cold-pressed oils, ghee, pickles and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Add to your cart",
    text: "Tap “Add to cart” on anything you like — adjust quantities any time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Checkout securely",
    text: "Pay by card, UPI or cash on delivery — whatever suits you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Delivered to your door",
    text: "Hand-packed fresh and at your doorstep in 2–3 days.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="14" height="12" rx="1" /><path d="M15 8h4l3 3v5h-7z" />
        <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
];

const DELIVERY = [
  { big: "2–3", unit: "days", title: "Delivery time", text: "Every order is packed fresh, then dispatched straight to you." },
  { big: "₹0", unit: "above ₹499", title: "Free delivery", text: "A flat ₹49 delivery fee applies to smaller orders." },
  { big: "3", unit: "ways to pay", title: "Easy payments", text: "Credit / debit card, UPI, or cash on delivery." },
  { big: "5%", unit: "GST", title: "Transparent pricing", text: "Taxes are shown clearly before you place the order." },
];

// best-rated first, then fill up to 8 from the rest of the catalogue
const bestsellers = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Order Online"
        sub="Real homemade pantry essentials, delivered warm to your door in four easy steps."
      />

      <main className="pg-page">
        <div className="container">
          {/* HOW IT WORKS */}
          <ol className="od-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="od-step">
                <span className="od-step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="od-step-icon" aria-hidden="true">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          {/* BESTSELLERS */}
          <header className="pg-head">
            <span className="section-eyebrow">START HERE</span>
            <h2 className="section-title">Customer Favourites</h2>
            <p className="pg-head-sub">Our most-loved jars — add them straight to your cart.</p>
          </header>

          <div className="mn-grid">
            {bestsellers.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>

          <div className="pg-center">
            <Link href="/menu" className="pg-btn">BROWSE THE FULL MENU →</Link>
          </div>

          {/* DELIVERY INFO */}
          <section id="delivery" className="od-delivery">
            <header className="pg-head pg-head-light">
              <span className="section-eyebrow">DELIVERY INFORMATION</span>
              <h2 className="section-title">Fresh From Our Kitchens To Yours</h2>
            </header>
            <div className="od-delivery-grid">
              {DELIVERY.map((d) => (
                <article key={d.title} className="od-dcard">
                  <p className="od-dcard-big">
                    {d.big} <small>{d.unit}</small>
                  </p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <CartBar />
      <Footer />
    </>
  );
}
