import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 가져오기
import {Link} from "react-router-dom";
import iconCart from "../assets/images/cart.png";

const Header = () => {
  return (
   <header className="flex justify-between items-center mb-5">
      <Link to="/" className='text-xl font-semibold'/>Home.
      <div className='w-10 h-10 bg-gray-100 rounded-full
      flex justify-center items-center relative'>
        <img src={iconCart} alt="" className='w-6'/>
        <span className='asolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full
        justify-center items-center'>0</span>
      </div>
   </header>
  )
}

export default Header;