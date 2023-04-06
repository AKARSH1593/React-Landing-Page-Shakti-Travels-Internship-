import React, { Component } from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
            <a href="#"><img src={logo} alt='My Image' height="53"/></a>
        </div>
        <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#package">Package</a>
            <a href="#contact">Contact</a>
            <button>Book Now</button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
