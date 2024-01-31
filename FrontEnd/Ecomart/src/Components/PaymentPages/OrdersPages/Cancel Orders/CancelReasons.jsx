import React,{useState,useEffect, useRef} from 'react';
import { Productdata } from '../ProductDetails';
import { Cascader, Collapse } from 'antd';
import { notifyerror } from '../../../../../tostisy';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import getorderdata from '../../getorders';
import cancelorder from './cancel_orders'
import cascaderdata,{datavalidation} from './cascaderdata';
import { useNavigate } from 'react-router-dom';
import './main.css'
export default function CancelReasons() {
    const id=useParams();

    const [productdata,setdata]=useState([]);
    const [count,setcount]=useState(['1']);
    const [error,setError]=useState('')
    var produt=productdata.length>0 && productdata[0];
    const [reasons,setreasons]=useState({
        reason:'',
        feedback:'',
       })
   
 useEffect(()=>{
    async function data()
    {
      const receivedata= await getorderdata(id.id);
      setdata(receivedata)
    }
    data();
 },[])
  function handlechange(e){
    setreasons({...reasons,[e.target.name]:e.target.value})
  }
  function calltonext()
  {
  const data= datavalidation(reasons,setError);
  if(!data)
  {
    notifyerror(toast,error)
  }
  else{
  setcount(['2']);
  }
  }

    const Item1=(
        <Reasons reasons={reasons} handlechange={handlechange} setreasons={setreasons} calltonext={calltonext}/>
    )
    const Item2=(
        <Conditions reasons={reasons} productdata={produt}/>
    )
    const data= [
        {
          key: '1',
          label:<h3 className='payment-header'>1 EASY CANCELLATION</h3>,
          children:Item1
        },
        {
            key: '2',
            label:<h3 className='payment-header'>2 CANCELLATION CONDITIONS</h3>,
            children:Item2
          },
    
      ];
  return (
    <div className='container mt-5 cancel-parent'>
    <Collapse items={data} bordered={false} defaultActiveKey={['1']} activeKey={count} /><div style={{background:'white',height:'200px',padding:'9px'}}><Productdata productdata={produt}/></div></div>
  )
}
const Reasons=({reasons,handlechange,setreasons,calltonext})=>{

 function check(value)
 {
    setreasons({...reasons,reason:value[0]})
 }
    return(
        <div className='container mt-3'>
        <div className='row m-2'>
          <div className='col-sm'>
          <h6>Reasons for Cancellation  <span className='text-danger'>*</span></h6>
        </div>
          <div className='col-sm'>
          <div className='form-group w-100'>
          <Cascader
          options={cascaderdata}
          placeholder="Select reason"
          name="reason"
          onChange={check}
        />
        </div>
          </div>
          </div>
          <div className='row m-2'>
          <div className='col-sm'>
          <h6>Comments  <span className='text-danger'>*</span></h6>
        </div>
          <div className='col-sm'>
          <div className='form-group w-100'>
            
              <input
                type='text'
                className='form-control'
                name='feedback'
                value={reasons.feedback}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
<div className='container d-flex justify-content-end '><button className='btn btn-outline-primary' onClick={calltonext}>Continue</button>
</div>
      </div>
      
    )
}
const Conditions=({reasons,productdata})=>{
  const navigate=useNavigate();
  const check=useRef();
  const [flag,setflag]=useState(false);
 function checkhandle()
 {
  if(check.current.checked)
  {
    setflag(true)
  }
  else{
    setflag(false)
  }
 }
 function cancel()
 {
 cancelorder(reasons,productdata,navigate)
 }
    return(
        <div className='container'>
      <ul>
    {
        cascaderdata.map((items,index)=>{
            return(
                <li key={index}>{index+1}&ensp;{items.label}</li>
            )
        })
    }
   </ul>
   <input type='checkbox' onChange={checkhandle} ref={check}/> I Agree the Conditions
    {flag &&    <div className='container d-flex justify-content-end ' data-aos='fade-up '><button className='btn btn-outline-success' onClick={cancel}>Cancel Order</button></div>
  }
        </div>
    )
}