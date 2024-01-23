import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Images({items}) {
    const [img,setimg]=useState()
    useEffect(()=>{
        setimg(items.image)
        console.log(img)
    },[items.image])
    function setlink(imglink)
    {
        setimg(imglink)
    }
  return (
   <React.Fragment>
   <div>
   <img src={img} className='d-block h-200  w-100'/>
   </div>
   <div className='imageparent'>
   <img src={items.img1} className='imagechild' onClick={()=>{setlink(items.img1)}}/>
   <img src={items.img2}  className='imagechild' onClick={()=>{setlink(items.img2)}}/>
   <img src={items.img3} className='imagechild' onClick={()=>{setlink(items.img3)}}/>
   </div>
   </React.Fragment>
  )
}
export default Images;

