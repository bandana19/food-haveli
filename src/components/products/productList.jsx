
import React, { Fragment } from "react";

const Productlist = () => {

  // const settings = {
  //   dots: true,
  //   speed: 1400,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  // }

  return (
    <Fragment>
      <div className="row border main-box">
       
        <div className="col border">
          <p className="offer">50% Off</p>
          <img className="h-80" src="/img/you.jpg" alt="" />
          <h1 className="dress-name">Womane Dresses</h1>
          <p className="price">Price : $200</p>
          <span className="old-pri">$9999</span><br/>
          <button className="btn btn-primary  cart-btn">Add to Cart</button>
          <span><i class="fa fa-heart-o  like-heart"></i></span>
        </div>

        <div className="col border">
        <p className="offer">50% Off</p>
          <img className="h-80" src="/img/you.jpg" alt="" />
          <h1  className="dress-name">Womane Dresses</h1>
          <p className="price">Price : $500</p>
          <span className="old-pri">$9900</span><br/>
          <button className="btn btn-primary  cart-btn">Add to Cart</button>
          <span><i class="fa fa-heart-o  like-heart"></i></span>
        </div>

        <div className="col border">
        <p className="offer">50% Off</p>
          <img className="h-80" src="/img/you.jpg" alt="" />
          <h1 className="dress-name">Womane Dresses</h1>
          <p className="price">Price : $600</p>
          <span className="old-pri">$809</span><br/>
          <button className="btn btn-primary  cart-btn">Add to Cart</button>
          <span><i class="fa fa-heart-o  like-heart"></i></span>
        </div>

        <div className="col border">
        <p className="offer">50% Off</p>
          <img className="h-80" src="/img/you.jpg" alt="" />
          <h1 className="dress-name">Womane Dresses</h1>
          <p className="price">Price : $1200</p>
          <span className="old-pri">$20099</span><br/>
          <button className="btn btn-primary  cart-btn">Add to Cart</button>
          <span><i class="fa fa-heart-o  like-heart"></i></span>
        </div>
     
      </div>
    </Fragment>
  );
};

export default Productlist;
