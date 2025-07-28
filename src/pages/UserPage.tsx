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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-coffee-dark mb-4">Coffee Shop</h1>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {coffeeProducts.map((product: CoffeeProduct) => (
          <Card key={product.id} className="shadow-md hover:shadow-lg">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold text-coffee-dark">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              {product.origin && <p className="text-sm text-gray-500">Origin: {product.origin}</p>}
              {product.roastLevel && (
                <p className="text-sm text-gray-500">Roast: {product.roastLevel}</p>
              )}
              {product.featured && (
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full mt-2">
                  Featured
                </span>
              )}
              <Button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-coffee-brown hover:bg-coffee-brown/90 text-coffee-cream"
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
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
