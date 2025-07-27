import { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Coffee,
  Star,
  CheckCircle,
  Phone,
  Mail,
  CreditCard,
  X,
} from "lucide-react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { eventosAPI } from "@/services/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Events = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    attendees: "",
    date: "",
    duration: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [attendeeCount, setAttendeeCount] = useState(10);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculatePaymentAmount = () => {
    if (!selectedPackage) return "0";
    return (selectedPackage.priceValue * attendeeCount).toFixed(2);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await eventosAPI.crear(formData);
      setShowQuotePopup(true);
      // Limpiar formulario después del envío exitoso
      setFormData({
        eventType: "",
        attendees: "",
        date: "",
        duration: "",
        location: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(error.message || "Error al enviar solicitud");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePackageSelect = (pkg: any) => {
    setSelectedPackage(pkg);
    setShowPaymentModal(true);
  };

  const handlePayPalSuccess = (details: any) => {
    toast.success(
      `¡Pago procesado exitosamente! ID de transacción: ${details.id}. Recibirás confirmación por correo.`,
    );
    setShowPaymentModal(false);
    setSelectedPackage(null);
    setAttendeeCount(10);
  };

  const handlePayPalError = (err: any) => {
    console.error("Error en PayPal:", err);
    toast.error("Error al procesar el pago. Por favor intenta nuevamente.");
  };

  const handlePayPalCancel = () => {
    toast.info("Pago cancelado por el usuario.");
  };

  const eventTypes = [
    "Reunión Corporativa",
    "Conferencia",
    "Taller",
    "Lanzamiento de Producto",
    "Evento de Networking",
    "Team Building",
    "Sesión de Capacitación",
    "Reunión con Clientes",
    "Otro",
  ];

  const packages = [
    {
      name: "Esencial",
      price: "Desde $8/persona",
      priceValue: 8,
      features: [
        "Servicio de barista profesional",
        "Selección de café premium",
        "Configuración básica de equipos",
        "Tazas y accesorios estándar",
        "Servicio hasta 2 horas",
      ],
      bestFor: "Reuniones pequeñas y talleres",
      minGuests: 10,
    },
    {
      name: "Profesional",
      price: "Desde $12/persona",
      priceValue: 12,
      features: [
        "Todo lo incluido en Esencial",
        "Opciones de bebidas especiales",
        "Configuración de equipos premium",
        "Tazas de café con marca",
        "Servicio hasta 4 horas",
        "Refrigerios ligeros",
      ],
      bestFor: "Eventos corporativos y conferencias",
      minGuests: 25,
      popular: true,
    },
    {
      name: "Premium",
      price: "Desde $18/persona",
      priceValue: 18,
      features: [
        "Todo lo incluido en Profesional",
        "Experiencia completa de coffee bar",
        "Menú de bebidas personalizado",
        "Diseño profesional de configuración",
        "Servicio de día completo",
        "Pasteles gourmet incluidos",
        "Coordinador de eventos dedicado",
      ],
      bestFor: "Eventos corporativos grandes y reuniones VIP",
      minGuests: 50,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      text: "El servicio de café en nuestra conferencia anual fue excepcional. ¡Nuestros asistentes no paraban de hablar sobre la calidad!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Design Studio Pro",
      text: "Profesionales, puntuales y el café estuvo increíble. Hizo que nuestra reunión con clientes fuera mucho más memorable.",
      rating: 5,
    },
    {
      name: "Emily Rodríguez",
      company: "Marketing Plus",
      text: "Hemos usado thiscoffee para múltiples eventos ahora. Siempre superan nuestras expectativas con su servicio.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Eventos Corporativos de Café
            </h1>
            <p className="text-lg text-coffee-cream/90 max-w-3xl mx-auto">
              Eleva tus eventos corporativos con servicios profesionales de
              catering de café. Desde reuniones íntimas hasta grandes
              conferencias, llevamos la experiencia de cafetería directamente a
              tu venue.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              ¿Por Qué Elegir Nuestro Catering de Café?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales de café que mejoran tus eventos
              corporativos y dejan impresiones duraderas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Calidad Premium
              </h3>
              <p className="text-gray-600 text-sm">
                Los mejores granos de café y equipos de preparación profesional
                para un sabor excepcional.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Baristas Expertos
              </h3>
              <p className="text-gray-600 text-sm">
                Profesionales certificados que crean experiencias memorables de
                café para tus invitados.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Horarios Flexibles
              </h3>
              <p className="text-gray-600 text-sm">
                Desde descansos rápidos de café hasta servicio de día completo,
                nos adaptamos al horario de tu evento.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Configuración Sin Complicaciones
              </h3>
              <p className="text-gray-600 text-sm">
                Configuración y limpieza completa incluida. Enfócate en tu
                evento mientras nosotros manejamos el café.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-coffee-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Paquetes de Eventos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el paquete perfecto para el tamaño de tu evento y
              requerimientos. Todos los paquetes incluyen servicio profesional y
              limpieza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-coffee-green" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-coffee-green text-coffee-dark px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-coffee-dark">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-coffee-green mt-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600">
                    Mínimo {pkg.minGuests} invitados
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-coffee-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Ideal para:</strong> {pkg.bestFor}
                    </p>

                    <Button
                      onClick={() => handlePackageSelect(pkg)}
                      className={`w-full ${
                        pkg.popular
                          ? "bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
                          : "bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
                      }`}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Seleccionar Paquete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Reserva tu Evento
            </h2>
            <p className="text-lg text-gray-600">
              Cuéntanos sobre tu evento y crearemos una experiencia de café
              personalizada para ti.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventType">Tipo de Evento</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("eventType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="attendees">Asistentes Esperados</Label>
                    <Input
                      id="attendees"
                      name="attendees"
                      type="number"
                      placeholder="Número de invitados"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">Fecha del Evento</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration">Duración</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("duration", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Duración del evento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2 horas">1-2 horas</SelectItem>
                        <SelectItem value="2-4 horas">2-4 horas</SelectItem>
                        <SelectItem value="4-6 horas">4-6 horas</SelectItem>
                        <SelectItem value="Día completo">
                          Día completo
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Ubicación del Evento</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Dirección o nombre del venue"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nombre de Contacto</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de la empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Detalles Adicionales</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre cualquier requerimiento especial, restricciones dietéticas o preferencias..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <Coffee className="h-4 w-4 animate-spin" />
                      <span>Enviando solicitud...</span>
                    </div>
                  ) : (
                    "Solicitar Cotización"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-coffee-green fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-coffee-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-coffee-dark text-coffee-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Planificar tu Evento?
          </h2>
          <p className="text-lg text-coffee-cream/80 mb-8">
            ¿Tienes preguntas o necesitas asistencia inmediata? Nuestros
            especialistas en eventos están aquí para ayudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-coffee-green" />
              <span className="text-lg">(555) 123-CAFÉ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-coffee-green" />
              <span className="text-lg">eventos@thiscoffee.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Popup */}
      {showQuotePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-2xl font-bold text-coffee-dark mb-4">
                ¡Solicitud Enviada!
              </h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu solicitud de cotización. Te enviaremos una
                propuesta detallada a tu correo electrónico en las próximas 24
                horas.
              </p>
              <Button
                onClick={() => setShowQuotePopup(false)}
                className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
              >
                Entendido
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-coffee-dark">
                  Pagar Paquete {selectedPackage.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPaymentModal(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-coffee-cream/30 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-coffee-dark mb-2">
                  Resumen del Paquete
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {selectedPackage.name} - {selectedPackage.price}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedPackage.bestFor}
                </p>
              </div>

              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    placeholder="Juan Pérez"
                    value={paymentData.cardName}
                    onChange={handlePaymentInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentData.cardNumber}
                    onChange={handlePaymentInputChange}
                    maxLength={19}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Fecha de Vencimiento</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/AA"
                      value={paymentData.expiryDate}
                      onChange={handlePaymentInputChange}
                      maxLength={5}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={paymentData.cvv}
                      onChange={handlePaymentInputChange}
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Procesar Pago
                  </Button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Transacción segura protegida por SSL
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
