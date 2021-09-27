import React, { useState } from 'react';
import { Link } from 'gatsby'
import MobileNav from "../components/mobileNav"
import MenuItems from "../components/menuItems"
import "../styles/header.css"

function Header(props) {

  const [showMobileNav, setShowMobileNav] = useState(false);

  var pageName = props.pageName;
  var logoLink = <Link className="hidden" to="/">JCC</Link>;
  if(pageName !== "index"){
    logoLink = <Link className="left" to="/">JCC</Link>
  }
  
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <nav>
        <div className="header topnav" id="myTopnav">
          {logoLink}
          {
            MenuItems.map(item => {
              return (
                <Link to={item.path} href={item.path}>{item.title}</Link>
              )
            })
          }
          
          <div className="header-icon" onClick={() => setShowMobileNav(!showMobileNav)}>&#9776;</div>
        </div>
        <div className={showMobileNav ? "mobile-nav" : "hidden" }>
          <MobileNav />
        </div>
      </nav>
    </>
  )
}

export default Header;