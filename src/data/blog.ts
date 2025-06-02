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
    title: "The Art of Pour Over Coffee",
    excerpt:
      "Master the technique of pour-over brewing for the perfect cup every time.",
    content:
      "Pour-over coffee is more than just a brewing method—it's an art form that allows you to control every variable in your coffee-making process...",
    author: "Sarah Martinez",
    publishedAt: "2024-01-15",
    image: "/placeholder.svg",
    category: "brewing",
    featured: true,
  },
  {
    id: "2",
    title: "Exploring Coffee Origins: Ethiopia",
    excerpt:
      "Discover the birthplace of coffee and its unique flavor profiles.",
    content:
      "Ethiopia is widely considered the birthplace of coffee, and its beans offer some of the most complex and unique flavor profiles in the world...",
    author: "David Chen",
    publishedAt: "2024-01-12",
    image: "/placeholder.svg",
    category: "origins",
    featured: true,
  },
  {
    id: "3",
    title: "5 Creative Coffee Cocktails for Your Next Event",
    excerpt:
      "Elevate your corporate events with these sophisticated coffee-based drinks.",
    content:
      "Coffee cocktails are the perfect way to add sophistication to any corporate event. Here are five creative recipes that will impress your guests...",
    author: "Emma Rodriguez",
    publishedAt: "2024-01-10",
    image: "/placeholder.svg",
    category: "recipes",
    featured: true,
  },
  {
    id: "4",
    title: "Cold Brew vs Iced Coffee: What's the Difference?",
    excerpt:
      "Understanding the key differences between these popular cold coffee preparations.",
    content:
      "Many people use the terms cold brew and iced coffee interchangeably, but they are actually quite different in preparation and taste...",
    author: "Michael Torres",
    publishedAt: "2024-01-08",
    image: "/placeholder.svg",
    category: "tips",
  },
  {
    id: "5",
    title: "Corporate Coffee Catering: Making Your Event Memorable",
    excerpt: "How to choose the right coffee service for your business events.",
    content:
      "The right coffee service can make or break a corporate event. Here's everything you need to know about choosing the perfect coffee catering...",
    author: "Lisa Johnson",
    publishedAt: "2024-01-05",
    image: "/placeholder.svg",
    category: "events",
  },
  {
    id: "6",
    title: "The Science Behind Coffee Roasting",
    excerpt:
      "Understanding how roasting transforms green coffee beans into the perfect brew.",
    content:
      "Coffee roasting is a complex chemical process that transforms green coffee beans into the aromatic, flavorful beans we know and love...",
    author: "Robert Kim",
    publishedAt: "2024-01-03",
    image: "/placeholder.svg",
    category: "tips",
  },
];
