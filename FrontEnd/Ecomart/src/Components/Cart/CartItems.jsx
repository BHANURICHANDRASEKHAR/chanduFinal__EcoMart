import React from 'react'
import { Popconfirm } from 'antd';
import Cartbutton1 from './Cartbutton1'; //increment and dec button
import reacticons from '../../icons';

export default function CartItems({item,confirm}) {
  return (
    <React.Fragment>     {
        item.map((e,index)=>{
         const {productname,quantity,price,productimg,id} = e;
      
          return(
        <div className='cartitem' key={index}>
        <img src={productimg} />
        <h5>{productname} Per-500 Grams</h5>
        <p>₹{price}</p>
       <Cartbutton1 item={e}/>
        <p>Total Price:<b>₹{price*quantity}</b></p>
   <Popconfirm
   title="Delete the Item"
   description="Are you sure to delete this Item?"
   onConfirm={()=>{confirm(id)}}
   style={{width:'100px'}}
    okText="Yes"
    cancelText="No"
   placement="leftBottom">
   <reacticons.delete style={{height:'30px',width:'40px',position:'absolute',right:'37%',marginTop:'30px',cursor:'pointer' }} />
   </Popconfirm> 
        </div>
          )
        })
      }</React.Fragment>
  )
}
