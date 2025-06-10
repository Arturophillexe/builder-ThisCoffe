import { CoffeeProduct } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  product: CoffeeProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const getRoastLevelColor = (level?: string) => {
    switch (level) {
      case "light":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "dark":
        return "bg-coffee-brown/20 text-coffee-brown border-coffee-brown/30";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRoastLevelLabel = (level?: string) => {
    switch (level) {
      case "light":
        return "tueste claro";
      case "medium":
        return "tueste medio";
      case "dark":
        return "tueste oscuro";
      default:
        return level;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "beans":
        return "bg-coffee-green/20 text-coffee-green border-coffee-green/30";
      case "ground":
        return "bg-coffee-brown/20 text-coffee-brown border-coffee-brown/30";
      case "equipment":
        return "bg-coffee-dark/20 text-coffee-dark border-coffee-dark/30";
      case "accessories":
        return "bg-coffee-cream/40 text-coffee-dark border-coffee-cream/60";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "beans":
        return "granos";
      case "ground":
        return "molido";
      case "equipment":
        return "equipos";
      case "accessories":
        return "accesorios";
      default:
        return category;
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-coffee-green text-coffee-dark border-0">
                <Star className="h-3 w-3 mr-1" />
                Destacado
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge
              variant="outline"
              className={getCategoryColor(product.category)}
            >
              {getCategoryLabel(product.category)}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {product.roastLevel && (
            <Badge
              variant="outline"
              className={getRoastLevelColor(product.roastLevel)}
            >
              {getRoastLevelLabel(product.roastLevel)}
            </Badge>
          )}
          {product.origin && (
            <Badge
              variant="outline"
              className="bg-coffee-cream/40 text-coffee-dark border-coffee-cream/60"
            >
              {product.origin}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-coffee-dark mb-2 group-hover:text-coffee-brown transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="text-2xl font-bold text-coffee-green">
          ${product.price}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
