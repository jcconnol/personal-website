import React, { useState } from 'react';
import { Link } from 'gatsby';
import MobileNav from "../components/mobileNav"
import Resume from "./static/resume.pdf"
import "../styles/header.css"

export default function Header(props) {
  //make rounded edges on header buttons
  var title = props.title;

  var menuItems = [
    {name: 'About', path: '/about/'},
    {name: 'Experience', path: '/experience/'},
    {name: 'Work', path: '/work/'},
    {name: 'Contact', path: '/contact/'},
    {name: 'Blog', path: '/blog/'}
  ];
  
  const [showMobileNav, setShowMobileNav] = useState(false);

  var backgroundColor = "white";
  var textColor = "black";
  var logoLink = <Link className="left" to="/" style={{color: "black"}}>JCC</Link>;

  if(title !== "index"){
    logoLink = <Link className="left" to="/" style={{color: "white"}}>JCC</Link>
    backgroundColor = "black";
    textColor = "white";
  }
  
  return (
    <>
      <nav style={{
        backgroundColor: backgroundColor
      }}>
        <div className="header topnav" id="myTopnav" style={{
          color: textColor,
          backgroundColor: backgroundColor
        }}>
          {logoLink}
          {
            menuItems.map(item => {
              return (
                <Link to={item.path} style={{
                  color: textColor
                }}>{item.name}</Link>
              )
            })
          }
          <a href={Resume} style={{
            color: textColor, 
            onHover:{
              backgroundColor: "blue",
              color: "green"
              }}}>Resume</a>
          <div className="header-icon" onClick={() => setShowMobileNav(!showMobileNav)}>&#9776;</div>
        </div>
        <div className={showMobileNav ? "mobile-nav menu-section" : "hidden menu-section" }>
          <MobileNav menuItems={menuItems} />
        </div>
      </nav>
    </>
  )
}