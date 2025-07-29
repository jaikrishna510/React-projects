// src/pages/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) return <p className="text-center mt-10">🛒 Your cart is empty</p>;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 items-center border p-4 rounded">
            <img src={item.image} className="h-20" />
            <div className="flex-1">
              <h2 className="text-sm">{item.title}</h2>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              <p className="font-bold">₹ {item.price * item.quantity}</p>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right font-bold text-lg">
        Total: ₹ {total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
