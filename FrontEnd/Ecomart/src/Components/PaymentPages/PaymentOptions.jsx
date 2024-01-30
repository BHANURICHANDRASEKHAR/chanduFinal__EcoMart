import React, { useState } from 'react';
import pay from './pay';
import { useNavigate } from 'react-router-dom';
import Capcha from './Capch';
function PaymentOptions({itemdata}) {
  const navigate=useNavigate();
  const [cuurentstate,setcurrentstate] = useState('')
  const [catcha,setcaptha]=useState(false);
  function set(e) {
    setcurrentstate(e.target.value);
    if(e.target.value == 'Cash On Delivery')
    {
        console.log('catjhjdhjh')
        setcaptha(prev=>!prev)
    }
    else{setcaptha(false)}
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
     {catcha ? <Capcha pay={pay} cuurentstate={cuurentstate} itemdata={itemdata} navigate={navigate}/>:<button  onClick={()=>pay(cuurentstate,itemdata,navigate)} >Place Order</button>}
    </div>
  );
}

export default PaymentOptions;
