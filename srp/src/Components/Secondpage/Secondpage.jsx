import React from 'react'
import Navbar from '../Navbar/NavBar'
import Mainpage  from '../Mainpage/Mainpage1'
import Footer from '../Footer/footer'
import Scrollpage  from '../Scrollpage/Slider'
// import { Link } from 'react-router-dom'
function Secondpage() {
  return (
    <div>
    <Navbar/>
    <Scrollpage/>
    <Mainpage/>
    <Footer/>
    </div>
  )
}

export default Secondpage