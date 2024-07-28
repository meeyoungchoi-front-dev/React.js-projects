import React from 'react'
import { Link } from "react-router-dom";
import iconCart from "../assets/images/cart.png"; // 경로 및 확장자 확인
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductCart = (props) =>  {
 
  const {id, name, price, image, slug} = props.data;

  const carts = useSelector(store => store.cart.items);
  console.log("carts: ", carts);

  const dispatch = useDispatch();  
   // Add to Cart 버튼 클릭 핸들러
   const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }))
  };

  return (
    <div>
      <Link to={slug}>
        <img src={image} alt={name} className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px]'/>
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font-medium'>{price}</span>
        </p>
        <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2" onClcick={handleAddToCart}>
          <img src={iconCart} alt="" className='w-5'/>  
          Add To Cart
        </button>
      </div>
    </div>
  )
}
export default ProductCart;