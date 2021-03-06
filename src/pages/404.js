import * as React from "react"
// import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import styles from "./header.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1> 404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
