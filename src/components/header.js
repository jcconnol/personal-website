import React, { useState } from 'react';
import { Link } from 'gatsby'
import MobileNav from "../components/mobileNav"
import MenuItems from "../components/menuItems"
import Resume from "./static/resume.pdf"
import "../styles/header.css"

function Header(props) {
  //make rounded edges on header buttons
  const [showMobileNav, setShowMobileNav] = useState(false);

<<<<<<< HEAD
  if(title !== "index"){
    backgroundColor = "black";
    textColor = "white";
  }


  //change only one on hover
  var buttonStyles = [];
  for(var i = 0; i < 9; i++){
    buttonStyles.push({ color: textColor, backgroundColor: backgroundColor});
  }

  if(hovered){
    if(buttonStyles[hovered].backgroundColor === "black"){
      buttonStyles[hovered].backgroundColor = "white"
      buttonStyles[hovered].color = "black"
    }
    else{
      buttonStyles[hovered].backgroundColor = "black"
      buttonStyles[hovered].color = "white"
    }
=======
  var pageName = props.pageName;
  var logoLink = <Link className="hidden" to="/">JCC</Link>;
  if(pageName !== "index"){
    logoLink = <Link className="left" to="/">JCC</Link>
>>>>>>> 4a7d173dde76fcd61c4e462ad359b58de1ea0738
  }
  
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
          <a href={Resume}>Resume</a>
          <div className="header-icon" onClick={() => setShowMobileNav(!showMobileNav)}>&#9776;</div>
        </div>
        <div className={showMobileNav ? "mobile-nav menu-section" : "hidden menu-section" }>
          <MobileNav />
        </div>
      </nav>
    </>
  )
}

export default Header;