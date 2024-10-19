import React from 'react';

const Cart: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <p className="text-lg">Your cart is currently empty.</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;