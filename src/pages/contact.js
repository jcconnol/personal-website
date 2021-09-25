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
        contact page
      <Footer />
    </Layout>
  )
}