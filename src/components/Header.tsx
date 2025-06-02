import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
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
              src="/thiscoffee-logo.png"
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
            <Button
              variant="outline"
              asChild
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-brown"
            >
              <Link to="/events">Book Event</Link>
            </Button>
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
              <Button
                variant="outline"
                asChild
                className="w-full mt-4 border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-brown"
              >
                <Link to="/events" onClick={() => setIsMenuOpen(false)}>
                  Book Event
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
