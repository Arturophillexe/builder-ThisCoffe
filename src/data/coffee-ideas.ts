export interface CoffeeIdea {
  id: string;
  name: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  category: "hot" | "cold" | "specialty";
}

export const coffeeIdeas: CoffeeIdea[] = [
  {
    id: "1",
    name: "Classic Americano",
    description:
      "A simple yet elegant coffee drink that showcases the pure flavor of espresso.",
    difficulty: "easy",
    prepTime: "2 minutes",
    ingredients: [
      "2 shots espresso",
      "6 oz hot water",
      "Optional: sugar or sweetener to taste",
    ],
    instructions: [
      "Brew 2 shots of espresso into a coffee cup",
      "Add hot water to dilute to desired strength",
      "Stir gently and add sweetener if desired",
      "Serve immediately while hot",
    ],
    image: "/placeholder.svg",
    category: "hot",
  },
  {
    id: "2",
    name: "Iced Frappé",
    description: "A refreshing blended coffee drink perfect for warm days.",
    difficulty: "medium",
    prepTime: "5 minutes",
    ingredients: [
      "1 cup strong cold coffee",
      "1/2 cup milk",
      "2 tbsp sugar",
      "1 cup ice cubes",
      "Whipped cream for topping",
    ],
    instructions: [
      "Brew coffee and let it cool completely",
      "Add coffee, milk, sugar, and ice to a blender",
      "Blend until smooth and frothy",
      "Pour into a glass and top with whipped cream",
      "Serve with a straw",
    ],
    image: "/placeholder.svg",
    category: "cold",
  },
  {
    id: "3",
    name: "Caramel Macchiato",
    description: "A sweet and creamy coffee drink with layers of flavor.",
    difficulty: "medium",
    prepTime: "4 minutes",
    ingredients: [
      "2 shots espresso",
      "1 cup steamed milk",
      "2 tbsp vanilla syrup",
      "1 tbsp caramel sauce",
      "Milk foam for topping",
    ],
    instructions: [
      "Add vanilla syrup to the bottom of your cup",
      "Pour steamed milk over the syrup",
      "Slowly pour espresso shots over the back of a spoon to create layers",
      "Top with milk foam",
      "Drizzle caramel sauce on top in a decorative pattern",
    ],
    image: "/placeholder.svg",
    category: "specialty",
  },
  {
    id: "4",
    name: "Cold Brew Coffee",
    description: "Smooth, low-acid coffee that's perfect served over ice.",
    difficulty: "easy",
    prepTime: "12+ hours",
    ingredients: [
      "1 cup coarsely ground coffee",
      "4 cups cold water",
      "Ice cubes",
      "Milk or cream (optional)",
    ],
    instructions: [
      "Combine ground coffee and cold water in a jar",
      "Stir well and cover",
      "Refrigerate for 12-24 hours",
      "Strain through a fine-mesh sieve or coffee filter",
      "Serve over ice with milk if desired",
    ],
    image: "/placeholder.svg",
    category: "cold",
  },
  {
    id: "5",
    name: "Turkish Coffee",
    description: "Traditional unfiltered coffee with a rich, intense flavor.",
    difficulty: "hard",
    prepTime: "6 minutes",
    ingredients: [
      "1 tbsp finely ground coffee",
      "1/3 cup cold water",
      "1 tsp sugar (optional)",
      "Cardamom pod (optional)",
    ],
    instructions: [
      "Add water, coffee, and sugar to a cezve or small pot",
      "Stir well to combine",
      "Heat slowly over low heat without stirring",
      "When foam begins to form, remove from heat briefly",
      "Return to heat and repeat 2-3 times",
      "Pour into small cups, including the grounds",
    ],
    image: "/placeholder.svg",
    category: "specialty",
  },
  {
    id: "6",
    name: "Cappuccino",
    description: "The perfect balance of espresso, steamed milk, and foam.",
    difficulty: "medium",
    prepTime: "3 minutes",
    ingredients: [
      "2 shots espresso",
      "1/3 cup steamed milk",
      "1/3 cup milk foam",
      "Cocoa powder for dusting (optional)",
    ],
    instructions: [
      "Brew 2 shots of espresso into a cappuccino cup",
      "Steam milk to create microfoam",
      "Pour steamed milk into the cup",
      "Spoon foam on top to create a thick layer",
      "Dust with cocoa powder if desired",
    ],
    image: "/placeholder.svg",
    category: "hot",
  },
];
