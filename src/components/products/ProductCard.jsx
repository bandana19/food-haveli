import React, { Fragment } from 'react'
import Slider from 'react-slick'

const ProductCard = () => {
  const setting={
    dots:false,
    speed:400,
    Infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    autoPlay:true,
    autoPlaySpeed:1400

  }

  return (
    <Fragment>
      {/* <Slider {...setting}> */}
    <div className="col-md-3 col-sm-6 my-images mt-4">
    <div className="product-grid">
      <div className="product-image">
      <a href="#-" className="image">
          <img className="pic-1" src="/img/you.jpg" alt=" " />
        
        </a>
        <span className="product-hot-label">hot</span>
        <ul className="product-links">
          <li>
            <a href="#-" data-tip="Add to Wishlist">
              <i class="fa fa-heart-o"></i>
            </a>
          </li>
          <li>
            <a href="#-" data-tip="Compare">
              <i className="fa fa-random"></i>
            </a>
          </li>
          <li>
            <a href="#-" data-tip="Quick View">
              <i className="fa fa-search"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="product-content">
        <a className="add-to-cart" href="#-">
          <i class="fa fa-plus"></i>Add to cart
        </a>
        <h3 className="title-name">
          <a href="#-">Men's Jacket</a>
        </h3>
        <div className="price">$75.99</div>
      </div>
    </div>
  </div>
  {/* </Slider> */}

</Fragment>
  )
}

export default ProductCard