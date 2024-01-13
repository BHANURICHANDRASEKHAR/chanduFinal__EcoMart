import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Empty from './Empty';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import Cart1 from './Cart1';
import './cart.css'
import ErrorBoundry from '../ErrorBoundry';
export default function Cart() {
const data=useSelector((state)=>state.cartslice)
const count=data.itemslist.length;
  const [emptyCart, setEmptyCart] = useState(false);
useEffect(()=>{
  if(count ==0 && emptyCart==false )
  {
    setEmptyCart(true)
  }
})
  return (

<div className='container '>
{emptyCart ? <Empty /> 
: 
<div className='row w-100 mt-5'> <Cart1 /></div>

}
</div> 
  );
}
