import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"

export default function Index() {
  return (
    <div>
      <Header />
        <LeftSidebar />
        <RightSidebar />
        experience page
      <Footer />
    </div>
  )
}