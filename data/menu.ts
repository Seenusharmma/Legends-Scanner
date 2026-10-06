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
      "Crispy Corn (Same Quality)",
      "Cheese Spring Roll",
      "Hara Shami Kebab",
      "Paneer Kodiyala Bunch",
    ],
  },
  {
    id: "non-veg-starters",
    category: "Non-Veg Starters",
    items: [
      "Egg Chilli",
      "Fish Manchurian",
      "Angara Murgh Tikka",
      "Chicken Popcorn",
    ],
  },
  {
    id: "veg-main-course",
    category: "Veg Main Course",
    items: [
      "Dal Bukhara",
      "Mushroom in Thai Basil Sauce",
      "Paneer Butter Masala",
      "Penne Arrabbiata Vegetables",
    ],
  },
  {
    id: "non-veg-main-course",
    category: "Non-Veg Main Course",
    items: [
      "Mango Fish Curry",
      "Karachi Creamy Chicken (Same Quality)",
      "Chicken in Hot Garlic Sauce",
    ],
  },
  {
    id: "veg-pizza",
    category: "Veg Pizza",
    items: ["Garden Veg Pizza"],
  },
  {
    id: "accompaniments",
    category: "Accompaniments",
    items: ["Curd", "Mint Chutney", "Raita", "Pickle & Pappad"],
  },
  {
    id: "staples",
    category: "Staples",
    items: ["Naan / Roti", "Steamed Rice", "Veg Hakka Noodles", "Chicken Biryani"],
  },
  {
    id: "salad",
    category: "Salad",
    items: ["Russian Salad"],
  },
  {
    id: "desserts",
    category: "Desserts",
    items: [
      "Gajar Halwa (No Cardamom)",
      "Chocolate Brownie",
      "Chocolate & Vanilla Ice Cream",
    ],
  },
  {
    id: "cake",
    category: "Cake",
    items: ["15 KG Customized Cake"],
  },
];

export const beverageMenu: MenuCategory[] = [
  {
    id: "beer",
    category: "Beer",
    items: ["Any 4 as per availability"],
  },
  {
    id: "mocktails",
    category: "Mocktails",
    items: [
      "Berry Rush",
      "Virgin Pina Colada",
      "Virgin Mojito",
      "Blue Lagoon",
    ],
  },
  {
    id: "vodka",
    category: "Vodka",
    items: ["Magic Moment Verve", "Skyy"],
  },
  {
    id: "rum",
    category: "Rum",
    items: ["Old Monk", "Bacardi Black", "Bacardi Carta Blanca"],
  },
  {
    id: "wine",
    category: "Wine",
    items: ["Domestic Red Wine", "Domestic White Wine"],
  },
  {
    id: "whiskey",
    category: "Whiskey",
    items: ["Teachers Highland Cream", "Paul John Nirvana"],
  },
  {
    id: "gin",
    category: "Gin",
    items: ["Roulette Gin", "Beefeater"],
  },
  {
    id: "cocktails",
    category: "Cocktails",
    items: [
      "Whiskey Sour & Smash",
      "Red Wine Sangria",
      "Cosmopolitan",
    ],
  },
  {
    id: "brandy",
    category: "Brandy",
    items: ["Mansion House"],
  },
  {
    id: "soft-beverages",
    category: "Soft Beverages",
    items: ["Canned Juices", "Coke", "Soda", "Sprite"],
  },
];
