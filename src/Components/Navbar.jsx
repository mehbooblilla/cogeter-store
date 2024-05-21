// src/Navbar.js
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-800 text-2xl font-bold">
          <a href="/">COGETER</a>
        </div>

        {/* Cart Icon */}
        <div className="text-gray-800">
          <a href="/cart">
          <CiShoppingCart fontSize={30}/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
