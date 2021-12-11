import * as React from "react"
import Layout from '../components/layout'
import "../styles/page.css"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="page-content">
        <h1>
          <b>404 page not found!</b>
        </h1>
        <p>
          Oops, looks like this page doesn't exist.
        </p>
        <div>
          <a href="/">Go Back</a>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
