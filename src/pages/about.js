import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import "../styles/about.css"
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
        <div>
          <p><b>Test engineering at Ramsey Soltions</b></p>
          <p>
            I have been working for <a href="https://www.ramseysolutions.com/">Ramsey solutions</a> since 
            July 2021 as a test engineer and QA. I moved to Tenessee from Indiana to work there and absolutely
            love my job and the people I work with! The mission of Ramsey Solutions makes it a wonderful a fulfilling
            place to work.
          </p>
        </div>
        <div>
          <p><b>Software engineering at Walker Information</b></p>
          <p>
            <a href="https://walkerinfo.com/">Walker Information</a> is a small customer experience company
            that works closely with Qualtrics. I started working with them in December 2019 and had a lot of fun
            and learned a lot working for them. I worked with a PERN stack and wrote a lot of vanilla JavaScript. 
            Qualtrics has a lot of functionality and technology concepts that carry over to a lot of 
            other portions of technology.
          </p>
        </div>
        <div>
          <p><b>Veterans Association Lab Intern</b></p>
          <p>
            The Veteran's Association in Temple Texas has a research lab that has multiple biological 
            rearch studies going on. I was fortunate enough to be able to be an intern and work on a few of
            the research projects.
          </p>
          <p>
            The main study I helped with was a resusitation drug study that was being tested in an Ex-Vivo 
            method. This involved live ultrasounding of lab mice hearts where the mice had a genetic tag that
            produced a defect in the heart. This made it easier to test resucitation cocktails. 
          </p>
          <p>
            Since the current cocktail of resucitation drugs have less than a 5% success rate, research on a 
            new cocktail of resucitation drugs is necessary and a better one is almost certainly out there.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}