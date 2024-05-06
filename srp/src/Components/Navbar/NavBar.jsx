import React from 'react'
import './NavBar.css'
import logo from './logo.png'
// import {Link } from 'react-router-dom'
function Nabvar() {
  return (
    <div className='container_Navbar'>
        <div className="logo_Navbar">
          
            <img className='logo' src={logo} alt=""/>
        </div>
        <p className="title">
             <b> Hand In Hand</b>
            </p>
            {/* <div className='right_btn'>
            <Link to ='/mainpage' target='_blank'> <button className="home_shortcut">
             Add Home Screen</button></Link>
             
            </div> */}
     </div>
  )
}

export default Nabvar