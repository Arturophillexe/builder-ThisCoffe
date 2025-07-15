import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-coffee-brown via-coffee-dark to-coffee-brown min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F0E1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo Integration */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F331a2aed35f74393af73925ea74d7cae%2F18535bf50fbd45cea33301f7e3ea0718"
                alt="thiscoffee - Conectando pasiones, taza a taza"
                className="h-24 w-auto object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-coffee-cream mb-6 leading-tight">
              Bienvenido a <span className="text-coffee-green">thiscoffee</span>
            </h1>
            <p className="text-xl text-coffee-cream/90 mb-8 max-w-2xl">
              Donde el café excepcional se encuentra con experiencias
              inolvidables. Descubre granos premium, aprende técnicas de
              preparación y eleva tus eventos corporativos con nuestros
              servicios profesionales de café.{" "}
              <span className="text-coffee-green italic">
                Conectando pasiones, taza a taza.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark font-semibold"
              >
                <Link to="/sponsors" className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5" />
                  <span>Ver Patrocinadores</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-brown"
              >
                <Link to="/events" className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Reservar Evento</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-coffee-cream/10 backdrop-blur-sm rounded-lg p-6 border border-coffee-cream/20">
              <Coffee className="h-8 w-8 text-coffee-green mb-4" />
              <h3 className="text-lg font-semibold text-coffee-cream mb-2">
                Café Premium
              </h3>
              <p className="text-coffee-cream/80 text-sm">
                Granos cuidadosamente seleccionados de las mejores regiones
                cafeteras del mundo.
              </p>
            </div>

            <div className="bg-coffee-cream/10 backdrop-blur-sm rounded-lg p-6 border border-coffee-cream/20">
              <Users className="h-8 w-8 text-coffee-green mb-4" />
              <h3 className="text-lg font-semibold text-coffee-cream mb-2">
                Eventos Corporativos
              </h3>
              <p className="text-coffee-cream/80 text-sm">
                Catering profesional de café para tus eventos empresariales y
                reuniones.
              </p>
            </div>

            <div className="bg-coffee-cream/10 backdrop-blur-sm rounded-lg p-6 border border-coffee-cream/20">
              <BookOpen className="h-8 w-8 text-coffee-green mb-4" />
              <h3 className="text-lg font-semibold text-coffee-cream mb-2">
                Educación Cafetera
              </h3>
              <p className="text-coffee-cream/80 text-sm">
                Aprende técnicas de preparación y descubre nuevas formas de
                disfrutar el café.
              </p>
            </div>

            <div className="bg-coffee-cream/10 backdrop-blur-sm rounded-lg p-6 border border-coffee-cream/20">
              <ArrowRight className="h-8 w-8 text-coffee-green mb-4" />
              <h3 className="text-lg font-semibold text-coffee-cream mb-2">
                Asesoría Experta
              </h3>
              <p className="text-coffee-cream/80 text-sm">
                Nuestros expertos en café te ayudan a encontrar la mezcla
                perfecta para cualquier ocasión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
