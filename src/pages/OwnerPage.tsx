// src/pages/OwnerPage.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CoffeeProduct } from '../types';
import { coffeeProducts } from '../data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductFormProps {
  product?: CoffeeProduct;
  onSubmit: (product: CoffeeProduct) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<CoffeeProduct>(
    product || {
      id: '',
      name: '',
      description: '',
      price: 0,
      image: '',
      category: 'beans',
      origin: '',
      roastLevel: 'light',
      featured: false,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{formData.id ? 'Editar Producto' : 'Agregar Producto'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nombre del producto"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descripción del producto"
              required
            />
          </div>
          <div>
            <Label htmlFor="price">Precio (USD)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              placeholder="0.00"
              required
            />
          </div>
          <div>
            <Label htmlFor="image">URL de Imagen</Label>
            <Input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://ejemplo.com/imagen.jpg"
              required
            />
          </div>
          <div>
            <Label htmlFor="category">Categoría</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value as any })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beans">Granos</SelectItem>
                <SelectItem value="ground">Molido</SelectItem>
                <SelectItem value="equipment">Equipos</SelectItem>
                <SelectItem value="accessories">Accesorios</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="origin">Origen</Label>
            <Input
              id="origin"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              placeholder="País o región de origen"
            />
          </div>
          <div>
            <Label htmlFor="roastLevel">Nivel de Tostado</Label>
            <Select
              value={formData.roastLevel}
              onValueChange={(value) => setFormData({ ...formData, roastLevel: value as any })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar nivel de tostado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Claro</SelectItem>
                <SelectItem value="medium">Medio</SelectItem>
                <SelectItem value="dark">Oscuro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked as boolean })}
            />
            <Label htmlFor="featured">Producto Destacado</Label>
          </div>
          <div className="flex space-x-2">
            <Button type="submit" className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream">
              Guardar
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-cream"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const OwnerPage: React.FC = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<CoffeeProduct[]>(coffeeProducts);
  const [editingProduct, setEditingProduct] = useState<CoffeeProduct | null>(null);

  if (!user || user.Usertype !== 'seller') {
    return (
      <div className="container mx-auto p-4 text-coffee-dark">
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold text-coffee-dark mb-4">Acceso Denegado</h1>
          <p className="text-gray-600">Esta página está disponible solo para vendedores.</p>
        </div>
      </div>
    );
  }

  const handleEdit = (product: CoffeeProduct) => {
    setEditingProduct(product);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleSubmit = (updatedProduct: CoffeeProduct) => {
    if (updatedProduct.id) {
      setProducts(
        products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );
    } else {
      setProducts([...products, { ...updatedProduct, id: Date.now().toString() }]);
    }
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-coffee-brown text-coffee-cream py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Panel de Vendedor</h1>
          <p className="text-coffee-cream/80">Gestiona tus productos de café</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <Button
          onClick={() => setEditingProduct({} as CoffeeProduct)}
          className="mb-6 bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark font-semibold"
        >
          + Agregar Nuevo Producto
        </Button>

      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={() => setEditingProduct(null)}
        />
      )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold text-coffee-dark mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <p className="text-coffee-green font-bold text-xl mb-2">${product.price.toFixed(2)}</p>
                <div className="space-y-1 mb-3">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Categoría:</span> {
                      product.category === 'beans' ? 'Granos' :
                      product.category === 'ground' ? 'Molido' :
                      product.category === 'equipment' ? 'Equipos' : 'Accesorios'
                    }
                  </p>
                  {product.origin && (
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Origen:</span> {product.origin}
                    </p>
                  )}
                  {product.roastLevel && (
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Tostado:</span> {
                        product.roastLevel === 'light' ? 'Claro' :
                        product.roastLevel === 'medium' ? 'Medio' : 'Oscuro'
                      }
                    </p>
                  )}
                </div>
                {product.featured && (
                  <span className="inline-block bg-coffee-green text-coffee-dark text-xs px-2 py-1 rounded-full mb-3 font-semibold">
                    Destacado
                  </span>
                )}
                <div className="flex space-x-2 pt-2">
                  <Button
                    onClick={() => handleEdit(product)}
                    size="sm"
                    className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream flex-1"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    size="sm"
                    variant="destructive"
                    className="flex-1"
                  >
                    Eliminar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
  );
};

export default OwnerPage;