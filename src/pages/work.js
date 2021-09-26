import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import GithubProject from "../components/github-project"
import "../styles/work.css"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"
import Layout from "../components/layout"

export default function Index() {
  return (
    <Layout>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <div className="page-content">
        <h1>
          <b>Work</b>
        </h1>
        <div>
          <p><b>What I have built or am currently building</b></p>
          <div className="project-grid">
            <div className="project"><GithubProject /></div>
            <div className="project"><GithubProject /></div>
            <div className="project"><GithubProject /></div>
            <div className="project"><GithubProject /></div>
            <div className="project"><GithubProject /></div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}