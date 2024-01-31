import React from 'react'
import {images } from '../../.././icons'
export default function Header({data}) {
    const price=data?.price
    const delivarydate=data?.delivarydate;
  return (
    <div className='container mt-5 rounded-2 d-flex order-img' style={{background:"white"}}>
   <div > <img src={images.orders}/></div>
     <div className='ml-4 mt-5'> <h4 className=' text-primary'>Order Placed for ₹{price}!</h4><br/>
     <h5 className='text-primary'>Your Itmes will Delliverd by {delivarydate}</h5></div>
     </div>
  )
}
