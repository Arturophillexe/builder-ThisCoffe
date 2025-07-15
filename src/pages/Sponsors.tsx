import { Star, Users, Coffee, Award, Building, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Sponsors = () => {
  const sponsors = [
    {
      id: "1",
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80",
      description: "Empresa líder en soluciones tecnológicas empresariales",
      category: "Tecnología",
      tier: "Oro",
      employees: "500+",
      partnership: "2020",
      benefits: [
        "Café premium diario",
        "Eventos trimestrales",
        "Descuentos especiales",
      ],
      featured: true,
    },
    {
      id: "2",
      name: "Design Studio Pro",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      description:
        "Estudio creativo especializado en branding y diseño digital",
      category: "Diseño",
      tier: "Plata",
      employees: "150+",
      partnership: "2021",
      benefits: [
        "Servicio de barista",
        "Workshops mensuales",
        "Café personalizado",
      ],
      featured: true,
    },
    {
      id: "3",
      name: "Marketing Plus",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Agencia de marketing digital y estrategias de crecimiento",
      category: "Marketing",
      tier: "Oro",
      employees: "300+",
      partnership: "2019",
      benefits: [
        "Coffee bar completo",
        "Eventos exclusivos",
        "Consultoría de café",
      ],
      featured: false,
    },
    {
      id: "4",
      name: "InnovateCorp",
      logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Empresa innovadora en desarrollo de software y IA",
      category: "Tecnología",
      tier: "Platino",
      employees: "1000+",
      partnership: "2018",
      benefits: [
        "Servicio premium 24/7",
        "Eventos semanales",
        "Café exclusivo",
      ],
      featured: true,
    },
    {
      id: "5",
      name: "Consultora Empresarial",
      logo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Consultoría estratégica para empresas en crecimiento",
      category: "Consultoría",
      tier: "Bronce",
      employees: "75+",
      partnership: "2022",
      benefits: [
        "Café diario",
        "Eventos bimestrales",
        "Descuentos corporativos",
      ],
      featured: false,
    },
    {
      id: "6",
      name: "FinanceHub",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Servicios financieros y gestión de inversiones",
      category: "Finanzas",
      tier: "Plata",
      employees: "200+",
      partnership: "2021",
      benefits: ["Servicio ejecutivo", "Coffee talks", "Café gourmet"],
      featured: false,
    },
  ];

  const tiers = [
    {
      name: "Platino",
      color: "bg-gradient-to-r from-gray-300 to-gray-500",
      textColor: "text-white",
      benefits: [
        "Servicio premium 24/7",
        "Eventos exclusivos semanales",
        "Café personalizado",
        "Consultoría dedicada",
      ],
    },
    {
      name: "Oro",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      textColor: "text-white",
      benefits: [
        "Servicio premium diario",
        "Eventos trimestrales",
        "Descuentos especiales",
        "Barista dedicado",
      ],
    },
    {
      name: "Plata",
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      textColor: "text-white",
      benefits: [
        "Servicio de barista",
        "Eventos mensuales",
        "Café personalizado",
        "Soporte prioritario",
      ],
    },
    {
      name: "Bronce",
      color: "bg-gradient-to-r from-orange-400 to-orange-600",
      textColor: "text-white",
      benefits: [
        "Café diario",
        "Eventos bimestrales",
        "Descuentos corporativos",
        "Soporte estándar",
      ],
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platino":
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case "Oro":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "Plata":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      case "Bronce":
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tecnología":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Diseño":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Marketing":
        return "bg-green-100 text-green-800 border-green-200";
      case "Consultoría":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Finanzas":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const featuredSponsors = sponsors.filter((sponsor) => sponsor.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nuestros Patrocinadores</h1>
            <p className="text-lg text-coffee-cream/90 max-w-3xl mx-auto">
              Empresas líderes que confían en thiscoffee para elevar su
              experiencia corporativa. Descubre cómo nuestros socios
              empresariales transforman sus espacios de trabajo con café
              premium.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Patrocinadores Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empresas que han elegido nuestros servicios premium para crear
              experiencias excepcionales de café.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSponsors.map((sponsor) => (
              <Card
                key={sponsor.id}
                className="hover:shadow-lg transition-shadow duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <Badge className="bg-coffee-green text-coffee-dark">
                    <Star className="h-3 w-3 mr-1" />
                    Destacado
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-coffee-dark">
                      {sponsor.name}
                    </CardTitle>
                    <Badge
                      className={`${getTierColor(sponsor.tier)} px-3 py-1`}
                    >
                      {sponsor.tier}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(sponsor.category)}
                    >
                      {sponsor.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-coffee-cream/40 text-coffee-dark border-coffee-cream/60"
                    >
                      <Users className="h-3 w-3 mr-1" />
                      {sponsor.employees}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-coffee-cream/40 text-coffee-dark border-coffee-cream/60"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Desde {sponsor.partnership}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-coffee-dark mb-2 text-sm">
                      Beneficios:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {sponsor.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-coffee-green mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Information */}
      <section className="py-16 bg-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Niveles de Patrocinio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos diferentes niveles de asociación empresarial para
              adaptarnos a las necesidades de cada organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={`${tier.color} ${tier.textColor} p-4 rounded-lg mb-4`}
                  >
                    <Award className="h-8 w-8 mx-auto mb-2" />
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-coffee-green mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Todos Nuestros Patrocinadores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor) => (
              <Card
                key={sponsor.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-coffee-dark">
                      {sponsor.name}
                    </CardTitle>
                    <Badge
                      className={`${getTierColor(sponsor.tier)} px-2 py-1 text-xs`}
                    >
                      {sponsor.tier}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    {sponsor.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge
                      variant="outline"
                      className={`${getCategoryColor(sponsor.category)} text-xs`}
                    >
                      {sponsor.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-coffee-cream/40 text-coffee-dark border-coffee-cream/60 text-xs"
                    >
                      {sponsor.employees}
                    </Badge>
                  </div>

                  <p className="text-xs text-gray-500">
                    Socio desde {sponsor.partnership}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-coffee-dark text-coffee-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Quieres ser nuestro próximo patrocinador?
          </h2>
          <p className="text-lg text-coffee-cream/80 mb-8">
            Únete a las empresas líderes que ya disfrutan de nuestros servicios
            premium de café corporativo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
            >
              <Link to="/events">Solicitar Información</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-brown"
            >
              <Link to="/about">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
