import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import "../styles/page.css"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"

export default function Index() {
  /* improvement is to make map and have info be in json file */
  return (
    <Layout>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <div className="page-content">
        <h1>
          <b>About</b>
        </h1>
        <p>
          <b>I currently work at Ramsey Solutions as a test engineer and QA and previously worked as a software engineer.</b>
        </p>
        <p>
          I have been working in the technology sector for over three years and have loved every minute of it!
          Learning new technologies and systems is a passion of mine so if you need help with a project of yours
          then I will be happy to help.
        </p>
        <p>
          <b>Things I would be happy and able to help in:</b>
        </p>
        <p>
          <ul>
            <li>
              Formatting and outputting data in a RESTFUL API
            </li>
            <li>
              Test and QA webpage functionality and finding possible process improvements and application optimization areas
            </li>
            <li>
              Test and QA application functionality as a 2nd or 3rd party.
            </li>
            <li>
              Automation of regression and confirmation tests
            </li>
            <li>
              Building of website and its functionality
            </li>
            <li>
              I also have experience in robotics for small-scale automated processes
            </li>
          </ul>
        </p>
      </div>
      <Footer />
    </Layout>
  )
}