import React, { Fragment } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Banner from '../../components/products/Banner'
import Productlist from '../../components/products/productList'

const HomePages = () => {
  return (
    <Fragment>
      
        <Header/>
        <Banner/>
       <Productlist/>
        <Footer/>
    </Fragment>
  )
}

export default HomePages