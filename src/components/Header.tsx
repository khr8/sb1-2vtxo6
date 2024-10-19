import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SportsPro</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/shop" className="hover:text-blue-200">Shop</Link>
          <Link to="/cart" className="hover:text-blue-200"><ShoppingCart /></Link>
          <Link to="/login" className="hover:text-blue-200"><User /></Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/shop" className="hover:text-blue-200">Shop</Link>
            <Link to="/cart" className="hover:text-blue-200">Cart</Link>
            <Link to="/login" className="hover:text-blue-200">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;