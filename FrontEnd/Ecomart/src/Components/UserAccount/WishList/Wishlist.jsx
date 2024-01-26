import React, { useEffect } from 'react'
import useFunction from '../../customs hooks/useFunction';
import useWishlist from '../../customs hooks/useWishlist';
import { Cartdata } from '../../shop/Shop';
import { useSelector } from 'react-redux';
import './wishlist.css'
function Wishlist() {
    const [addItems]=useFunction();
    const [addItemstoWishList,fetchwishlistdata]=useWishlist();
    const wishlistdata=useSelector((state)=>state.wishlistslice.wishlist)
    console.log("wishlistdata",wishlistdata)
    useEffect(()=>{
      fetchwishlistdata();
    },[])
  function addToCart (id, productname, price, productimg) {
       addItems([id,productname,price,productimg])
       }
  
  return (
    <div className='container m-3'><h3 style={{fontWeight:'600'}}>Wishlist</h3>
     <div className='card-parent'>
     {
      wishlistdata.length>0&& wishlistdata.map((data,index)=>{
        return(<React.Fragment><Cartdata e={data} key={index} addToCart={addToCart}/></React.Fragment>)
      })
     
    }</div>
    </div>
  )
}

export default Wishlist