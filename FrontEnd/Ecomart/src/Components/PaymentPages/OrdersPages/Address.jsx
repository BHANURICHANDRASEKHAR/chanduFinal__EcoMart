import React from 'react'
import UserAddress from '../../UserAccount/Right/UserAddress'
export default function Address() {
  return (
    <div className='container rounded-2 mt-2 p-3'  style={{background:"white"}}>
    <h4>Delivary Address</h4> 
    <div><UserAddress/></div>
    
    </div>
  )
}
