// Single source of truth for the pantry catalogue — used by the home carousel,
// the full menu page, the order page and the footer.

export const ALL = "ALL";

const productList = [
  {
    name: "Pure Homemade Honey",
    sub: "Raw & Unprocessed",
    price: 24.0,
    rating: 4,
    category: "HONEY",
    img: "/golden-honey-glass-jar-with-burlap-lid_84443-76686-removebg-preview.png",
  },
  {
    name: "Organic Turmeric Powder",
    sub: "Stone-Ground & Pure",
    price: 28.0,
    rating: 4,
    category: "SPICES",
    img: "/turmeric-powder-wooden-bowl-with-green-leaves_9975-132220-removebg-preview.png",
  },
  {
    name: "Mixed Pickle",
    sub: "Traditional Family Recipe",
    price: 58.0,
    rating: 4,
    category: "PICKLES",
    img: "/pickled-red-peppers-mushrooms-glass-jar-wooden-plate__1_-removebg-preview.png",
  },
  {
    name: "Cold Pressed Coconut Oil",
    sub: "Wood-Pressed The Old Way",
    price: 70.0,
    rating: 4,
    category: "OILS",
    img: "/bottle-coconut-water-put-dark-background-removebg-preview.png",
  },
  {
    name: "Cold Pressed Groundnut Oil",
    sub: "Small-Batch, Natural",
    price: 65.0,
    rating: 4,
    category: "OILS",
    img: "/wood-cold-pressed-groundnut-oil-500x500.webp",
  },
  {
    name: "Homemade Ghee",
    sub: "Slow-Churned & Pure",
    price: 48.0,
    rating: 4,
    category: "GHEE",
    img: "/high-angle-jar-with-baby-food-removebg-preview.png",
  },
  {
    name: "Organic Jaggery",
    sub: "Naturally Sweet & Rich",
    price: 32.0,
    rating: 4,
    category: "JAGGERY",
    img: "/side-view-different-types-lump-sugar-bowls-white-background-removebg-preview.png",
  },
  {
    name: "Handmade Masala Powder",
    sub: "Freshly Ground Spice Blend",
    price: 38.0,
    rating: 4,
    category: "SPICES",
    img: "/still-life-with-various-spices-removebg-preview.png",
  },
  {
    name: "Homemade Sambar Powder",
    sub: "South Indian Family Recipe",
    price: 35.0,
    rating: 4,
    category: "SPICES",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=85",
  },
  {
    name: "Homemade Rasam Powder",
    sub: "Tangy & Aromatic Blend",
    price: 35.0,
    rating: 4,
    category: "SPICES",
    img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=85",
  },
  {
    name: "Organic Red Chilli Powder",
    sub: "Sun-Dried & Stone Ground",
    price: 42.0,
    rating: 4,
    category: "SPICES",
    img: "/red-curry-paste-made-from-chili-removebg-preview.png",
  },
  {
    name: "Organic Coriander Powder",
    sub: "Fresh & Fragrant",
    price: 30.0,
    rating: 4,
    category: "SPICES",
    img: "/bowls-with-green-matcha-wooden-tray_23-2148296727-removebg-preview.png",
  },
  {
    name: "Alphonso Mango Box",
    sub: "Pure Desi Aam, Seasonal",
    price: 120.0,
    rating: 5,
    category: "FRUITS",
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=85",
  },
  {
    name: "Wild Forest Honey",
    sub: "Western Ghats, Raw & Unfiltered",
    price: 130.0,
    rating: 5,
    category: "HONEY",
    img: "/golden-honey-glass-jar-with-burlap-lid_84443-76686-removebg-preview.png",
  },
  {
    name: "Joni Bella (Liquid Jaggery)",
    sub: "Seasonal Sugarcane Syrup",
    price: 44.0,
    rating: 5,
    category: "JAGGERY",
    img: "/side-view-different-types-lump-sugar-bowls-white-background-removebg-preview.png",
  },
  {
    name: "Mango Pickle",
    sub: "Raw Mango, Sun-Cured",
    price: 36.0,
    rating: 5,
    category: "PICKLES",
    img: "/pickled-red-peppers-mushrooms-glass-jar-wooden-plate__1_-removebg-preview.png",
  },
  {
    name: "Lemon Pickle",
    sub: "Tangy Nimbe Uppinakayi",
    price: 32.0,
    rating: 4,
    category: "PICKLES",
    img: "/pickled-red-peppers-mushrooms-glass-jar-wooden-plate__1_-removebg-preview.png",
  },
  {
    name: "Jackfruit Papad",
    sub: "Halasina Happala, Sun-Dried",
    price: 28.0,
    rating: 5,
    category: "PAPAD",
    img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=85",
  },
  {
    name: "Rice Papad",
    sub: "Thin & Crisp, Handmade",
    price: 22.0,
    rating: 4,
    category: "PAPAD",
    img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=85",
  },
  {
    name: "Jackfruit Chips",
    sub: "Fried in Coconut Oil",
    price: 36.0,
    rating: 5,
    category: "CHIPS",
    img: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=600&q=85",
  },
  {
    name: "Banana Chips",
    sub: "Nendran, Lightly Salted",
    price: 30.0,
    rating: 4,
    category: "CHIPS",
    img: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=600&q=85",
  },
  {
    name: "Banana",
    sub: "Bale Hannu · Ripe & Naturally Sweet",
    price: 12.0,
    rating: 4,
    category: "FRUITS",
    img: "/products/banana.jpg",
  },
  {
    name: "Jackfruit",
    sub: "Halasina Hannu · Golden, Juicy Bulbs",
    price: 30.0,
    rating: 5,
    category: "FRUITS",
    img: "/products/jackfruit.jpg",
  },
  {
    name: "Guava",
    sub: "Perale · Pink-Flesh, Farm Fresh",
    price: 16.0,
    rating: 4,
    category: "FRUITS",
    img: "/products/guava.jpg",
  },
  {
    name: "Rambutan",
    sub: "Seasonal, Hand-Picked",
    price: 45.0,
    rating: 5,
    category: "FRUITS",
    img: "/products/rambutan.jpg",
  },
  {
    name: "Mangosteen",
    sub: "Seasonal, From The Western Ghats",
    price: 55.0,
    rating: 5,
    category: "FRUITS",
    img: "/products/mangosteen.jpg",
  },
  {
    name: "Sapota (Chikoo)",
    sub: "Soft, Caramel-Sweet",
    price: 18.0,
    rating: 4,
    category: "FRUITS",
    img: "/products/sapota.jpg",
  },
  {
    name: "Pineapple",
    sub: "Ripe & Tangy",
    price: 25.0,
    rating: 4,
    category: "FRUITS",
    img: "/products/pineapple.jpg",
  },
  {
    name: "Ash Gourd",
    sub: "Kumbalakayi · Farm Fresh",
    price: 22.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/ash-gourd.jpg",
  },
  {
    name: "Raw Banana",
    sub: "Balekayi · For Curries & Chips",
    price: 10.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/raw-banana.jpg",
  },
  {
    name: "Beans",
    sub: "Tender French Beans",
    price: 12.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/beans.jpg",
  },
  {
    name: "Carrot",
    sub: "Crunchy & Sweet",
    price: 10.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/carrot.jpg",
  },
  {
    name: "Beetroot",
    sub: "Fresh, Deep Red",
    price: 10.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/beetroot.png",
  },
  {
    name: "Raw Jackfruit",
    sub: "Halasina Kayi · Tender, For Curries",
    price: 28.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/raw-jackfruit.jpg",
  },
  {
    name: "Capsicum",
    sub: "Donne Menasu · Crisp & Fresh",
    price: 14.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/capsicum.jpg",
  },
  {
    name: "Cabbage",
    sub: "Kosu · Firm, Fresh Heads",
    price: 10.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/cabbage.jpg",
  },
  {
    name: "Brinjal",
    sub: "Badanekayi · Tender & Glossy",
    price: 10.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/brinjal.jpg",
  },
  {
    name: "Ivy Gourd",
    sub: "Tondekayi · Tender & Crunchy",
    price: 12.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/ivy-gourd.jpg",
  },
  {
    name: "Radish",
    sub: "Mullangi · White, Fresh",
    price: 8.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/radish.jpg",
  },
  {
    name: "Bitter Gourd",
    sub: "Hagalakayi · Farm Fresh",
    price: 12.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/bitter-gourd.jpg",
  },
  {
    name: "Taro Root",
    sub: "Kesu · Earthy & Creamy",
    price: 14.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/taro.jpg",
  },
  {
    name: "Bottle Gourd",
    sub: "Sorekayi · Light & Tender",
    price: 12.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/bottle-gourd.jpg",
  },
  {
    name: "Ridge Gourd",
    sub: "Heerekayi · Fresh From The Vine",
    price: 12.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/ridge-gourd.jpg",
  },
  {
    name: "Cucumber",
    sub: "Southekayi · Cool & Crisp",
    price: 8.0,
    rating: 4,
    category: "VEGGIES",
    img: "/products/cucumber.jpg",
  },
];

