import React,{useEffect} from 'react'
import AOS from 'aos';
import { Button,Result } from 'antd'
import { NavLink } from 'react-router-dom'

export default function NoPageFound(pro) {
  useEffect(()=>{
    AOS.init();
})
 const {status,title,subtitle}=pro;
  return (
    <Result
   data-aos='fade-up'
    data-aos-duration='900'
    data-aos-delay=''
    data-aos-easing='ease-in-out'
    status={status}
    title={title}
    subTitle={subtitle}
    extra={<NavLink to='/'><Button type="primary">Back Home</Button></NavLink>}
  />
  )
}
