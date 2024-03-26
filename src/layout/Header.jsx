import React, { Fragment, useState } from "react";
import "../App.css";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      {openModal && (
        <div className="box">
          <div className="box-2">
            <i
              class="fa fa-close close-icons"
              onClick={() => setOpenModal(false)}
            ></i>
           <ul className="box-list">
            <li className="about">HOME</li>
            <li className="about">ABOUT</li>
            <li className="about">PORTFOLIO</li>
            <li className="about">PAGES</li>
            <li className="about">BLOG</li>
            <li className="about">CONTACT</li>
            </ul>
          </div>
        </div>
      )}
      <div className="header">
        <h1>Header</h1>
         <div >
        <input className="search-input" type='text' placeholder="Search products....."/>
        <button className="search-button">search</button>
        </div>
        <nav className="nav-bar">
          <ul>
            <li className="home">HOME</li>
            <li className="list-1">ABOUT</li>
            <li className="list-2">PORTFOLIO</li>
            <li className="list-3">PAGES</li>
            <li className="list-4">BLOG</li>
            <li className="list-5">CONTACT</li>
            <i
              class="fa fa-align-justify icons "
              onClick={() => setOpenModal(true)}
            ></i>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
