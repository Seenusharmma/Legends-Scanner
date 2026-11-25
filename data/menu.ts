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
      "Crispy Corn",
      "Chilli Paneer",
      "Paneer Ghee Roast",
      "Cheesy Nachos",
      "Mala Mushroom",
    ],
  },
  {
    id: "non-veg-starters",
    category: "Non-Veg Starters",
    items: [
      "Chilli Chicken",
      "Peri Peri Chicken",
      "Tawa Fish Fry",
      "Fish Tikka",
      "Andhra Style Mutton",
      "Chilli Prawns",
    ],
  },
  {
    id: "veg-main-course",
    category: "Veg Main Course",
    items: [
      "Dal Tadka",
      "Paneer Butter Masala",
      "Kadhai Paneer",
      "Mushroom in Thai Basil Sauce",
      "Exotic Vegetables in Garlic Sauce",
    ],
  },
  {
    id: "non-veg-main-course",
    category: "Non-Veg Main Course",
    items: [
      "Butter Chicken",
      "Penne Alfredo Chicken",
      "Chicken in Schezwan Sauce",
      "Karachi Creamy Chicken Curry",
      "Thai Red Curry Chicken",
    ],
  },
  {
    id: "Salads",
    category: "Salads",
    items: [
      "Green Salad",
    ],
  },
  {
    id: "staples",
    category: "Staples",
    items: [
      "Naan/Roti",
      "Veg Biryani",
      "Chicken Fried Rice",
      "Chicken Hakka Noodles",
      "Legends Mutton Biryani",
    ],
  },
  {
    id: "accompaniments",
    category: "Accompaniments",
    items: [
      "Curd",
      "Mint Chutney",
      "Raita",
      "Pickle",
      "Papad",
    ],
  },
  {
    id: "Desserts",
    category: "Desserts",
    items: [
      "Chocolate Brownie",
      "Gulab Jamun",
      "Tres Leches",
      "Ice Cream",
      "Gajar Halwa",
    ],
  },
  {
    id: "pizzeria-veg",
    category: "Pizzeria Veg",
    items: [
      "Paneer Tikka Pizza",
      "Classic Margherita",
    ],
  },
  {
    id: "pizzeria-non-veg",
    category: "Pizzeria Non-Veg",
    items: [
      "Peri Peri Pulled Chicken Pizza",
      "Chicken Tikka Pizza",
    ],
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