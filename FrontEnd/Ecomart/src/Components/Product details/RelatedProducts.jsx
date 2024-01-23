import React, { useState } from 'react'
import rawdata from '../../../data/testdata'
import { Link } from 'react-router-dom';
function RelatedProducts() {
var data=[]
const randomIndex = Math.floor(Math.random() * 5);
     rawdata.forEach((items,index)=>{
        if(index%randomIndex==0 && data.length<4)
        {
          data.push(items)
        }
    });
  console.log('related data is the',data)
  return (
   <div className='container'><p style={{fontWeight:'600'}}>You may also Know...</p>
   <div className='relatedproductparent'>
   <div className='relatedproductchild '>
   {
    data &&data.map((items,index)=>{
        return(<Products key={ index } image={items.image} name={items.name} price={items.price} id={items.id}></Products>)
    })
   }
   </div>
   </div>
   </div>
  )
}

export default RelatedProducts
const Products=({image,price,name,id})=>{
    return(<div className='cartitem'>
    <img src={image}/><Link to={`/productdetails/${id}`}>
   <p>{name}</p></Link>
    <p>₹{price}</p>
        </div>)
}