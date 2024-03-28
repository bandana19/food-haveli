import React, { Fragment, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
  {openModal && <div className="header-modal-box">
    <div className="side-bar-box">
          <i  class="fa fa-close header-close-icons" onClick={()=>setOpenModal(false)}></i><br/>
          <ul>
          <li className="box-item-list-1">HOME</li>
          <li  className="box-item-list-2">ABOUT</li>
          <li className="box-item-list-2">MENU</li>
          <li  className="box-item-list-2">SPECIALS</li>
          <li  className="box-item-list-2">PORTFOLIO</li>
          <li  className="box-item-list-2">REGISTER</li>
          <li  className="box-item-list-2">CONTACT</li>
        </ul>
        </div>
      </div>}

     <div className=" row header">
      <div className=" col-3 header-list  ">
      <h1 className="logo-title">FOOD-HAVELI</h1>
     
      </div>
      <div className="col-5 col-sm-6   ">
      <input className="search-input" type='text' placeholder="Search Items....."/>
     <button className="search-button"> <i class='fa fa-search padding-3'></i>Search</button>
      </div>
      <div className="col-2 col-sm-1 ">
      <p className="like-arrow"><i class="fa fa-heart-o  f-20"></i><div className="like-circle"></div></p>


      </div>
      <div className="col-2 ">
     <p className="cart-arrow"><i class="fa fa-shopping-cart f-27"></i><div className="cart-circle"><span>1</span></div></p>
     <i   class="fa fa-align-justify menu-just-icons "
     onClick={()=>setOpenModal(true)}></i>
      </div>
     </div>


    

     <div className=" row header-item-list">
      <div className="col-3"><li className="list-item-4"><i class="fa fa-home f-10"></i><Link to={'/'}>HOME</Link></li></div>
      <div className="col-9">
      <ul className="item-list-nav">
        <li className="list-item-5">ABOUT</li>
        <li className="list-item-5">MENU</li>
        <li className="list-item-5">SPECIALS</li>
        <li className="list-item-5">PORTFOLIO</li>
        <li className="list-item-5"><Link to={'/register'}>REGISTER</Link></li>
        <li className="list-item-5">CONTACT</li>
      </ul>
      </div>
     </div>

    </Fragment>
  );
};

export default Header;
