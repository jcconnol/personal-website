import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"

export default function Index() {
  return (
    <Layout>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <div className="page-content">
        <h1>
          <b>Contact</b>
        </h1>
        <div>
          <p>
            If you wish to get a hold of me for questions about something I built, 
            you want to ask me to help you with a project or you wish to insult me in an original way
            then you can email me at <a href="mailto:jcconnol4@gmail.com">jcconnol4@gmail.com</a>.
          </p>
          <p>
            If the insult is not original then I will probably not respond and just be disappointed in you.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}