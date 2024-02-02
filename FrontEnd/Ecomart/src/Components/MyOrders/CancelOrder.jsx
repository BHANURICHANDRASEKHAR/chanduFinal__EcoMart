import React, { useEffect,useState } from 'react'
import myordersdata from './getmyorders'
import {CancelOrders} from '../PaymentPages/OrdersPages/Cancel Orders/CancelSuccess'
import { SearchItems } from './Products';
export default function CancelOrder() {
  const [deleteorder,setdeleteorder]=useState([])
  useEffect(()=>{
  myordersdata('cancel_orders',setdeleteorder);
  },[]);
   return (
    <div className='myorders-child'>
    <SearchItems/>
    <div>{
      deleteorder.map((items,index)=>{
        return(
            <CancelOrders productdata={items} key={index}/>
        )
      })
    }</div>
    </div>
  )
}
