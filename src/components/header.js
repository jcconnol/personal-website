import * as React from "react"
import { Link } from 'gatsby'

export default function Header() {
  return (
    <div>
      <title>John Connolly</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume.pdf">Resume</Link></li>
        </ul>
      </nav>
    </div>
  )
}