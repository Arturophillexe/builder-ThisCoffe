import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Coffee, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-coffee-cream to-coffee-cream/80">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl text-coffee-brown/20 mb-4">
          <Coffee className="w-24 h-24 mx-auto" />
        </div>

        <h1 className="text-6xl font-bold text-coffee-brown mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-coffee-dark mb-4">
          ¡Oops! Esta preparación se perdió
        </h2>

        <p className="text-gray-600 mb-8">
          La página que buscas parece haber desaparecido como el vapor de una
          taza de café caliente. ¡Regresemos a donde está el buen café!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
          >
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Volver al Inicio</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
          >
            <Link to="/shop" className="flex items-center space-x-2">
              <Coffee className="h-4 w-4" />
              <span>Explorar Café</span>
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <Button
            asChild
            variant="ghost"
            className="text-coffee-green hover:text-coffee-brown"
            onClick={() => window.history.back()}
          >
            <button className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Regresar</span>
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
