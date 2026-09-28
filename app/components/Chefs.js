const chefs = [
  {
    name: "Anjali Mehra",
    cuisine: "North Indian",
    orders: "2.4k",
    rating: "4.9",
    years: "12",
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=500&q=80",
  },
  {
    name: "Marco Rossi",
    cuisine: "Italian Classics",
    orders: "1.8k",
    rating: "4.9",
    years: "18",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&q=80",
  },
  {
    name: "Kenji Tanaka",
    cuisine: "Japanese",
    orders: "3.1k",
    rating: "5.0",
    years: "22",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80",
  },
  {
    name: "Sofia Larsen",
    cuisine: "Nordic Healthy",
    orders: "1.2k",
    rating: "4.8",
    years: "9",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&q=80",
  },
];

export default function Chefs() {
  return (
    <section id="chefs" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Home Chefs</span>
          <h2 className="section-title">
            Meet the artists <span className="accent">behind every dish</span>
          </h2>
          <p className="section-sub">
            Vetted, passionate, and cooking with stories. These are the
            neighbors filling your plate.
          </p>
        </div>

        <div className="chefs-grid">
          {chefs.map((c) => (
            <article key={c.name} className="chef">
              <div className="chef-img">
                <img src={c.img} alt={c.name} />
              </div>
              <div className="chef-body">
                <h3 className="chef-name">{c.name}</h3>
                <div className="chef-cuisine">{c.cuisine}</div>
                <div className="chef-stats">
                  <div>
                    <strong>{c.rating}★</strong>
                    rating
                  </div>
                  <div>
                    <strong>{c.orders}</strong>
                    orders
                  </div>
                  <div>
                    <strong>{c.years}y</strong>
                    cooking
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