export const tabs = [
  {
    id: ALL,
    label: "ALL",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="9" height="9" rx="2" />
        <rect x="18" y="5" width="9" height="9" rx="2" />
        <rect x="5" y="18" width="9" height="9" rx="2" />
        <rect x="18" y="18" width="9" height="9" rx="2" />
      </svg>
    ),
  },
  {
    id: "HONEY",
    label: "HONEY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8 h12 v3 h-12 z" />
        <path d="M11 11 v3 q0 2 5 2 t5 -2 v-3" />
        <path d="M11 16 v8 q0 2 5 2 t5 -2 v-8" />
        <path d="M16 11 v15" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "SPICES",
    label: "SPICES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="20" rx="11" ry="6" />
        <path d="M5 20 q11 -8 22 0" />
        <circle cx="10" cy="20" r="1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="22" r="1" fill="currentColor" stroke="none" />
        <circle cx="22" cy="20" r="1" fill="currentColor" stroke="none" />
        <path d="M16 14 q-1 -3 1 -5" />
      </svg>
    ),
  },
  {
    id: "OILS",
    label: "OILS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 6 h6 v3 h-6 z" />
        <path d="M14 9 q-3 1 -3 4 v13 q0 2 2 2 h6 q2 0 2 -2 v-13 q0 -3 -3 -4" />
        <path d="M13 18 h6" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "GHEE",
    label: "GHEE",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="10" rx="9" ry="3" />
        <path d="M7 10 v14 q0 3 9 3 t9 -3 v-14" />
        <path d="M11 16 q5 -2 10 0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "PICKLES",
    label: "PICKLES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="6" width="14" height="4" rx="1" />
        <path d="M10 10 v15 q0 2 2 2 h8 q2 0 2 -2 v-15" />
        <circle cx="14" cy="17" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
        <circle cx="15" cy="23" r="1.2" />
      </svg>
    ),
  },
  {
    id: "JAGGERY",
    label: "JAGGERY",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22 l3 -10 h10 l3 10 z" />
        <path d="M11 12 l2 -4 h6 l2 4" />
        <path d="M11 17 h10" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "PAPAD",
    label: "PAPAD",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="10" />
        <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="20" cy="19" r="1" fill="currentColor" stroke="none" />
        <circle cx="13" cy="20" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "CHIPS",
    label: "CHIPS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 h20 l-2 7 q-8 2 -16 0 z" />
        <ellipse cx="12" cy="13" rx="4" ry="3" />
        <ellipse cx="20" cy="12" rx="4" ry="3" />
        <ellipse cx="16" cy="16" rx="4" ry="2.5" />
      </svg>
    ),
  },
  {
    id: "FRUITS",
    label: "FRUITS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 6 q1 -3 4 -3" />
        <path d="M10 10 q-3 0 -4 4 q-2 6 1 11 q2 4 5 5 q2 1 4 0 q2 1 4 0 q3 -1 5 -5 q3 -5 1 -11 q-1 -4 -4 -4 z" />
        <path d="M12 16 q4 -2 8 0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "VEGGIES",
    label: "VEGGIES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 26 q0 -8 0 -14" />
        <path d="M16 12 q-5 -1 -7 -5 q3 0 7 5" />
        <path d="M16 15 q5 -2 7 -6 q-3 0 -7 6" />
        <path d="M16 18 q-4 -1 -6 -4 q3 0 6 4" />
        <ellipse cx="16" cy="26" rx="5" ry="2" />
      </svg>
    ),
  },
];

// keep products grouped by category, in the same order as the category tabs
const tabOrder = tabs.map((t) => t.id);
export const products = [...productList].sort(
  (a, b) => tabOrder.indexOf(a.category) - tabOrder.indexOf(b.category)
);
