import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
export default function Userlogo() {
  return (
<React.Fragment>
<div className='d-flex' style={{background:'white',borderRadius:'5px',marginBottom:'10px'}}>
<Avatar size={50} src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg' className='m-3'/>
<p className='mt-3' style={{marginLeft:'10px'}}><b> Hello Username<br/>Welcome to Ecomart</b></p>
<br/>
</div>
</React.Fragment>  )
}
