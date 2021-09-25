import React from "react"
import { Link } from 'gatsby'
import "../styles/header.css"

const Header = (props) => {
  const pageName = props.pageName;
  
  var logo = null;
  if(pageName !== "index"){
    logo = <Link className="left" to="/">JCC</Link>;

  }

  /* improvement to use navitems instead of hard coded header */
  return (
    <>
      <nav>
        <div className="header topnav" id="myTopnav">
          {logo}
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
          <Link className="header-icon">&#9776;</Link>
        </div>
      </nav>
    </>
  )
}

export default Header;