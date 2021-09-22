import * as React from "react"
import { Link } from 'gatsby'
import "../styles/header.css" 

export default function Header() {
  return (
    <div className="header">
      <nav>
        <Link href="/" class="logo">CompanyLogo</Link>
        <div className="header-right">
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume.pdf">Resume</Link>
          </div>
      </nav>
    </div>
  )
}