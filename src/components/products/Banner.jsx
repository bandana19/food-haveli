
import React, { Fragment } from 'react'
import Slider from 'react-slick'

const Banner = () => {
   const settings = {
    dots: false,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
   <Fragment>
  <div className=" row banner slider border">
    <div className='col-sm-6  banner-list border'>
        
      <p className='item-det'>fresh and organic</p>
      <h1 className='off'>Up to 50% Off</h1>
     <button className='order-button'>Order now</button>
     <h1 className='title'>Fresh Vegetable</h1>
    </div> 
   


<div className='col-sm-6   background' >
 <Slider {...settings}>
  <img src='/img/v.jpg' alt="" style={{width: '70%', height: '200px'}}/>
  <img src='/img/simla.jpg' alt="" style={{width: '70%', height: '200px'}}/>
  <img src='/img/multipls-veg.jpg' alt=""  style={{width: '70%', height: '200px'}}/>
  </Slider> 
  </div>

    </div>

   </Fragment>
  

  )
}

export default Banner