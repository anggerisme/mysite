import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi saya Angger</h1>
    {/* <p>Saya adalah mahasiswa teknik elektro </p> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
