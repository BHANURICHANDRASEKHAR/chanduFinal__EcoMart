import React, { useState } from 'react'
import { Progress } from 'antd'
export default function CustomerReview() {
  return (
    <React.Fragment>
    <h4>CustomerReview</h4>

    <div className='reviewparent'>
    <div className='reviewchild'><Review/></div>
    <div className='reviewchild'><Progress percent={30} />
    <Progress percent={30} />
    <Progress percent={30} />
    <Progress percent={30} />
     <Progress percent={30} /></div>
    </div>
    </React.Fragment>
  )
}
const Review=()=>{
    const [review,setreview]=useState([])
    return(
       <div>
       {
        review ?<h1>hello here are the review</h1>:<h1>no review</h1>
       }
       </div>
    )
}
