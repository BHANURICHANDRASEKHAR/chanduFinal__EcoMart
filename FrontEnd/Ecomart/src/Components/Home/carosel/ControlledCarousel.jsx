import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import car1 from '../../assets/imgs/car1.jpg'
// import car2 from '../../assets/imgs/car2.jpg'

// import car3 from '../../assets/imgs/car2.jpg'
import AOS from 'aos'
import './carosel.css'
function ControlledCarousel() {
  useEffect(()=>{
    AOS.init();
  })
  return (
  <div className='container'>
  <Carousel data-bs-theme="dark">
   
  <Carousel.Item className='images'>
        <img
          className="d-block w-100"
          src="https://w0.peakpx.com/wallpaper/17/248/HD-wallpaper-fruits-fruit-kiwi-lemon-lime-strawberry.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='content'>
        <h2 style={{color:'white'}} data-aos='fade-down' data-aos-duration='1500' data-aos-delay='0'> Fresh Fruits  & 100% Organic</h2>
        <p style={{color:'white'}} data-aos='fade-up' data-aos-duration='1200' data-aos-delay='0'>Always Fresh Organic products for you</p>
        <button className='button' data-aos='fade-down' data-aos-duration='1200' data-aos-delay='1200'>Shop Now</button>
        
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
      <img
        className="d-block w-100"
        src="https://c4.wallpaperflare.com/wallpaper/978/326/380/meat-herbs-chop-steak-wallpaper-preview.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
      <div className='content'>
      <h2 style={{color:'white'}} data-aos='fade-down' data-aos-duration='1200' data-aos-delay='0'> Fresh Meat   & 100% Organic</h2>
      <p style={{color:'white'}} data-aos='fade-up' data-aos-duration='1200' data-aos-delay='0'>Always Fresh Organic products for you</p>
      <button className='button' data-aos='fade-down' data-aos-duration='1200' data-aos-delay='1200'>Shop Now</button></div>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel></div>  
  );
}

export default ControlledCarousel;
// <Carousel.Item>
// <img
//   className="d-block w-100"
//   src={car1}
//   alt="First slide"
// />
// <Carousel.Caption>
//   <h5>First slide label</h5>
//   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
// <img
//   className="d-block w-100"
//   src={car2}
//   alt="Second slide"
// />
// <Carousel.Caption>
//   <h5>Second slide label</h5>
//   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
// <img
//   className="d-block w-100"
//   src={car3}
//   alt="Third slide"
// />
// <Carousel.Caption>
//   <h5>Third slide label</h5>
//   <p>
//     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//   </p>
// </Carousel.Caption>
// </Carousel.Item>