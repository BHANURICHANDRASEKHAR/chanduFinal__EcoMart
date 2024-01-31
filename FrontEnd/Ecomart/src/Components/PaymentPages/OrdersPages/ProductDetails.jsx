import React from 'react'
import reacticons from '../../../icons'
import { Link } from 'react-router-dom'
import { Steps } from 'antd'
export default function ProductDetails({productdata}) {
    
  return (
    <div className='container rounded-2 mt-2 p-3'  style={{background:"white"}}>
    <div className='row'>
   <div className='col-sm'>
  <Productdata productdata={productdata}/>
   </div>
    <div className='col-sm'>
    <h5>{<reacticons.delivary className='text-primary' style={{fontSize:'26px'}}/>} Delivary By {productdata.delivarydate}</h5>
    <Stepsprocess/>
    </div>
    <div className='col-sm'>
   <Link to={`/cancel-order/${productdata.order_id}`} style={{textDecoration:"none"}}> <h6 style={{fontSize:'20px'}}>{<reacticons.cancel className='text-danger' />} Cancel</h6></Link>
    </div>
    </div>
    </div>
  )
}
const Stepsprocess=()=>{
    return(
     <div className='mt-5'>     <Steps size='small'
     current={1}
     items={[
       {
         title: 'Finished',
         description:'Order Placed'
       },
       {
         title: 'In Progress',
         description:'Shipment'
         
       },
       {
         title: 'Waiting',
         description:'Delivery'
       },
     ]}
   /></div>
    )
}
export const Productdata=({productdata})=>{
    return(
        <div className='row'><div className='col-sm'><img  className='w-90' src={productdata.productimage}/></div>
        <div className='col-sm'><h5 className='m-2'>{productdata.productname}</h5>
        <h6 className='m-2'>Price:₹{productdata.price}</h6>
        <h6 className='m-2'>Quantity: 500grams</h6>
        <h6 className='m-2'>Seller:Chandu</h6></div></div>
    )
}