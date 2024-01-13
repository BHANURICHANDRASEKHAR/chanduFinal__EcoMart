import React, { useState } from 'react';
import useFunction from '../customs hooks/useFunction';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../Redux-store/Centralstore/cart-slice';
import './cart.css'
import { Progress } from 'antd';
export default function Freeshipping() {
  const [addItems, removeItems,cartdata] = useFunction();
  const total = cartdata.totalprice;
  const deliverycharge = 60;
const dispatch=useDispatch();
  const [cong, setCong] = useState(true);
  let progresstotal = Math.min(Math.floor(total / 15), 100);
  let spend = progresstotal < 100 ? 1500 - total : 0;

  if (progresstotal == 100) {
    if(cong){
      dispatch(cartActions.getdelivary())
      setCong(false);
      spend = 0;
    }
  }
  else{
    dispatch(cartActions.setdelivary())

  }

  return (
    <div className='container mt-5 ' >
      <div className='row'>
       
      <div className="progress w-75" style={{ height: '20px' }}>
      <div className="progress-bar rounded-5 bg-success" role="progressbar" style={{ width: `${progresstotal}%` }} aria-valuenow={progresstotal} aria-valuemin="0" aria-valuemax="100">
        {progresstotal}%
      </div>
    </div>
            
        {cong ? (
          <div className='progress-text mt-5'>
            <p style={{ textShadow: '1px black' }}>Spend <b style={{ color: 'green', fontSize: '22px' }}>₹{spend}</b> more to reach <b>FREE SHIPPING!</b></p>
            <p>to add more products to your cart and receive free shipping for orders ₹1,500 and above.</p>
          </div>
        ) : (
          <div className='progress-text mt-5'>
            <p><i>Congratulations! You get</i> <b>FREE SHIPPING!</b> with your order greater than ₹1,500</p>
          </div>
        )}
      </div>
    </div>
  );
}
