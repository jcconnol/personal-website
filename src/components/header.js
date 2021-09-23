import React from "react"
import { Link } from 'gatsby'
import "../styles/header.css" 

const Header = (props) => {
  const pageName = props.pageName;

  if(pageName !== "index"){
    var companyLogo = <Link to="/" class="logo">CompanyLogo</Link>
  }

  return (
    <div className="header">
      <nav>
        {companyLogo}
        <div className="header-right">
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <a href="/static/resume.pdf">Resume</a>
          </div>
      </nav>
    </div>
  )
}

export default Header;