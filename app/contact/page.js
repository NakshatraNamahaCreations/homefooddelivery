import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us — HomePlate",
  description: "Questions about an order, a product or a partnership? Get in touch with the HomePlate team.",
};

const CHANNELS = [
  {
    title: "Call us",
    value: "+91 98765 45678",
    href: "tel:+919876545678",
    note: "For delivery & order help",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Email us",
    value: "hello@homeplate.in",
    href: "mailto:hello@homeplate.in",
    note: "We reply the same day",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919876545678",
    note: "Quick answers on the go",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "How long does delivery take?",
    a: "Orders are hand-packed fresh and usually reach you within 2–3 days of being placed.",
  },
  {
    q: "How much is delivery?",
    a: "Delivery is free on orders above ₹499. Smaller orders have a flat ₹49 delivery fee.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "You can pay by credit or debit card, UPI (GPay, PhonePe, Paytm), or cash on delivery.",
  },
  {
    q: "Something arrived damaged — what do I do?",
    a: "Sorry about that! Call, email or WhatsApp us with your order ID and a photo, and our team will sort it out for you.",
  },
  {
    q: "Do your products contain preservatives?",
    a: "No. Everything is made in small batches by home cooks and family farms, without preservatives or shortcuts.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Contact Us"
        sub="A question about an order, a product or a partnership? We'd love to hear from you."
      />

      <main className="pg-page">
        <div className="container">
          <div className="ct-channels">
            {CHANNELS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="ct-channel"
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="ct-channel-icon" aria-hidden="true">{c.icon}</span>
                <span>
                  <small>{c.title}</small>
                  <strong>{c.value}</strong>
                  <em>{c.note}</em>
                </span>
              </a>
            ))}
          </div>

          <div className="ct-grid">
            <section className="ct-form-card">
              <h2>Send us a message</h2>
              <p className="ct-form-sub">Fill this in and we&apos;ll get back to you as soon as we can.</p>
              <ContactForm />
            </section>

            <section id="faq" className="ct-faq">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-title">Quick Answers</h2>
              {FAQ.map((f, i) => (
                <details key={f.q} className="ct-q" open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
