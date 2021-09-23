import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"

export default function Index() {
  return (
    <Layout>
      <Header pageName="index" />
      <LeftSidebar />
      <RightSidebar />
      Hello world
      <Footer />
    </Layout>
  )
}