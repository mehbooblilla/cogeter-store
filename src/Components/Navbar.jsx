// src/Navbar.js
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../Redux/cart/cartSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="bg-white p-4 shadow-md top-0 sticky z-10">
      <div className="mx-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-gray-800 text-2xl font-bold">
          <a href="/">COGETER</a>
        </div>

        {/* Cart Icon */}
        <div className="text-gray-800 cursor-pointer relative right-[25px]" onClick={()=>dispatch(openCart())}>
          
          <CiShoppingCart fontSize={40}/>
          <span
            className={`cart-counter-badge flex items-center justify-center  right-0 text-white absolute top-[5px] w-5 h-5 text-xs  rounded-full font-semibold`}
            style={{ backgroundColor: 'black' }}
          >
            {cartItems? cartItems?.length : 0}
          </span>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
