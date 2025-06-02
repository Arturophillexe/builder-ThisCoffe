import { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { blogPosts, BlogPost } from "@/data/blog";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "brewing", label: "Brewing Techniques" },
    { value: "origins", label: "Coffee Origins" },
    { value: "recipes", label: "Recipes" },
    { value: "events", label: "Events" },
    { value: "tips", label: "Tips & Guides" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "title", label: "Title (A-Z)" },
  ];

  const filterPosts = (posts: BlogPost[]) => {
    let filtered = posts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        default: // newest
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
      }
    });

    return filtered;
  };

  const filteredPosts = filterPosts(blogPosts);
  const featuredPost = blogPosts.find((post) => post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "brewing":
        return "bg-coffee-brown/20 text-coffee-brown border-coffee-brown/30";
      case "origins":
        return "bg-coffee-green/20 text-coffee-green border-coffee-green/30";
      case "recipes":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "events":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "tips":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Coffee Blog</h1>
          <p className="text-lg text-coffee-cream/90 max-w-2xl">
            Explore the world of coffee through our expert articles, brewing
            guides, and stories from coffee enthusiasts around the globe.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-coffee-green text-coffee-dark">
                    Featured Article
                  </Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge
                  variant="outline"
                  className={`${getCategoryColor(featuredPost.category)} mb-4 w-fit`}
                >
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl font-bold text-coffee-dark mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                </div>
                <Button className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream w-fit">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-300 mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search criteria or browse all our articles.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortBy("newest");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-coffee-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-coffee-cream mb-4">
            Stay Updated with Our Blog
          </h2>
          <p className="text-lg text-coffee-cream/80 mb-8">
            Get the latest coffee articles, brewing tips, and industry insights
            delivered to your inbox.
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
      </div>
    </div>
  );
};

export default Blog;
