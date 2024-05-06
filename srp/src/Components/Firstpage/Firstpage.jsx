import React from 'react'
import Navbar from '../Navbar/NavBar'
import Homepage from '../Homepage/Homepage'
import MiddlePage from '../MiddlePage/middlepage'
import Footer from '../Footer/footer'
// import { Link } from 'react-router-dom'
function Firstpage() {
  return (
    <div>
    <Navbar/>
    <Homepage/>
    <MiddlePage/>
    <Footer/>
    </div>
    
  )
}

export default Firstpage;