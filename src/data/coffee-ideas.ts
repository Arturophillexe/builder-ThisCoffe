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
    name: "Americano Clásico",
    description:
      "Una bebida de café simple pero elegante que resalta el sabor puro del espresso.",
    difficulty: "easy",
    prepTime: "2 minutos",
    ingredients: [
      "2 shots de espresso",
      "180ml de agua caliente",
      "Opcional: azúcar o endulzante al gusto",
    ],
    instructions: [
      "Prepara 2 shots de espresso en una taza de café",
      "Añade agua caliente para diluir a la fuerza deseada",
      "Revuelve suavemente y añade endulzante si lo deseas",
      "Sirve inmediatamente mientras esté caliente",
    ],
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "hot",
  },
  {
    id: "2",
    name: "Frappé Helado",
    description:
      "Una bebida de café batida y refrescante, perfecta para días cálidos.",
    difficulty: "medium",
    prepTime: "5 minutos",
    ingredients: [
      "1 taza de café frío fuerte",
      "120ml de leche",
      "2 cucharadas de azúcar",
      "1 taza de cubos de hielo",
      "Crema batida para decorar",
    ],
    instructions: [
      "Prepara café y déjalo enfriar completamente",
      "Añade café, leche, azúcar y hielo a una licuadora",
      "Licua hasta que esté suave y espumoso",
      "Vierte en un vaso y corona con crema batida",
      "Sirve con una pajita",
    ],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "cold",
  },
  {
    id: "3",
    name: "Macchiato de Caramelo",
    description: "Una bebida de café dulce y cremosa con capas de sabor.",
    difficulty: "medium",
    prepTime: "4 minutos",
    ingredients: [
      "2 shots de espresso",
      "240ml de leche vaporizada",
      "2 cucharadas de jarabe de vainilla",
      "1 cucharada de salsa de caramelo",
      "Espuma de leche para coronar",
    ],
    instructions: [
      "Añade jarabe de vainilla al fondo de tu taza",
      "Vierte la leche vaporizada sobre el jarabe",
      "Vierte lentamente los shots de espresso sobre el dorso de una cuchara para crear capas",
      "Corona con espuma de leche",
      "Rocía salsa de caramelo encima en un patrón decorativo",
    ],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "specialty",
  },
  {
    id: "4",
    name: "Cold Brew",
    description: "Café suave y de baja acidez, perfecto servido sobre hielo.",
    difficulty: "easy",
    prepTime: "12+ horas",
    ingredients: [
      "1 taza de café molido grueso",
      "4 tazas de agua fría",
      "Cubos de hielo",
      "Leche o crema (opcional)",
    ],
    instructions: [
      "Combina el café molido y agua fría en un frasco",
      "Revuelve bien y cubre",
      "Refrigera por 12-24 horas",
      "Cuela a través de un colador fino o filtro de café",
      "Sirve sobre hielo con leche si lo deseas",
    ],
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "cold",
  },
  {
    id: "5",
    name: "Café Turco",
    description: "Café tradicional sin filtrar con un sabor rico e intenso.",
    difficulty: "hard",
    prepTime: "6 minutos",
    ingredients: [
      "1 cucharada de café finamente molido",
      "80ml de agua fría",
      "1 cucharadita de azúcar (opcional)",
      "Vaina de cardamomo (opcional)",
    ],
    instructions: [
      "Añade agua, café y azúcar a un cezve o cacerola pequeña",
      "Revuelve bien para combinar",
      "Calienta lentamente a fuego bajo sin revolver",
      "Cuando comience a formarse espuma, retira del fuego brevemente",
      "Regresa al fuego y repite 2-3 veces",
      "Vierte en tazas pequeñas, incluyendo los posos",
    ],
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "specialty",
  },
  {
    id: "6",
    name: "Cappuccino",
    description:
      "El equilibrio perfecto de espresso, leche vaporizada y espuma.",
    difficulty: "medium",
    prepTime: "3 minutos",
    ingredients: [
      "2 shots de espresso",
      "80ml de leche vaporizada",
      "80ml de espuma de leche",
      "Cacao en polvo para espolvorear (opcional)",
    ],
    instructions: [
      "Prepara 2 shots de espresso en una taza de cappuccino",
      "Vaporiza la leche para crear microespuma",
      "Vierte la leche vaporizada en la taza",
      "Coloca la espuma encima con una cuchara para crear una capa gruesa",
      "Espolvorea con cacao en polvo si lo deseas",
    ],
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "hot",
  },
];
