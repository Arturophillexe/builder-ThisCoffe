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

    const navigation = [
    { name: "Terminos y condiciones", href: "/terms" },
  ];
  return (
    <footer className="bg-coffee-dark text-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F331a2aed35f74393af73925ea74d7cae%2Fb2769bacb79e423abc172d58806dc33b"
                alt="thiscoffee - Conectando pasiones, taza a taza"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-coffee-cream/80 mb-6 max-w-md">
              Tu destino principal para experiencias excepcionales de café.
              Desde granos cuidadosamente seleccionados hasta eventos
              corporativos inolvidables, damos vida al arte del café.
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
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/sponsors"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Patrocinadores
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Blog y Recetas
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Eventos Corporativos
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-coffee-cream/80 hover:text-coffee-green transition-colors"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-coffee-green">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-coffee-green flex-shrink-0" />
                <span className="text-coffee-cream/80 text-sm">
                  Calle Café 123, Ciudad del Grano, CG 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-coffee-green flex-shrink-0" />
                <span className="text-coffee-cream/80 text-sm">
                  (555) 123-CAFÉ
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-coffee-green flex-shrink-0" />
                <span className="text-coffee-cream/80 text-sm">
                  hola@thiscoffee.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-cream/60 text-sm">
            © 2024 thiscoffee. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-coffee-cream/60 hover:text-coffee-green text-sm transition-colors"
            >
              Política de Privacidad
            </a>
          <Link to="/terms" className="flex space-x-6 mt-4 md:mt-0">
            Terminos y Condiciones
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
