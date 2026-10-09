/**
 * Menu data for Legends Microbrewery.
 *
 * This is the single source of truth for the digital menu.
 * To update the menu later, edit the arrays below — no page or
 * component changes are required.
 *
 * Rules:
 *  - Do not add prices unless they are provided.
 *  - Do not invent descriptions, ingredients, or extra items.
 */

export interface MenuCategory {
  /** Stable id used for DOM anchors / accessibility references. */
  id: string;
  /** Display name. Rendered in uppercase by the UI. */
  category: string;
  /** Menu items, in the order they should appear. */
  items: string[];
}

export interface MenuImageInfo {
  /** Public path of the image, e.g. "/menu/food-menu.png". */
  src: string;
  /** Intrinsic pixel width (used for responsive sizing). */
  width: number;
  /** Intrinsic pixel height. */
  height: number;
  /** Descriptive alt text. */
  alt: string;
}

export const foodMenu: MenuCategory[] = [
  {
    id: "veg-starters",
    category: "Veg Starters",
    items: [
      "Chilly Paneer",
      "Cheese Veg Spring Roll",
      "Crispy Corn",
      "Hara Shame Kebab",
    ],
  },
  {
    id: "non-veg-starters",
    category: "Non-Veg Starters",
    items: [
      "Punjabi Tandoori Chicken",
      "Egg Chilli",
      "Chintamani Chicken",
    ],
  },
  {
    id: "veg-main-course",
    category: "Veg Main Course",
    items: [
      "Dal Tadka",
      "Nizami Handi",
      "Paneer Lababdar",
    ],
  },
  {
    id: "non-veg-main-course",
    category: "Non-Veg Main Course",
    items: [
      "Butter Chicken",
      "Egg Masala",
    ],
  },
  {
    id: "veg-pizza",
    category: "Veg Pizza",
    items: ["Classic Margarita Pizza"],
  },
  {
    id: "accompaniments",
    category: "Accompaniments",
    items: ["Curd", "Mint Chutney", "Raita", "Pickle & Pappad"],
  },
  {
    id: "staples",
    category: "Staples",
    items: ["Naan / Roti", "Jeera Pulav", "Veg Hakka Noodles", "Chicken Biryani"],
  },
  { id: "salad", category: "Salad", items: ["Caesar Salad"] },
  {
    id: "desserts",
    category: "Desserts",
    items: [
      "Tres Leches",
      "Chocolate Brownie",
      "Ice Cream",
    ],
  },
];

export const beverageMenu: MenuCategory[] = [
  {
    id: "beer",
    category: "Beer",
    items: [
      "Japanese Lager",
      "Hefeweizen",
      "Modern Wheat Ale",
      "West Coast IPA",
    ],
  },
  {
    id: "mocktails",
    category: "Mocktails",
    items: [
      "Berry Rush",
      "Virgin Pina Colada",
      "Virgin Mojito",
      "Guava Mary",
    ],
  },
  {
    id: "wine",
    category: "Wine",
    items: ["Sula Red Wine", "Sdu White Wine"],
  },
  {
    id: "soft-beverages",
    category: "Soft Beverages",
    items: ["Coke", "Soda", "Sprite"],
  },
  {
    id: "canned-juice",
    category: "Canned Juice",
    items: ["Cranberry", "Mango", "Pineapple", "Orange", "Apple", "Litchi"],
  },
];
