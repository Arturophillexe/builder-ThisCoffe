import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';


const Header = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Patrocinadores", href: "/sponsors" },
    { name: "souvenirs", href: "/shop" },
    { name: "Eventos", href: "/events" },
    { name: "Nosotros", href: "/about" },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-coffee-brown shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F331a2aed35f74393af73925ea74d7cae%2Fccfc854a0a584e8ebbd7cca562075d64"
              alt="thiscoffee - Conectando pasiones, taza a taza"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-coffee-green",
                  isActiveRoute(item.href)
                    ? "text-coffee-green border-b-2 border-coffee-green pb-1"
                    : "text-coffee-cream",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {/* User Name and Type */}
                <div className="flex items-center space-x-2 text-coffee-cream">
                  <User className="h-4 w-4 text-coffee-green" />
                  <span className="text-sm font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                  {user.Usertype && (
                    <span className="text-xs bg-coffee-green text-coffee-dark px-2 py-1 rounded-full font-semibold">
                      {user.Usertype === 'seller' ? 'Vendedor' : 'Usuario'}
                    </span>
                  )}
                </div>
                {/* Logout Button */}
                <Button
                  variant="ghost"
                  onClick={logout}
                  size="sm"
                  className="text-coffee-cream hover:text-coffee-green hover:bg-coffee-cream/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  asChild
                  size="sm"
                  className="text-coffee-cream hover:text-coffee-green hover:bg-coffee-cream/10"
                >
                  <Link to="/login">Iniciar Sesión</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark font-semibold"
                >
                  <Link to="/signup">Registrarse</Link>
                </Button>
              </>
            )}
            <Button
              variant="outline"
              asChild
              size="sm"
              className="border-coffee-cream text-coffee-brown hover:bg-coffee-cream hover:text-coffee-black"
            >
              <Link to="/events">Reservar Evento</Link>
            </Button>
            <div className="relative">
              <Link to="/cart" className="">
            <img
              className="w-7 h-7 cursor-pointer"
              src="https://cdn-icons-png.freepik.com/512/6445/6445263.png"
              alt="Carrito de compras"
            />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-yellow-500">
              {itemCount}
            </span>
          )}
          </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-coffee-cream hover:text-coffee-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-coffee-brown border-t border-coffee-green">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    isActiveRoute(item.href)
                      ? "text-coffee-green bg-coffee-dark/20"
                      : "text-coffee-cream hover:text-coffee-green hover:bg-coffee-dark/10",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                {user ? (
                  <>
                    {/* User Info */}
                    <div className="px-3 py-2 text-coffee-cream border border-coffee-green rounded-md">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-coffee-green" />
                        <span className="text-sm font-medium">
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                      {user.Usertype && (
                        <div className="mt-1">
                          <span className="text-xs bg-coffee-green text-coffee-dark px-2 py-1 rounded-full font-semibold">
                            {user.Usertype === 'seller' ? 'Vendedor' : 'Usuario'}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Logout Button */}
                    <Button
                      variant="ghost"
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-coffee-cream hover:text-coffee-green hover:bg-coffee-cream/10"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full text-coffee-cream hover:text-coffee-green hover:bg-coffee-cream/10"
                    >
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        Iniciar Sesión
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark font-semibold"
                    >
                      <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                        Registrarse
                      </Link>
                    </Button>
                  </>
                )}
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-brown"
                >
                  <Link to="/events" onClick={() => setIsMenuOpen(false)}>
                    Reservar Evento
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
