import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
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
import ProductCard from "@/components/ProductCard";
import { coffeeProducts, CoffeeProduct } from "@/data/products";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRoast, setSelectedRoast] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { value: "all", label: "Todos los Productos" },
    { value: "beans", label: "Granos de Café" },
    { value: "ground", label: "Café Molido" },
    { value: "equipment", label: "Equipos" },
    { value: "accessories", label: "Accesorios" },
  ];

  const roastLevels = [
    { value: "all", label: "Todos los Tuestes" },
    { value: "light", label: "Tueste Claro" },
    { value: "medium", label: "Tueste Medio" },
    { value: "dark", label: "Tueste Oscuro" },
  ];

  const sortOptions = [
    { value: "name", label: "Nombre (A-Z)" },
    { value: "price-low", label: "Precio (Menor a Mayor)" },
    { value: "price-high", label: "Precio (Mayor a Menor)" },
    { value: "featured", label: "Destacados Primero" },
  ];

  const filterProducts = (products: CoffeeProduct[]) => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.origin?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Roast level filter
    if (selectedRoast !== "all") {
      filtered = filtered.filter(
        (product) => product.roastLevel === selectedRoast,
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  };

  const filteredProducts = filterProducts(coffeeProducts);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedRoast("all");
    setSortBy("name");
  };

  const activeFiltersCount = [
    searchQuery,
    selectedCategory !== "all" ? selectedCategory : "",
    selectedRoast !== "all" ? selectedRoast : "",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-coffee-brown text-coffee-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tienda de Café</h1>
          <p className="text-lg text-coffee-cream/90 max-w-2xl">
            Descubre nuestra selección cuidadosamente curada de granos de café
            premium, equipos y accesorios. Desde granos de origen único hasta
            equipos de preparación de última generación, encuentra todo lo que
            necesitas para la taza perfecta.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar productos..."
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
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRoast} onValueChange={setSelectedRoast}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Nivel de Tueste" />
                </SelectTrigger>
                <SelectContent>
                  {roastLevels.map((roast) => (
                    <SelectItem key={roast.value} value={roast.value}>
                      {roast.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 pt-4 border-t">
              <span className="text-sm text-gray-600">Filtros activos:</span>
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  Búsqueda: "{searchQuery}"
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Categoría:{" "}
                  {categories.find((c) => c.value === selectedCategory)?.label}
                </Badge>
              )}
              {selectedRoast !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Tueste:{" "}
                  {roastLevels.find((r) => r.value === selectedRoast)?.label}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs h-auto p-1 text-coffee-brown hover:text-coffee-green"
              >
                Limpiar todo
              </Button>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} de {coffeeProducts.length}{" "}
            productos
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-300 mb-4">☕</div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-500 mb-4">
              Intenta ajustar tus criterios de búsqueda o navega todos nuestros
              productos.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Limpiar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
