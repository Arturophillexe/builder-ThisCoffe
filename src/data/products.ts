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
    name: "Etíope Yirgacheffe",
    description:
      "Notas brillantes y florales con toques cítricos. Perfecto para preparaciones de filtro.",
    price: 24.99,
    image: "/placeholder.svg",
    category: "beans",
    origin: "Etiopía",
    roastLevel: "light",
    featured: true,
  },
  {
    id: "2",
    name: "Colombiano Supremo",
    description:
      "Café de cuerpo pleno y rico con notas de chocolate y caramelo.",
    price: 22.99,
    image: "/placeholder.svg",
    category: "beans",
    origin: "Colombia",
    roastLevel: "medium",
    featured: true,
  },
  {
    id: "3",
    name: "Tueste Francés",
    description: "Sabor audaz y ahumado con un final rico e intenso.",
    price: 19.99,
    image: "/placeholder.svg",
    category: "beans",
    origin: "Brasil",
    roastLevel: "dark",
  },
  {
    id: "4",
    name: "Mezcla de la Casa Molido",
    description:
      "Nuestra mezcla característica, perfectamente molida para cafeteras de goteo.",
    price: 16.99,
    image: "/placeholder.svg",
    category: "ground",
    roastLevel: "medium",
    featured: true,
  },
  {
    id: "5",
    name: "Mezcla para Espresso",
    description:
      "Sabor rico y concentrado, perfecto para máquinas de espresso.",
    price: 21.99,
    image: "/placeholder.svg",
    category: "ground",
    roastLevel: "dark",
  },
  {
    id: "6",
    name: "Gotero Pour Over",
    description:
      "Gotero de cerámica premium para la experiencia perfecta de pour-over.",
    price: 34.99,
    image: "/placeholder.svg",
    category: "equipment",
  },
  {
    id: "7",
    name: "Prensa Francesa",
    description:
      "Prensa francesa clásica de vidrio para café de cuerpo completo.",
    price: 42.99,
    image: "/placeholder.svg",
    category: "equipment",
  },
  {
    id: "8",
    name: "Molino de Café",
    description: "Molino de fresas para café molido consistente y fresco.",
    price: 89.99,
    image: "/placeholder.svg",
    category: "equipment",
  },
];
