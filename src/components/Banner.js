import React from 'react'

import Banner1 from "./../Banner1.jpg"
import banner2 from "./../banner2.jpg"

const Banner = () => {
  return (
    <>
    
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" data-interval="2000">
    <div className="carousel-item active">
      <img className="d-block w-100" src={banner2} alt="First slide"/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img className="d-block w-100" src={Banner1} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={banner2} alt="Third slide"/>
    </div>
  </div>
</div>

    </>
  )
}

export default Banner