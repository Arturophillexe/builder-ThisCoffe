import { Coffee, Users, Award, Heart, Target, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Elena Rodríguez",
      role: "Fundadora y Maestra Tostadora",
      bio: "Con más de 15 años en la industria del café, Elena fundó thiscoffee con la visión de llevar experiencias excepcionales de café a todos.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Marcus Chen",
      role: "Director de Sourcing de Café",
      bio: "Marcus viaja por el mundo para construir relaciones con caficultores y obtener los mejores granos directamente del origen.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Sarah Williams",
      role: "Gerente de Eventos Corporativos",
      bio: "Sarah se especializa en crear experiencias memorables de café para clientes corporativos, gestionando eventos de todos los tamaños.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "David Thompson",
      role: "Barista Principal y Entrenador",
      bio: "David lidera nuestros programas de entrenamiento de baristas y asegura que cada taza cumpla con nuestros estándares exigentes de calidad.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const values = [
    {
      icon: Coffee,
      title: "Calidad Primero",
      description:
        "Nunca comprometemos la calidad, desde la selección de granos hasta la taza final.",
    },
    {
      icon: Heart,
      title: "Enfoque en la Comunidad",
      description:
        "Construyendo relaciones con agricultores, clientes y nuestra comunidad local.",
    },
    {
      icon: Zap,
      title: "Innovación",
      description:
        "Explorando constantemente nuevos métodos de preparación y experiencias de café.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Esforzándonos por la excelencia en cada aspecto de nuestro negocio.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "El Comienzo",
      description:
        "Elena Rodríguez abre la primera ubicación de thiscoffee con un enfoque en café de especialidad.",
    },
    {
      year: "2012",
      title: "Expansión Corporativa",
      description:
        "Lanzamiento de servicios de catering corporativo para llevar café de calidad de cafetería a las empresas.",
    },
    {
      year: "2015",
      title: "Programa de Comercio Directo",
      description:
        "Establecimiento de relaciones directas con caficultores para un sourcing sostenible.",
    },
    {
      year: "2018",
      title: "Plataforma Digital",
      description:
        "Lanzamiento de plataforma en línea para ventas de café y reservas de eventos corporativos.",
    },
    {
      year: "2021",
      title: "Enfoque en Sostenibilidad",
      description:
        "Logro de operaciones carbono neutral y lanzamiento de iniciativa de empaques eco-amigables.",
    },
    {
      year: "2024",
      title: "Liderazgo en la Industria",
      description:
        "Reconocido como líder en servicios de café corporativo con más de 500 eventos exitosos.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Acerca de thiscoffee</h1>
            <p className="text-lg text-coffee-cream/90 max-w-3xl mx-auto">
              Desde 2009, hemos sido apasionados por entregar experiencias
              excepcionales de café que unen a las personas y alimentan grandes
              conversaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-coffee-green mr-3" />
                  <h2 className="text-3xl font-bold text-coffee-dark">
                    Nuestra Misión
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  Crear experiencias excepcionales de café que conecten a las
                  personas, inspiren conversaciones y alimenten la productividad
                  en lugares de trabajo alrededor del mundo. Creemos que el gran
                  café tiene el poder de transformar momentos ordinarios en
                  extraordinarios.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-coffee-green mr-3" />
                  <h2 className="text-3xl font-bold text-coffee-dark">
                    Nuestra Visión
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  Ser el proveedor líder de soluciones de café corporativo,
                  conocido por nuestra calidad, innovación y compromiso con la
                  sostenibilidad. Visualizamos un mundo donde cada lugar de
                  trabajo tenga acceso a café excepcional que una a los equipos.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587734195503-904fca47e0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Proceso de tostado de café"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-coffee-green p-6 rounded-lg shadow-lg">
                <div className="text-coffee-dark font-semibold text-sm">
                  Café Tostado
                </div>
                <div className="text-coffee-dark text-2xl font-bold">
                  1M+ lbs
                </div>
                <div className="text-coffee-dark text-sm">Desde 2009</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estos valores fundamentales guían todo lo que hacemos, desde el
              sourcing de granos hasta el servicio a nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-coffee-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Conoce Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo apasionado de expertos en café está dedicado a
              brindarte la mejor experiencia de café posible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-coffee-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-coffee-green font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Nuestro Viaje
            </h2>
            <p className="text-lg text-gray-600">
              De una sola cafetería a un proveedor líder de servicios de café
              corporativo.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-coffee-green"></div>

            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-coffee-green rounded-full border-2 border-white shadow"></div>

                  {/* Content */}
                  <div className="ml-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="bg-coffee-brown text-coffee-cream px-3 py-1 rounded-full text-sm font-semibold">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-coffee-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                15+
              </div>
              <div className="text-coffee-cream/80">Años de Excelencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                10K+
              </div>
              <div className="text-coffee-cream/80">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                500+
              </div>
              <div className="text-coffee-cream/80">Eventos Corporativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                50+
              </div>
              <div className="text-coffee-cream/80">Variedades de Café</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">
            ¿Listo para Experimentar thiscoffee?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ya sea que estés planeando un evento corporativo o simplemente
            quieras disfrutar de gran café, estamos aquí para hacerlo realidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
            >
              <Link to="/events">Reservar un Evento</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
            >
              <Link to="/shop">Comprar Café</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
