import React, { useState } from 'react';
import { Link } from 'gatsby';
import MobileNav from "../components/mobileNav"
import Resume from "./static/resume.pdf"
import "../styles/header.css"

export default function Header(props) {
  //make rounded edges on header buttons
  var title = props.title;

  var menuItems = [
    {name: 'About', path: '/about'},
    {name: 'Experience', path: '/experience'},
    {name: 'Work', path: '/work'},
    {name: 'Contact', path: '/contact'},
    {name: 'Blog', path: '/blog'}
  ];
  
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hovered, setStyles] = React.useState("");
  
  var backgroundColor = "white";
  var textColor = "black";

  if(title !== "index"){
    backgroundColor = "black";
    textColor = "white";
  }


  //change only one on hover
  var buttonStyles = [];
  for(var i = 0; i < 9; i++){
    buttonStyles.push({ color: textColor, backgroundColor: backgroundColor});
  }
  console.log(hovered);
  if(hovered){
    if(buttonStyles[hovered].backgroundColor == "black"){
      buttonStyles[hovered].backgroundColor = "white"
      buttonStyles[hovered].color = "black"
    }
    else{
      buttonStyles[hovered].backgroundColor = "black"
      buttonStyles[hovered].color = "white"
    }
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
          <Link className="left" to="/" 
            style={buttonStyles[1]}
            onMouseEnter={() => setStyles(1)}
            onMouseLeave={() => setStyles()}
          >JCC</Link>
          {
            menuItems.map((item, index) => {
              return (
                <Link to={item.path} 
                  style={buttonStyles[(index+2)]}
                  onMouseEnter={() => setStyles((index+2))}
                  onMouseLeave={() => setStyles()}
                >{item.name}</Link>
              )
            })
          }
          <a href={Resume} 
              style={buttonStyles[7]}
              onMouseEnter={() => setStyles(7)}
              onMouseLeave={() => setStyles()}
          >Resume</a>
          <div className="header-icon" onClick={() => setShowMobileNav(!showMobileNav)}>&#9776;</div>
        </div>
        <div className={showMobileNav ? "mobile-nav menu-section" : "hidden menu-section" }>
          <MobileNav menuItems={menuItems} />
        </div>
      </nav>
    </>
  )
}