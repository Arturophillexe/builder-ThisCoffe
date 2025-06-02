import { Coffee, Users, Award, Heart, Target, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Elena Rodriguez",
      role: "Founder & Head Roaster",
      bio: "With over 15 years in the coffee industry, Elena founded thiscoffee with a vision to bring exceptional coffee experiences to everyone.",
      image: "/placeholder.svg",
    },
    {
      name: "Marcus Chen",
      role: "Coffee Sourcing Director",
      bio: "Marcus travels the world to build relationships with coffee farmers and source the finest beans directly from origin.",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Williams",
      role: "Corporate Events Manager",
      bio: "Sarah specializes in creating memorable coffee experiences for corporate clients, managing events of all sizes.",
      image: "/placeholder.svg",
    },
    {
      name: "David Thompson",
      role: "Head Barista & Trainer",
      bio: "David leads our barista training programs and ensures every cup meets our exacting quality standards.",
      image: "/placeholder.svg",
    },
  ];

  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description:
        "We never compromise on quality, from bean selection to the final cup.",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description:
        "Building relationships with farmers, customers, and our local community.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly exploring new brewing methods and coffee experiences.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our business.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "The Beginning",
      description:
        "Elena Rodriguez opens the first thiscoffee location with a focus on specialty coffee.",
    },
    {
      year: "2012",
      title: "Corporate Expansion",
      description:
        "Launch of corporate catering services to bring café-quality coffee to businesses.",
    },
    {
      year: "2015",
      title: "Direct Trade Program",
      description:
        "Established direct relationships with coffee farmers for sustainable sourcing.",
    },
    {
      year: "2018",
      title: "Digital Platform",
      description:
        "Launched online platform for coffee sales and corporate event booking.",
    },
    {
      year: "2021",
      title: "Sustainability Focus",
      description:
        "Achieved carbon-neutral operations and launched eco-friendly packaging initiative.",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description:
        "Recognized as a leader in corporate coffee services with 500+ successful events.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About thiscoffee</h1>
            <p className="text-lg text-coffee-cream/90 max-w-3xl mx-auto">
              Since 2009, we've been passionate about delivering exceptional
              coffee experiences that bring people together and fuel great
              conversations.
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
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  To create exceptional coffee experiences that connect people,
                  inspire conversations, and fuel productivity in workplaces
                  around the world. We believe great coffee has the power to
                  transform ordinary moments into extraordinary ones.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-coffee-green mr-3" />
                  <h2 className="text-3xl font-bold text-coffee-dark">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600">
                  To be the leading provider of corporate coffee solutions,
                  known for our quality, innovation, and commitment to
                  sustainability. We envision a world where every workplace has
                  access to exceptional coffee that brings teams together.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Coffee roasting process"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-coffee-green p-6 rounded-lg shadow-lg">
                <div className="text-coffee-dark font-semibold text-sm">
                  Coffee Roasted
                </div>
                <div className="text-coffee-dark text-2xl font-bold">
                  1M+ lbs
                </div>
                <div className="text-coffee-dark text-sm">Since 2009</div>
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing beans to
              serving our customers.
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our passionate team of coffee experts is dedicated to bringing you
              the best coffee experience possible.
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              From a single coffee shop to a leading corporate coffee service
              provider.
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
              <div className="text-coffee-cream/80">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                10K+
              </div>
              <div className="text-coffee-cream/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                500+
              </div>
              <div className="text-coffee-cream/80">Corporate Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coffee-cream mb-2">
                50+
              </div>
              <div className="text-coffee-cream/80">Coffee Varieties</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">
            Ready to Experience thiscoffee?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're planning a corporate event or just want to enjoy
            great coffee, we're here to make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
            >
              <Link to="/events">Book an Event</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
            >
              <Link to="/shop">Shop Coffee</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
