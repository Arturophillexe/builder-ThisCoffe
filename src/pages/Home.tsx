import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import CoffeeIdeas from "@/components/CoffeeIdeas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { coffeeProducts } from "@/data/products";
import { blogPosts } from "@/data/blog";

const Home = () => {
  const featuredProducts = coffeeProducts.filter((product) => product.featured);
  const featuredPosts = blogPosts.filter((post) => post.featured);

  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Star, label: "Coffee Varieties", value: "50+" },
    { icon: Zap, label: "Corporate Events", value: "500+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Featured Coffee Selection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular coffee beans and blends, carefully
              selected for their exceptional quality and unique flavor profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
            >
              <Link to="/shop" className="flex items-center space-x-2">
                <span>View All Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-coffee-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-coffee-green mx-auto mb-3" />
                  <div className="text-3xl font-bold text-coffee-cream mb-1">
                    {stat.value}
                  </div>
                  <div className="text-coffee-cream/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coffee Ideas Section */}
      <CoffeeIdeas />

      {/* Corporate Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-coffee-dark mb-6">
                Elevate Your Corporate Events
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your business meetings, conferences, and corporate
                gatherings with our professional coffee catering services. We
                bring the café experience directly to your workplace.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-coffee-green/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-coffee-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">
                      Professional Baristas
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Expert coffee preparation on-site
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-coffee-green/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-coffee-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">
                      Premium Equipment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      State-of-the-art coffee machines and tools
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-coffee-green/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-coffee-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">
                      Custom Packages
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tailored solutions for events of any size
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark"
              >
                <Link to="/events">Book Your Event</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Corporate coffee event"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-coffee-cream p-6 rounded-lg shadow-lg border border-coffee-brown/10">
                <div className="text-coffee-brown font-semibold">
                  Next Available
                </div>
                <div className="text-coffee-green text-lg font-bold">
                  This Week
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-dark mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest coffee trends, brewing techniques,
              and stories from the world of coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
            >
              <Link to="/blog" className="flex items-center space-x-2">
                <span>Read More Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-coffee-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-cream mb-4">
            Stay Connected with thiscoffee
          </h2>
          <p className="text-lg text-coffee-cream/80 mb-8">
            Get the latest updates on new coffee arrivals, brewing tips, and
            exclusive offers delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-coffee-cream/20 bg-coffee-cream/10 text-coffee-cream placeholder-coffee-cream/60 focus:outline-none focus:ring-2 focus:ring-coffee-green"
            />
            <Button className="bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
