// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center p-4">
      <Link to="/" className="font-bold text-lg">🛍️ MyShop</Link>
      <Link to="/cart" className="relative">
        🛒 Cart
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
