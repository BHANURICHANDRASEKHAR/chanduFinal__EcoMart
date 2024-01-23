import React from 'react'
import CustomerReview from './CustomerReview'
const lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pellentesque diam, at efficitur sem. Aliquam tempor euismod neque. Vestibulum sed augue sed neque ultrices varius. Mauris sodales fringilla dolor, sed varius dui lobortis vitae. Duis vitae arcu in mi volutpat ornare interdum eget purus. Sed eget fringilla mauris, sit amet dapibus metus. Maecenas rhoncus urna in mi viverra scelerisque. Sed accumsan hendrerit tellus vel viverra. Mauris sem urna, laoreet sed odio eget, tempus dignissim felis.Aliquam ac tellus efficitur, luctus leo et, condimentum felis. Aliquam vel lacus at est vestibulum dictum. Pellentesque fringilla urna id tellus aliquet ullamcorper.'
export default function ProductDecription() {
  return (
    <div className='mt-4'><h5 style={{color:'green'}}>Product Description</h5>
    <p style={{fontSize:'16px'}} >{lorem}</p>
    <div className='mt-3'>
    <img src='https://el3.thembaydev.com/greenmart_fresh/wp-content/uploads/2021/08/single-product.jpg'/></div><hr/>
  
    </div>

  )
}
