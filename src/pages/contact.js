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
          <p><b>This is something that goes on top</b></p>
          <p>
            This is something that goes on a page upder the top.
            This is also under the top but also under whatever us right above this.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}