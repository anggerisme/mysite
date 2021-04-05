import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>Contact Me</h1>
        <p>Email {data.site.siteMetadata.email}</p>

        <p>Diisi nanti............</p>
      </div>
    </Layout>
  )
}

export default Contact
