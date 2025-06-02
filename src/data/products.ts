export interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "beans" | "ground" | "equipment" | "accessories";
  origin?: string;
  roastLevel?: "light" | "medium" | "dark";
  featured?: boolean;
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    description:
      "Bright, floral notes with citrus undertones. Perfect for pour-over brewing.",
    price: 24.99,
    image: "/placeholder.svg",
    category: "beans",
    origin: "Ethiopia",
    roastLevel: "light",
    featured: true,
  },
  {
    id: "2",
    name: "Colombian Supremo",
    description: "Rich, full-bodied coffee with chocolate and caramel notes.",
    price: 22.99,
    image: "/placeholder.svg",
    category: "beans",
    origin: "Colombia",
    roastLevel: "medium",
    featured: true,
  },
  {
    id: "3",
    name: "French Roast",
    description: "Bold, smoky flavor with a rich, intense finish.",
    price: 19.99,
    image: "/placeholder.svg",
    category: "beans",
    origin: "Brazil",
    roastLevel: "dark",
  },
  {
    id: "4",
    name: "House Blend Ground",
    description:
      "Our signature blend, perfectly ground for drip coffee makers.",
    price: 16.99,
    image: "/placeholder.svg",
    category: "ground",
    roastLevel: "medium",
    featured: true,
  },
  {
    id: "5",
    name: "Espresso Blend",
    description: "Rich, concentrated flavor perfect for espresso machines.",
    price: 21.99,
    image: "/placeholder.svg",
    category: "ground",
    roastLevel: "dark",
  },
  {
    id: "6",
    name: "Pour Over Dripper",
    description:
      "Premium ceramic dripper for the perfect pour-over experience.",
    price: 34.99,
    image: "/placeholder.svg",
    category: "equipment",
  },
  {
    id: "7",
    name: "French Press",
    description: "Classic glass French press for full-bodied coffee.",
    price: 42.99,
    image: "/placeholder.svg",
    category: "equipment",
  },
  {
    id: "8",
    name: "Coffee Grinder",
    description: "Burr grinder for consistent, fresh ground coffee.",
    price: 89.99,
    image: "/placeholder.svg",
    category: "equipment",
  },
];
