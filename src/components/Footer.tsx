import { Link } from "react-router-dom";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/thiscoffee-logo.png"
                alt="thiscoffee - Conectando pasiones, taza a taza"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-coffee-cream/80 mb-6 max-w-md">
              Your premier destination for exceptional coffee experiences. From
              carefully sourced beans to unforgettable corporate events, we
              bring the art of coffee to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-coffee-cream/60 hover:text-coffee-green transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-coffee-cream/60 hover:text-coffee-green transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-coffee-cream/60 hover:text-coffee-green transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-coffee-green">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shop"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Coffee Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Blog & Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-coffee-green">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-coffee-green flex-shrink-0" />
                <span className="text-coffee-cream/80 text-sm">
                  123 Coffee Street, Bean City, BC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-coffee-green flex-shrink-0" />
                <span className="text-coffee-cream/80 text-sm">
                  (555) 123-COFFEE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-coffee-green flex-shrink-0" />
                <span className="text-coffee-cream/80 text-sm">
                  hello@thiscoffee.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-cream/60 text-sm">
            © 2024 thiscoffee. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-coffee-cream/60 hover:text-coffee-green text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-coffee-cream/60 hover:text-coffee-green text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
