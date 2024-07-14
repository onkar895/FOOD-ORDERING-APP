import React from 'react'
import Restaurants from './Restaurants'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'

const Menu = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Restaurants />
        <Footer/>
      </div>
    </>
  )
}

export default Menu
