import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { posts, getPost } from "../../data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — HomePlate`, description: post.excerpt };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <PageHero title={post.category} crumb="Latest News">
        <p className="ph-sub">{post.day} {post.month} {post.year} · {post.readTime}</p>
      </PageHero>

      <main className="pg-page">
        <div className="container">
          <article className="ar-article">
            <img className="ar-cover" src={post.image} alt="" />
            <div className="ar-body">
              <h1 className="ar-title">{post.title}</h1>
              <p className="ar-lead">{post.excerpt}</p>
              {post.body.map((block, i) =>
                block.h ? <h2 key={i}>{block.h}</h2> : <p key={i}>{block.p}</p>
              )}
              <div className="ar-foot">
                <Link href="/news" className="pg-btn-ghost">← All articles</Link>
                <Link href="/menu" className="pg-btn">SHOP THE PANTRY</Link>
              </div>
            </div>
          </article>

          <section className="ar-related">
            <header className="pg-head">
              <span className="section-eyebrow">KEEP READING</span>
              <h2 className="section-title">More From The Kitchen</h2>
            </header>
            <div className="nw-grid">
              {related.map((p) => (
                <article key={p.slug} className="nw-card">
                  <Link href={`/news/${p.slug}`} className="nw-card-media" aria-label={p.title}>
                    <img src={p.image} alt="" />
                    <span className="nw-date"><strong>{p.day}</strong>{p.month}</span>
                  </Link>
                  <div className="nw-card-body">
                    <p className="nw-meta"><span className="nw-cat">{p.category}</span>{p.readTime}</p>
                    <h3><Link href={`/news/${p.slug}`}>{p.title}</Link></h3>
                    <Link href={`/news/${p.slug}`} className="nw-more">Read more →</Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
