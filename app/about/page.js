import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "About Us — HomePlate",
  description: "HomePlate brings real homemade pantry essentials from home cooks and family farms to your door.",
};

const VALUES = [
  { title: "Small batches", text: "Made in small lots so every jar is fresh — never mass-produced or warehoused for months.", emoji: "🫙" },
  { title: "No preservatives", text: "Nothing artificial, no shortcuts. Just the ingredients you'd use in your own kitchen.", emoji: "🌿" },
  { title: "Traditional methods", text: "Stone-ground spices, wood-pressed oils and slow-churned ghee — the way it's always been done.", emoji: "🔥" },
  { title: "Real people", text: "Every product comes from home cooks and small family farms who take pride in their craft.", emoji: "🤝" },
];

const SOURCING = [
  { title: "Sourced from family farms", text: "We work directly with small farms and apiaries for honey, spices, seeds and produce." },
  { title: "Made the traditional way", text: "Home cooks grind, press, churn and pickle using time-honoured family recipes." },
  { title: "Hand-packed fresh", text: "Each order is packed by hand in sustainable packaging, right before it ships." },
  { title: "Delivered to your door", text: "Your pantry arrives in 2–3 days — with free delivery on orders above ₹499." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Story"
        crumb="About Us"
        sub="Real homemade food, from real home kitchens — delivered warm to yours."
      />

      <main className="pg-page">
        <div className="container">
          {/* STORY */}
          <section className="ab2-story">
            <div className="ab2-story-media">
              <img
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1100&q=85"
                alt="Fresh ingredients being prepared in a home kitchen"
              />
              <span className="ab2-story-badge">
                <strong>100%</strong>
                Homemade
              </span>
            </div>
            <div className="ab2-story-copy">
              <span className="section-eyebrow">WHO WE ARE</span>
              <h2 className="section-title">Bringing The Taste Of Home Back To Your Table</h2>
              <p>
                HomePlate started with a simple idea: the honey, masalas, pickles and ghee we grew up
                with tasted better than anything on a supermarket shelf — because they were made
                slowly, by people who cared.
              </p>
              <p>
                Today we partner with home cooks and small family farms to bring those same pantry
                essentials to your door. Every jar is made in small batches, with no preservatives
                and no shortcuts.
              </p>
              <Link href="/menu" className="pg-btn">EXPLORE OUR PANTRY →</Link>
            </div>
          </section>

          {/* VALUES */}
          <section className="ab2-values">
            <header className="pg-head">
              <span className="section-eyebrow">WHAT WE STAND FOR</span>
              <h2 className="section-title">Our Promise In Every Jar</h2>
            </header>
            <div className="ab2-values-grid">
              {VALUES.map((v) => (
                <article key={v.title} className="ab2-value">
                  <span className="ab2-value-icon" aria-hidden="true">{v.emoji}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* SOURCING */}
          <section id="sourcing" className="od-delivery ab2-sourcing">
            <header className="pg-head pg-head-light">
              <span className="section-eyebrow">SOURCING &amp; PRODUCERS</span>
              <h2 className="section-title">From The Farm To Your Pantry</h2>
            </header>
            <ol className="ab2-timeline">
              {SOURCING.map((s, i) => (
                <li key={s.title}>
                  <span className="ab2-timeline-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <aside className="pg-band">
            <div>
              <span className="pg-band-eyebrow">TASTE THE DIFFERENCE</span>
              <h3>Ready to stock your pantry?</h3>
              <p>Pick your favourites and we&apos;ll hand-pack them fresh for you.</p>
            </div>
            <Link href="/order" className="pg-btn">ORDER NOW</Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
