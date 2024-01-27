import React, { useEffect, useState } from 'react'
function OrderSummery({itemdata}) {
  console.log(itemdata)
  const [date,setdate]=useState('')
  useEffect(()=>{
const todaydate=new Date();
setdate(todaydate.toDateString())
  },[])
  return (
    <div className="container">
  {
    itemdata.map((item,index)=>{
     return( <div className="row" key={index}>
     <div className="col-sm">
       <img src={item.img1}/>
     </div>
     <div className="col-sm">
      <h6>{item.name} 500 Grams</h6>
      <p>Seller:Chandu</p>
      <p>Price:<del>₹{item.price+30}</del>&ensp;<b>₹{item.price}</b></p>
     </div>
     <div className="col-sm">
      <h6>Delivery By {date} </h6>
     </div>
   </div>)
    })
  }
</div>
  )
}

export default OrderSummery