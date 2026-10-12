// Single source of truth for the pantry catalogue — used by the home carousel,
// the full menu page, the order page and the footer.

import { productList } from "./products";

export const ALL = "ALL";

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
