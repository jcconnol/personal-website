import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"
import Layout from "../components/layout"

export default function Index() {
  return (
    <Layout>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      Work page
      <Footer />
    </Layout>
  )
}