import React, { useEffect, useState } from 'react'
import rawdata from '../../../data/testdata'
import { useParams,useLocation } from 'react-router-dom';
import DeepDetails from './DeepDetails';
import './productdetails.css';
import Images from './Images';
console.log(rawdata)
export default function ProductsDetails() {
const {id}=useParams()
const [itemdata,setitemdata]=useState([]);
useEffect(()=>{
  console.log(id)
  const cuurentitem=rawdata.filter((items)=>items.id==id)
  console.log(cuurentitem)
  // const cuurentitem=rawdata.find((items)=>items.id==id)
   setitemdata(cuurentitem[0])
},[]);
  return (
  <div className='container m-5'>
  <div className='parent'>
  <div className='child'><Images items={itemdata}/></div>
  <div className='child'><DeepDetails items={itemdata}/></div>
  <div className='child'>hello</div>
  </div>
  </div>
  )
}
