import * as React from "react"
import "../styles/sidebar.css"
import GithubIcon from "./github_icon.svg"
import { StaticImage } from 'gatsby-plugin-image'

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <ul className="left-sidebar-inner">
        <li>
          <a href="https://github.com/jcconnol" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="github icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/john-connolly-677196157/" target="_blank" rel="noreferrer">
            <img src={"../../linkedin_icon.svg"} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/john.connolly.984/" target="_blank" rel="noreferrer">
            <StaticImage src={"../../facebook_icon.svg"} alt="facebook icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}