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
    id: "American & Irish Whiskey",
    category: "American & Irish Whiskey",
    items: [
      "Jim Beam White",
      "Jameson Irish",
      "Jim Beam Black",
    ],
  },
  {
    id: "Blended Scotch Whisky",
    category: "Blended Scotch Whisky",
    items: [
      "Chivas Regal 12 YO",
      "J.W Black Label",
      "Ballantine's Finest",
      "Dewar's 12 YO",
      "100 Pipers",
      "100 Pipers Blended Malt",
      "Dewar's White Label",
      "Teacher's Highland Cream",
      "Black & White",
      "Black Dog Black",
    ],
  },
  {
    id: "Single Malts",
    category: "Single Malts",
    items: [
      "The Glenlivet 12 YO",
      "Amrut Fusion",
      "Paul John Nirvana",
      "Indri",
    ],
  },
  {
    id: "Tequila",
    category: "Tequila",
    items: [
      "Camino Blanco",
      "Camino Gold",
    ],
  },
  {
    id: "Vodka",
    category: "Vodka",
    items: [
      "Absolut",
      "Ciroc",
      "Grey Goose",
      "Skyy",
      "U'Luvka",
      "Ketel One",
      "Smirnoff Orange",
    ],
  },
  {
    id: "Rum",
    category: "Rum",
    items: [
      "Bacardi Carta Blanca",
      "Bacardi 4 YO",
      "Bacardi Black",
      "Old Monk Coffee",
      "Old Monk Supreme",
    ],
  },
  {
    id: "Gin",
    category: "Gin",
    items: [
      "Beefeater",
      "Bombay Sapphire Gin",
      "Roku",
      "Bulldog",
      "Tanqueray",
      "Gordon's",
      "Jaisalmer",
    ],
  },
  {
    id: "Liqueurs",
    category: "Liqueurs",
    items: [
      "Jagermeister Ice Cold",
    ],
  },
  {
    id: "Red Wine",
    category: "Red Wine",
    items: [
      "Jacob's Creek Classic Shiraz Cabernet",
      "Sula Shiraz Cabernet",
    ],
  },
  {
    id: "Champagne & Sparklings",
    category: "Champagne & Sparklings",
    items: [
      "Sula Brut Sparkling Btl",
    ],
  },
  {
    id: "White Wine",
    category: "White Wine",
    items: [
      "Jacob's Creek Chardonnay",
      "Sula Chenin Blanc",
    ],
  },
  {
    id: "Rose Wine",
    category: "Rose Wine",
    items: [
      "The Source Grenache Rose",
    ],
  },
  {
    id: "Whisky Cocktails",
    category: "Whisky Cocktails",
    items: [
      "Kings Wood",
      "The First Sip of Legends",
      "Whiskey Sour",
      "Whiskey Smash",
    ],
  },
  {
    id: "Gin Cocktails",
    category: "Gin Cocktails",
    items: [
      "Queen Refresher",
      "Imperial Infusion",
      "Tom Collins",
      "Gimlet",
    ],
  },
  {
    id: "Vodka Cocktails",
    category: "Vodka Cocktails",
    items: [
      "Forbidden Orchard",
      "Cosmopolitan",
      "Sex on the Beach",
      "Screwdriver",
    ],
  },
  {
    id: "Rum Cocktails",
    category: "Rum Cocktails",
    items: [
      "Midnight Imli",
      "Mojito",
      "Daiquiri",
      "Cuba Libre",
    ],
  },
  {
    id: "Tequila Cocktails",
    category: "Tequila Cocktails",
    items: [
      "Pineapple Chilli Picante",
      "Rasam Picante",
      "Margarita",
      "Smoked Mango Ritual",
    ],
  },
  {
    id: "Mocktails",
    category: "Mocktails",
    items: [
      "Crimson Berry Lychee",
      "Berry Rush",
      "Tropic Indulgence",
      "Guava Mary",
      "Virgin Mojito",
    ],
  },
];