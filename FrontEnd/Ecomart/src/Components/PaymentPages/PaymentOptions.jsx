import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import Capcha from './Capch';
function PaymentOptions() {
  const [cuurentstate,setcurrentstate] = useState('')
  const [catcha,setcaptha]=useState(false);
 const navigate=useNavigate()
  function set(e) {
    setcurrentstate(e.target.value);
    if(e.target.value == 'Cash On Delivery')
    {
        console.log('catjhjdhjh')
        setcaptha(prev=>!prev)
    }
    else{setcaptha(false)}
  }
  function pay() {
   if(cuurentstate == 'Pay Online')
   {
    axios.post('http://localhost:5000/payment')
   }
   else{
    navigate('/orderplaced')
   }
  }

  return (
    <div>
      <h6>Select Payment Method</h6>
      <div className='mt-4 p-2'>
        <input type='radio' name='radio' value='Cash On Delivery' onChange={set} />&ensp;Cash On Delivery
      </div>
      <div className='mt-4 p-2'>
        <input type='radio' name='radio' value='Pay Online' onChange={set} />&ensp;Pay Online
      </div>
     {catcha ? <Capcha pay={pay}/>:<button  onClick={pay} >Place Order</button>}
    </div>
  );
}

export default PaymentOptions;
