import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
import { useSelector } from 'react-redux';
export default function Userlogo() {
  const userdata=useSelector((state)=>state.userdetaileslice.userdetails);
  const username = userdata.length > 0 ? userdata[0].name : '';
  return (
<React.Fragment>
<div className='d-flex' style={{background:'white',borderRadius:'5px',marginBottom:'10px'}}>
<div className='m-3'><LogoAvatar size='50' /></div>
<p className='mt-3' style={{marginLeft:'10px'}}><b> Hello {username}<br/>Welcome to Ecomart</b></p>
<br/>
</div>
</React.Fragment>  )
}
export const LogoAvatar=({size})=>{
  return(<Avatar size={size} src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg' />
  )
}
