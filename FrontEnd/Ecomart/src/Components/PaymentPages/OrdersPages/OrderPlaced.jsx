import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getorderdata from '../getorders'
import Header from './Header';
import Address from './Address';
import ProductDetails from './ProductDetails';
function OrderPlaced() {
  const [orderdata,setdata]=useState([])
  const id=useParams();
  useEffect(()=>{
  async function data()
  {
    const receivedata= await getorderdata(id.order_id);
    setdata(receivedata)
  }
  data();
  },[]);
  
  return (
  <div className='container-fluid'>
<Header data={orderdata[0]}/>
<Address/>
{
  orderdata.map((items,index)=>{
    return(<ProductDetails productdata={items} key={index}/>)
  })
}
  </div>
  )
}

export default OrderPlaced