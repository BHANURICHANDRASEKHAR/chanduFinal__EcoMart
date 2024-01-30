import React from 'react'
import { Collapse } from "antd";
import UserAddress from "../UserAccount/Right/UserAddress";
import OrderSummery from './OrderSummery'
import PaymentOptions from "./PaymentOptions";
function PaymentFaq({itemdata}) {
    const Item1=(
        <div  className='container'>
        <UserAddress/>
       </div>
    )
    const Item2=(
        <div  className='container'>
        <OrderSummery itemdata={itemdata}/>
       </div>
    )
    const Item3=(
        <div  className='container'>
        <PaymentOptions itemdata={itemdata}/>
       </div>
    )
    const data= [
        {
          key: '1',
          label:<h3 className='payment-header'>Address</h3>,
          children:Item1
        },
        {
            key: '2',
            label:<h3 className='payment-header'>Order Summery</h3>,
            children:Item2
          },
          {
            key: '3',
            label:<h3 className='payment-header'>Payment Options</h3>,
            children:Item3
          },
      ];
  return (
    <Collapse className='mt-5' items={data} bordered={false} defaultActiveKey={['2']} />  

  )
}

export default PaymentFaq