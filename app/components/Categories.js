const categories = [
  { emoji: "🍛", label: "All Cuisines", active: true },
  { emoji: "🥘", label: "North Indian" },
  { emoji: "🍱", label: "South Indian" },
  { emoji: "🥟", label: "Chinese" },
  { emoji: "🍝", label: "Italian" },
  { emoji: "🥗", label: "Healthy Bowls" },
  { emoji: "🍰", label: "Desserts" },
  { emoji: "🥤", label: "Beverages" },
  { emoji: "🌱", label: "Vegan" },
  { emoji: "🍔", label: "Comfort Food" },
];

export default function Categories() {
  return (
    <section className="cats" aria-label="Cuisine categories">
      <div className="container">
        <div className="cats-row">
          {categories.map((c) => (
            <button
              key={c.label}
              className={`cat-chip${c.active ? " active" : ""}`}
            >
              <span className="cat-emoji">{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
