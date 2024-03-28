import React, { Fragment, useState } from 'react'

const Footer = () => {
  const [openBar,setOpenBar]=useState(false)
  return (
 <Fragment>
   <div className='footer'>
        <h1 className='footer-heading'>Reponsive Footer Design (Flexbox)</h1>
        <h1 className='useing-cour'>USING HTML AND CSS</h1>
        <div className='footer-app'>
            <h1 className='titel'>CodingLab</h1>
            <ul className='image-box'>
                <li className='fec'><i class='fa fa-facebook fe-ico'></i></li>
                <li className='t-icon'><img className='twitter' src='/img/twitter.webp' alt=''/></li>
                <li className='ins-icon'><img  src='/img/insta.webp' alt=""/></li>
                <li className='ni-icon'><img src='/img/in-logo.png' alt=""/></li>
                <li className='yo-icon'><img src='/img/search.jpg' alt=""/></li>

                <li><i class="fa fa-align-justify minu-bar "
                onClick={()=>setOpenBar(true)}></i></li>
             {openBar &&   
             <div className='app-box'>
                <i class="fa fa-close icons"
                onClick={()=>setOpenBar(false)}></i>
                <li><i class='fa fa-facebook image-1'></i></li>
                <li><img className='image-2' src='/img/twitter.webp' alt=""/></li>
                <li><img className='image-3' src='/img/insta.webp' alt=""/></li>
                <li className='image-in'><img className='image-4' src='/img/in-logo.png' alt=""/></li>
                </div>
                }
            </ul>
            <hr className='footer-hrow'/>
          
            <div className='footer-des'>
            <ul className='company'>
                <li><h2 className='list-title'>Company</h2></li>
                <li className='h-list'>Home</li>
                <li className='h-list'>Contact us</li>
                <li className='h-list'>About us</li>
                <li className='h-list'>Get started</li>
            </ul>
            <ul className='design'>
              <li><h2 className='seriv'>Services</h2></li>
              <li className='app-des'>App design</li>
              <li >Web design</li>
              <li className='logo-des'>Logo design</li>
              <li className='bonner'>Bonner design</li>
            </ul>

            <ul className='account-list'>
              <li><h2 className='account'>Account</h2></li>
              <li className='profile'>Profile</li>
              <li  className='profile'>My account</li>
              <li  className='profile'>Prefrences</li>
              <li  className='profile'>Purchase</li>
            </ul>

            <ul className='courses-list'>
              <li><h1 className='courses'>Courses</h1></li>
              <li className='profile'>HTML & CSS</li>
              <li className='profile'>JavaScript</li>
              <li className='profile'>Photography</li>
              <li className='profile'>Photoshop</li>
            </ul>
            <ul>
              <li><h2 className='Subs-list'>Subscribe</h2></li>
              <li><input className='email-box' type='text' placeholder='Enter your email'/></li>
              <li><button className='subscribe-button'>Subscribe</button></li>
            </ul>
            </div>
        </div>
       
      </div>
 </Fragment>
  )
}

export default Footer