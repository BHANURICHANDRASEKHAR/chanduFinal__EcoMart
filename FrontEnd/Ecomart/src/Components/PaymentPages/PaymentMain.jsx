import React, { useState,useEffect } from 'react'
import './payment.css'
import Pricedetailes from '../Cart/Pricedetailes';
import rawdata from '../../../data/testdata'
import { useParams } from 'react-router-dom';
import useFunction from '../customs hooks/useFunction';
import PaymentFaq from './PaymentFaq'
function PaymentMain() {
  const [addItems, removeItems,cartdata,removeentireItem]=useFunction();
  const item = cartdata.itemslist;
  console.log(item)
  const count = cartdata.totalprice;
    const {id}=useParams();
    const [itemdata,setitemdata]=useState([])
    useEffect(()=>{
        const cuurentitem=rawdata.filter((items)=>items.id==id)
        if(cuurentitem.length>0)
   {
    setitemdata(cuurentitem)
   }
   else{
    setitemdata(item)
   }
        
      },[id]);
  return (
    <div className='container mt-4'>
   <div className='payment-parent'>
   <div className='payment-child'>
   <div className='row'>
  <PaymentFaq itemdata={itemdata}/>
  </div>
  </div>
  <div className='payment-child mt-5' ><Pricedetailes totalitemscost={itemdata.length>0 ?itemdata[0].price : 0}  delivarycharge={60}/>
</div>
   </div>
  </div>
  )
}

export default PaymentMain