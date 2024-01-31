import React, { useEffect, useState } from 'react'
import rawdata from '../../../data/testdata'
import { useParams } from 'react-router-dom';
import DeepDetails from './DeepDetails';
import RelatedProducts from './RelatedProducts';
import './productdetails.css';
import Images from './Images';
import ProductDecription from './ProductDecription';
import CustomerReview from './CustomerReview';
import AddReview from './AddReview';
export default function ProductsDetails() {
const {id}=useParams()
const [itemdata,setitemdata]=useState([]);

useEffect(()=>{
  const cuurentitem=rawdata.filter((items)=>items.id==id)
  
       setitemdata(cuurentitem[0])
},[id]);
  return (
  <div className='container-fluid m-4 bg-light'>
  <div className='parent'>
  <div className='child'><Images items={itemdata}/></div>
  <div className='child'><DeepDetails items={itemdata}/></div>
  <div className='child'><RelatedProducts/></div>
  </div><hr/>
  <ProductDecription/>
  <CustomerReview />
  <AddReview items={itemdata}/>
  </div>
  )
}
