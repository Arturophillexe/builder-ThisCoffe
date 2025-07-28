import { PayPalButtons } from '@paypal/react-paypal-js';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { components } from '@paypal/paypal-js/types/apis/openapi/checkout_orders_v2';
import { OnCancelledActions } from '@paypal/paypal-js';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  function handlePayPalError(err: Record<string, unknown>): void {
    throw new Error('Function not implemented.');
  }

  function handlePayPalCancel(data: Record<string, unknown>, actions: OnCancelledActions): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tu carrito io</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                      {item.origin && ` • ${item.origin}`}
                      {item.roastLevel && ` • ${item.roastLevel}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6">
            <h2 className="text-xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </h2>
              <div className="space-y-4">
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: getTotalPrice().toString(),
                            currency_code: "USD",
                          },
                        },
                      ],
                      intent: "CAPTURE",
                    });
                  }}
                  onApprove={(data, actions) => {
                    function handlePayPalSuccess(details: { create_time?: components["schemas"]["date_time"]; update_time?: components["schemas"]["date_time"]; } & { id?: string; payment_source?: components["schemas"]["payment_source_response"]; intent?: components["schemas"]["checkout_payment_intent"]; processing_instruction?: components["schemas"]["processing_instruction"]; payer?: components["schemas"]["payer"]; purchase_units?: components["schemas"]["purchase_unit"][]; status?: components["schemas"]["order_status"]; links?: readonly components["schemas"]["link_description"][]; }) {
                      throw new Error('Function not implemented.');
                    }

                    return actions.order?.capture().then((details) => {
                      handlePayPalSuccess(details);
                    });
                  }}
                  onError={handlePayPalError}
                  onCancel={handlePayPalCancel}
                />
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;