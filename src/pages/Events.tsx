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
} from "lucide-react";
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const eventTypes = [
    "Corporate Meeting",
    "Conference",
    "Workshop",
    "Product Launch",
    "Networking Event",
    "Team Building",
    "Training Session",
    "Client Meeting",
    "Other",
  ];

  const packages = [
    {
      name: "Essential",
      price: "Starting at $8/person",
      features: [
        "Professional barista service",
        "Premium coffee selection",
        "Basic equipment setup",
        "Standard cups and accessories",
        "Service up to 2 hours",
      ],
      bestFor: "Small meetings and workshops",
      minGuests: 10,
    },
    {
      name: "Professional",
      price: "Starting at $12/person",
      features: [
        "Everything in Essential",
        "Specialty drink options",
        "Premium equipment setup",
        "Branded coffee cups",
        "Service up to 4 hours",
        "Light refreshments",
      ],
      bestFor: "Corporate events and conferences",
      minGuests: 25,
      popular: true,
    },
    {
      name: "Premium",
      price: "Starting at $18/person",
      features: [
        "Everything in Professional",
        "Full coffee bar experience",
        "Custom drink menu",
        "Professional setup design",
        "Full-day service",
        "Gourmet pastries included",
        "Dedicated event coordinator",
      ],
      bestFor: "Large corporate events and VIP meetings",
      minGuests: 50,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      text: "The coffee service at our annual conference was exceptional. Our attendees couldn't stop talking about the quality!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Design Studio Pro",
      text: "Professional, punctual, and the coffee was amazing. Made our client meeting much more memorable.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Marketing Plus",
      text: "We've used thiscoffee for multiple events now. They always exceed our expectations with their service.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Corporate Coffee Events</h1>
            <p className="text-lg text-coffee-cream/90 max-w-3xl mx-auto">
              Elevate your corporate events with professional coffee catering
              services. From intimate meetings to large conferences, we bring
              the café experience directly to your venue.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Why Choose Our Coffee Catering?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive coffee solutions that enhance your
              corporate events and leave lasting impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600 text-sm">
                Finest coffee beans and professional brewing equipment for
                exceptional taste.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Expert Baristas
              </h3>
              <p className="text-gray-600 text-sm">
                Certified professionals who create memorable coffee experiences
                for your guests.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Flexible Timing
              </h3>
              <p className="text-gray-600 text-sm">
                From quick coffee breaks to full-day service, we adapt to your
                event schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-coffee-green" />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark mb-2">
                Hassle-Free Setup
              </h3>
              <p className="text-gray-600 text-sm">
                Complete setup and cleanup included. Focus on your event while
                we handle the coffee.
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
              Event Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your event size and requirements.
              All packages include professional service and cleanup.
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
                      Most Popular
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
                    Minimum {pkg.minGuests} guests
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
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>

                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
                          : "bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
                      }`}
                    >
                      Select Package
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
              Book Your Event
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your event and we'll create a customized coffee
              experience for you.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("eventType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
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
                    <Label htmlFor="attendees">Expected Attendees</Label>
                    <Input
                      id="attendees"
                      name="attendees"
                      type="number"
                      placeholder="Number of guests"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">Event Date</Label>
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
                    <Label htmlFor="duration">Duration</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("duration", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Event duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2 hours">1-2 hours</SelectItem>
                        <SelectItem value="2-4 hours">2-4 hours</SelectItem>
                        <SelectItem value="4-6 hours">4-6 hours</SelectItem>
                        <SelectItem value="Full day">Full day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Event Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Venue address or name"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Contact Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company name"
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
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
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
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about any special requirements, dietary restrictions, or preferences..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
                >
                  Request Quote
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
              What Our Clients Say
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
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-lg text-coffee-cream/80 mb-8">
            Have questions or need immediate assistance? Our event specialists
            are here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-coffee-green" />
              <span className="text-lg">(555) 123-COFFEE</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-coffee-green" />
              <span className="text-lg">events@thiscoffee.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
