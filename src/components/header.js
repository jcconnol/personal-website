import React, { useState } from 'react';
import { Link } from 'gatsby';
import MobileNav from "../components/mobileNav"
import Resume from "./static/resume.pdf"
import "../styles/header.css"

export default function Header(props) {
  //make rounded edges on header buttons
  var title = props.title;
  var menuItems = props.menuItems;
  const [showMobileNav, setShowMobileNav] = useState(false);

  var logoLink = <Link className="hidden" to="/">JCC</Link>;
  if(title !== "index"){
    logoLink = <Link className="left" to="/">JCC</Link>
  }

  console.log(menuItems)
  
  return (
    <>
      <nav>
        <div className="header topnav" id="myTopnav">
          {logoLink}
          {
            menuItems.map(item => {
              return (
                <Link to={item.path}>{item.name}</Link>
              )
            })
          }
          <a href={Resume}>Resume</a>
          <div className="header-icon" onClick={() => setShowMobileNav(!showMobileNav)}>&#9776;</div>
        </div>
        <div className={showMobileNav ? "mobile-nav menu-section" : "hidden menu-section" }>
          <MobileNav menuItems={menuItems} />
        </div>
      </nav>
    </>
  )
}