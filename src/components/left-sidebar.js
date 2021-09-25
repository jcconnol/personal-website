import * as React from "react"
import "../styles/sidebar.css"

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <ul className="left-sidebar-inner">
        <li>
          <a href="https://github.com/jcconnol" target="_blank" rel="noreferrer">
            <img src="static/github_icon.svg" alt="github icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/john-connolly-677196157/" target="_blank" rel="noreferrer">
            <img src="static/linkedin_icon.svg" alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/john.connolly.984/" target="_blank" rel="noreferrer">
            <img src="static/facebook_icon.svg" alt="facebook icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}