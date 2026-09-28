import Link from "next/link";

// Dark cinematic banner used at the top of inner pages — same food-table
// backdrop and script headline as the home hero, at a shorter height.
export default function PageHero({ title, sub, crumb, children }) {
  return (
    <section className="ph">
      <div className="ph-bg" aria-hidden="true" />
      <div className="ph-bg-tint" aria-hidden="true" />
      <span className="ph-leaf ph-leaf-l" aria-hidden="true" />
      <span className="ph-leaf ph-leaf-r" aria-hidden="true" />

      <div className="ph-inner">
        <nav className="ph-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span className="ph-crumb-on">{crumb || title}</span>
        </nav>
        <h1 className="ph-title">{title}</h1>
        {sub && <p className="ph-sub">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
