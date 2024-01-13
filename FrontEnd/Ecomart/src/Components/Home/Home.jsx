import React from 'react'
import ControlledCarousel from './carosel/ControlledCarousel'
import Features from './features/Features'
import Footer from '../Footer'
function Home() {
  console.log('home page')
  return (
    <div>
  <ControlledCarousel/>
  <Features/>
  <Footer/>
    </div>
  )
}

export default Home