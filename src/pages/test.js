import * as React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Seo from "../components/seo"
import Header from "../components/header"
import "../styles/contact.css"

export default function Index() {
  //TODO make contact form go away after it is submitted
  //TODO add recaptcha to form
  return (
    <Layout>
      <Header title="contact"/>
      <div className="page-content contact-content">
        <Seo
          title={"Testing"}
          description={"Test page for John Connolly. just testing things."}
        />
        <h1>
          <b>Test</b>
        </h1>
        <div>
          <p>
            This is a test page!!
          </p>
          <div>
            <img alt="" src="/images/cluttered_office_1.png" />
          </div>
          <div>
            <img alt="" src="/images/the_programmer.gif" />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}