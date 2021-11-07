import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import "../styles/contact.css"

export default function Index() {
  //TODO make contact form go away after it is submitted
  //TODO add recaptcha to form
  return (
    <Layout>
      <Header />
      <div className="page-content contact-content">
        <h1>
          <b>Contact</b>
        </h1>
        <div>
          <p>
            If you wish to get a ask me a question about something I have built, 
            you want to ask me to help you with a project or you wish to insult me in an original way
            then please contact me with the form below.
          </p>
          <ContactForm />
          <p>
            If you're emailing me just to be insulting, if the insult is not original then I will probably not respond and just be disappointed in you.
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}