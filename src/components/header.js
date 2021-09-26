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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <nav>
        <div className="header topnav" id="myTopnav">
          {logo}
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume.pdf">Resume</Link>
          <Link className="header-icon">&#9776;</Link>
        </div>
      </nav>
    </>
  )
}

export default Header;