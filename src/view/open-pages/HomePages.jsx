import React, { Fragment } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import ProductCard from '../../components/products/ProductCard'
import Banner from '../../components/products/Banner'

const HomePages = () => {
  return (
    <Fragment>
      
        <Header/>
        <Banner/><br/>
        <div className="row " >
       {/* <ProductCard/>
       <ProductCard/>
       <ProductCard/> */}
      </div>
     
    
    
        <Footer/>
    </Fragment>
  )
}

export default HomePages