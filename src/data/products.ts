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
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "beans",
    origin: "Etiopía",
    roastLevel: "light",
    featured: true,
  },
  {
    id: "2",
    name: "tasa marshmallow",
    description:
      "taza de cafe muy bonita",
    price: 22.99,
    image:
      "https://i.pinimg.com/originals/0a/4c/be/0a4cbee485576d90d50bb8471725bc7b.jpg",
    category: "equipment",
    origin: "colombia",
    featured: true,
  },
  {
    id: "3",
    name: "Tueste Francés",
    description: "Sabor audaz y ahumado con un final rico e intenso.",
    price: 19.99,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplantillaslistas.cl%2Fproduct%2Fpack-25-plantillas-de-marcas-famosas-para-tazas%2F&psig=AOvVaw3OZVy5UilkB5SSe--SvAYP&ust=1753810797696000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPD7yP-M4I4DFQAAAAAdAAAAABAM",
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
    image:
      "https://walmartgt.vtexassets.com/arquivos/ids/347746/Taza-Marca-Mainstays-De-Porcelana-12Oz-2-59367.jpg?v=638144267258670000",
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
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "ground",
    roastLevel: "dark",
  },
  {
    id: "6",
    name: "Gotero Pour Over",
    description:
      "Gotero de cerámica premium para la experiencia perfecta de pour-over.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "equipment",
  },
  {
    id: "7",
    name: "Prensa Francesa",
    description:
      "Prensa francesa clásica de vidrio para café de cuerpo completo.",
    price: 42.99,
    image:
      "https://images.unsplash.com/photo-1611564637167-25d8a31dc1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "equipment",
  },
  {
    id: "8",
    name: "Molino de Café",
    description: "Molino de fresas para café molido consistente y fresco.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "equipment",
  },
];
