// src/pages/UserPage.tsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { productosAPI } from '../services/api';
import { CoffeeProduct } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const UserPage: React.FC = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<CoffeeProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productosAPI.obtenerTodos();
      setProducts(data);
    } catch (error: any) {
      console.error('Error al cargar productos:', error);
      toast.error('Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      loadProducts();
      return;
    }

    try {
      setLoading(true);
      const data = await productosAPI.buscar(searchTerm);
      setProducts(data);
    } catch (error: any) {
      console.error('Error al buscar productos:', error);
      toast.error('Error al buscar productos');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = searchTerm ? products : products;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-coffee-brown text-coffee-cream py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Tienda de Café</h1>
          <p className="text-coffee-cream/80">Descubre nuestra selección premium de café</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-6 flex gap-2">
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="max-w-md"
          />
          <Button
            onClick={handleSearch}
            className="bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
          >
            Buscar
          </Button>
          {searchTerm && (
            <Button
              onClick={() => {
                setSearchTerm('');
                loadProducts();
              }}
              variant="outline"
            >
              Limpiar
            </Button>
          )}
        </div>

        {/* Products List */}
        {loading ? (
          <div className="text-center py-8">
            <div className="text-coffee-dark">Cargando productos...</div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-600">No se encontraron productos.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProducts.map((product: CoffeeProduct) => (
              <Card key={product._id || product.id} className="shadow-md hover:shadow-lg transition-shadow">
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
                  <Button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
                  >
                    Agregar al Carrito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>

      {/* Cart */}
      <Card className="bg-gray-100">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold text-coffee-dark mb-4">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-2">
                  <div>
                    <h3 className="text-lg text-coffee-dark">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16"
                      min="1"
                    />
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="destructive"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-lg font-bold text-coffee-dark">
                  Total: $
                  {cartItems
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPage;