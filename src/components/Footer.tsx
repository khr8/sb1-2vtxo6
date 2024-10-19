import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SportsPro</h3>
            <p className="text-gray-400">Your one-stop shop for high-quality sports products.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
              <li><a href="/cart" className="hover:text-blue-400">Cart</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: info@sportspro.com</p>
            <p className="text-gray-400">Phone: +91 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 SportsPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;