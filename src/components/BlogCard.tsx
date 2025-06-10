import { BlogPost } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "brewing":
        return "bg-coffee-brown/20 text-coffee-brown border-coffee-brown/30";
      case "origins":
        return "bg-coffee-green/20 text-coffee-green border-coffee-green/30";
      case "recipes":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "events":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "tips":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "brewing":
        return "preparación";
      case "origins":
        return "orígenes";
      case "recipes":
        return "recetas";
      case "events":
        return "eventos";
      case "tips":
        return "consejos";
      default:
        return category;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge
              variant="outline"
              className={getCategoryColor(post.category)}
            >
              {getCategoryLabel(post.category)}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-coffee-dark mb-2 group-hover:text-coffee-brown transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-coffee-green hover:text-coffee-brown transition-colors text-sm font-medium group/link"
        >
          Leer más
          <ArrowRight className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
