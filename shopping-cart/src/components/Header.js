import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 가져오기
import {Link} from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold"/>Home.
      <div className='w-10 h-10 gb-gray-100 rounded-full'>
        <img src={iconCart} alt="" className="w-6"/>
        <span className='abbsolute top-2/3 right-1/2 bg-red-500 tex-red text-sm w-5 h-5 rounded-full flex justify-center items-center' >0</span>
      </div>
    </header>
  )
}

export default Header;