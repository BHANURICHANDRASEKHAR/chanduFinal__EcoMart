import React from 'react'
import img from '../../assets/imgs/weareworkonit.jpg'
function Workingonit() {
  return (
    <div className='conatiner' style={{position:'absolute',top:'30%',left:'40%'}}  data-aos="fade-down"
    data-aos-duration="900" data-aos-delay='600' data-aos-easing='ease-in-out'>
    <div className='row'>
    <img src={img} style={{objectFit:'contain',height:'300px',width:'500px'}}/><br/>
    </div><br/>
    <div className='row' style={{textAlign:'center'}}>
    <h2>We Are Working On It.......</h2>
    </div>
    </div>
  )
}

export default Workingonit;