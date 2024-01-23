import React, { useState } from 'react'
import useFunction from '../customs hooks/useFunction';
import { FaHeart } from "react-icons/fa";
export default function DeepDetails({items}) {
  const {id,name, price, image}=items;
  const [addItems]=useFunction();
  return (
    <div className='container m-1'> <AddtoWishlist/> <h2>{name}</h2>
    <p><b>Price:&ensp;</b><del>₹{price+30}</del><b style={{color:'green'}}>&ensp;₹{price}</b></p>
    <div className='w-100'> <p style={{textWrap:'wrap'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl tortor, lobortis non tortor sit amet, iaculis rhoncus ipsum. Fusce ornare nunc maximus dui molestie.</p></div>
    <p>
    Availability:<b style={{color:'green'}}>100 in Stock</b></p>
  <div className='d-grid place-items-center m-4'>  <button onClick={()=>{addItems([id,name, price, image])}}>Add To Cart</button>
  <button style={{backgroundColor:'#ffb240',color:'black'}} >Buy Now</button></div>

   </div>

  )
}


 function AddtoWishlist() {
  const [wishlist,setwishlist]=useState(false)
  const style={
    color:wishlist? 'red' :'black'
  }
  return (
    <FaHeart className='love' onClick={()=>{setwishlist(!wishlist)}} style={style} />
  )
}
