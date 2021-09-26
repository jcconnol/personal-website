import * as React from "react"
import Layout from "../components/layout"
import Main from "../components/main"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.css"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"

export default function Index() {
  return (
    <Layout>
      <Header pageName="index" />
      <LeftSidebar />
      <RightSidebar />
      <Main>
        <div className="main-inner-container">
          <h1>
            John Connolly
          </h1>
          <h3>
            Engineer. Builder. Tester.
          </h3>
        </div>
      </Main>
      <Footer pageName="index" />
    </Layout>
  )
}