import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import "./Header.css";
const Header = () => {
   


    return (
        <header className="header">
      <div className="header-top">
        <div className="header-top__logo">
          <a href="/" className="header-logo">CarWorld</a>
        </div>
        <div className="header-top__navbar">
          <div className="header-top__navigation">
          </div>
         </div>
         <div className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/portfolio" className="navbar-item">Portfolio</a>
      <a href="/shop" className="navbar-item">Shop</a>
      <a href="/blog" className="navbar-item">Blog</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </div> 
      </div>

                 
        </header>
    );
};

export default Header;