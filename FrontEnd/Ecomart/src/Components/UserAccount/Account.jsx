import React,{useState,useEffect} from 'react'
import Left from './left/Left'
import './useraccount.css'
import './common.css'
import Faq from './Right/Faq'
import { useDispatch,useSelector } from 'react-redux' //use dispatch fnction 
import { userdetailsActions } from '../../../Redux-store/Centralstore/accountslice'
import { Outlet,useOutlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import fetchdatafromdatabase from '../../../fetchfunction'
export default function Account() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
    fetchdatafromdatabase(...['get', 'http://localhost:5000/user', dispatch, navigate]);
    console.log('page rendered and data featched')
  },[])
  const isOutletRendering = useOutlet();
  return (
    <div className="container-fluid m-4 ">
    <div className='grid1'>
    <div className='grid1-itmes'><Left /></div>
    <div className='grid1-itmes bg-white rounded-2'>
    {isOutletRendering ? null : <Faq/>}
    <Outlet/>
    </div>

    </div>
</div>
  )
}
