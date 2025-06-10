export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  category: "brewing" | "origins" | "recipes" | "events" | "tips";
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "El Arte del Café Pour Over",
    excerpt:
      "Domina la técnica de preparación pour-over para la taza perfecta en todo momento.",
    content:
      "El café pour-over es más que un método de preparación—es una forma de arte que te permite controlar cada variable en tu proceso de preparación de café...",
    author: "Sarah Martínez",
    publishedAt: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "brewing",
    featured: true,
  },
  {
    id: "2",
    title: "Explorando Orígenes del Café: Etiopía",
    excerpt: "Descubre la cuna del café y sus perfiles de sabor únicos.",
    content:
      "Etiopía es ampliamente considerada la cuna del café, y sus granos ofrecen algunos de los perfiles de sabor más complejos y únicos del mundo...",
    author: "David Chen",
    publishedAt: "2024-01-12",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "origins",
    featured: true,
  },
  {
    id: "3",
    title: "5 Cócteles de Café Creativos para tu Próximo Evento",
    excerpt:
      "Eleva tus eventos corporativos con estas bebidas sofisticadas a base de café.",
    content:
      "Los cócteles de café son la manera perfecta de agregar sofisticación a cualquier evento corporativo. Aquí tienes cinco recetas creativas que impresionarán a tus invitados...",
    author: "Emma Rodríguez",
    publishedAt: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "recipes",
    featured: true,
  },
  {
    id: "4",
    title: "Cold Brew vs Café Helado: ¿Cuál es la Diferencia?",
    excerpt:
      "Entendiendo las diferencias clave entre estas populares preparaciones de café frío.",
    content:
      "Muchas personas usan los términos cold brew y café helado indistintamente, pero en realidad son bastante diferentes en preparación y sabor...",
    author: "Michael Torres",
    publishedAt: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "tips",
  },
  {
    id: "5",
    title: "Catering de Café Corporativo: Haciendo tu Evento Memorable",
    excerpt:
      "Cómo elegir el servicio de café adecuado para tus eventos empresariales.",
    content:
      "El servicio de café correcto puede hacer o deshacer un evento corporativo. Aquí está todo lo que necesitas saber sobre elegir el catering de café perfecto...",
    author: "Lisa Johnson",
    publishedAt: "2024-01-05",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "events",
  },
  {
    id: "6",
    title: "La Ciencia Detrás del Tostado de Café",
    excerpt:
      "Entendiendo cómo el tostado transforma los granos verdes en la preparación perfecta.",
    content:
      "El tostado de café es un proceso químico complejo que transforma los granos verdes en los granos aromáticos y sabrosos que conocemos y amamos...",
    author: "Roberto Kim",
    publishedAt: "2024-01-03",
    image:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "tips",
  },
];
