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
      "Hara Shami Kebab",
      "Palak Papdi Kebab",
      "Curry Leaf Paneer",
      "Dahi Kebab",
      "Crispy Corn",
      "Paneer Tikka",
      "Veg Cheese Spring Roll",
      "Chilli Paneer",
      "Mala Mushroom",
      "Creamy Cheese Dumpling",
      "Masala Peanut",
    ],
  },
  {
    id: "non-veg-starters",
    category: "Non-Veg Starters",
    items: [
      "Angara Murgh Tikka",
      "Chicken Ghee Roast",
      "Peri-Peri Chicken Skewers",
      "Murgh Kali Mirch",
      "Mala Chicken",
      "Chilli Chicken",
      "Chicken Jhol Momo",
      "Creamy Coriander Chicken",
      "Tawa Fish (Basa)",
      "BBQ Buffalo Wings",
      "Chicken Popcorn",
      "Chicken Mini Sausages",
    ],
  },
  {
    id: "veg-main-course",
    category: "Veg Main Course",
    items: [
      "Dal Bukhara",
      "Paneer Lababdar",
      "Nizami Handi",
      "Thai Green Curry",
      "Veg Biryani",
      "Veg Fried Rice",
    ],
  },
  {
    id: "non-veg-main-course",
    category: "Non-Veg Main Course",
    items: [
      "Chicken Tikka Masala",
      "Punjabi Kadhai Murgh",
      "Butter Chicken",
      "Chicken Biryani",
      "Chicken Fried Rice",
      "Assorted Bread",
    ],
  },
   {
    id: "Salads",
    category: "Salads",
    items: ["Caesar Salad", "Green Salad"],
  },
  {
    id: "Desserts",
    category: "Desserts",
    items: ["Gulab Jamun", "Gajar Ka Halwa", "Tres Leches", "Chocolate IceCream Brownie"],
  },
];

export const beverageMenu: MenuCategory[] = [
  {
    id: "Craft Beers",
    category: "Craft Beers",
    items: [
      "Belgian Wit",
      "Hefeweizen",
      "Marzen Lager",
      "Japanese Lager",
       "Maxican Lager",
      "Neipa",
       "West Coast IPA",
    ],
  },
];