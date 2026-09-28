import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import NewsGrid from "./NewsGrid";
import { posts } from "../data/posts";

export const metadata = {
  title: "Latest News — HomePlate",
  description: "Stories, recipes and kitchen wisdom from the HomePlate pantry.",
};

export default function NewsPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <PageHero
        title="Latest News"
        sub="Stories, recipes and kitchen wisdom from the people behind your pantry."
      />

      <main className="pg-page">
        <div className="container">
          {/* FEATURED */}
          <article className="nw-featured">
            <Link href={`/news/${featured.slug}`} className="nw-featured-media" aria-label={featured.title}>
              <img src={featured.image} alt="" />
              <span className="nw-badge">FEATURED</span>
            </Link>
            <div className="nw-featured-body">
              <p className="nw-meta">
                <span className="nw-cat">{featured.category}</span>
                {featured.day} {featured.month} {featured.year} · {featured.readTime}
              </p>
              <h2>
                <Link href={`/news/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="nw-excerpt">{featured.excerpt}</p>
              <Link href={`/news/${featured.slug}`} className="pg-btn">READ THE STORY →</Link>
            </div>
          </article>

          <NewsGrid posts={rest} />
        </div>
      </main>
      <Footer />
    </>
  );
}
