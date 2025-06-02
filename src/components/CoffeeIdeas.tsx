import { coffeeIdeas, CoffeeIdea } from "@/data/coffee-ideas";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, Thermometer, Coffee } from "lucide-react";
import { useState } from "react";

const CoffeeIdeas = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "hot" | "cold" | "specialty"
  >("all");
  const [expandedIdea, setExpandedIdea] = useState<string | null>(null);

  const categories = [
    { value: "all", label: "All Ideas", icon: Coffee },
    { value: "hot", label: "Hot Coffee", icon: Thermometer },
    { value: "cold", label: "Cold Coffee", icon: Thermometer },
    { value: "specialty", label: "Specialty", icon: ChefHat },
  ];

  const filteredIdeas =
    selectedCategory === "all"
      ? coffeeIdeas
      : coffeeIdeas.filter((idea) => idea.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hot":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "cold":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "specialty":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-16 bg-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">
            Coffee Preparation Ideas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover new ways to enjoy your coffee with our curated collection
            of recipes and brewing techniques.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.value}
                variant={
                  selectedCategory === category.value ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.value as any)}
                className={
                  selectedCategory === category.value
                    ? "bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
                    : "border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
                }
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => (
            <Card
              key={idea.id}
              className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={idea.image}
                    alt={idea.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(idea.category)}
                    >
                      {idea.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getDifficultyColor(idea.difficulty)}
                    >
                      {idea.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4 flex flex-col">
                <CardTitle className="text-lg text-coffee-dark mb-2">
                  {idea.name}
                </CardTitle>

                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {idea.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{idea.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat className="h-3 w-3" />
                    <span className="capitalize">{idea.difficulty}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setExpandedIdea(expandedIdea === idea.id ? null : idea.id)
                  }
                  className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
                >
                  {expandedIdea === idea.id ? "Hide Recipe" : "Show Recipe"}
                </Button>

                {expandedIdea === idea.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="mb-3">
                      <h4 className="font-semibold text-coffee-dark mb-2 text-sm">
                        Ingredients:
                      </h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {idea.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-coffee-green mr-2">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-coffee-dark mb-2 text-sm">
                        Instructions:
                      </h4>
                      <ol className="text-xs text-gray-600 space-y-1">
                        {idea.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-coffee-green mr-2 font-medium">
                              {index + 1}.
                            </span>
                            {instruction}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeIdeas;
