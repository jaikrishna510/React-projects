import { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// CartProvider component that wraps the app
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart (increase quantity if already exists)
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Decrease quantity or remove if quantity is 1
  const decreaseQuantity = (id) => {
    setCartItems((prevCart) => {
      const item = prevCart.find((i) => i.id === id);
      if (item.quantity === 1) {
        return prevCart.filter((i) => i.id !== id);
      } else {
        return prevCart.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
