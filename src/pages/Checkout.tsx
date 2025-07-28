import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CoffeeProduct } from '@/data/products';

interface CartItem extends CoffeeProduct {
  quantity: number;
}

const Checkout = () => {
  const { cartItems, getTotalPrice, setCartItems } = useCart();
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayNow = () => {
    // Simulate a successful purchase
    setIsPurchaseComplete(true);
    // Clear the cart
    setCartItems([]);
    // Optionally, clear localStorage
    localStorage.removeItem('cart');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {isPurchaseComplete ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
          <h2 className="text-xl font-semibold">Purchase Successful!</h2>
          <p>Thank you for your order, {formData.name || 'Customer'}!</p>
          <p>A confirmation has been sent to {formData.email || 'your email'}.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                        <p className="text-sm text-gray-500 capitalize">
                          {item.category}
                          {item.origin && ` • ${item.origin}`}
                          {item.roastLevel && ` • ${item.roastLevel}`}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="mt-4">
                  <h3 className="text-xl font-bold">
                    Total: ${getTotalPrice().toFixed(2)}
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping & Billing</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handlePayNow}
                disabled={cartItems.length === 0}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;