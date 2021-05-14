import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPage2 from "../components/blog2"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Journal</h2>
    <BlogPage2 />
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Testing site - Under maintenance - test-test.</p> */}
    {/* <p>
      Link <Link to="/404">404</Link>
      <br></br>
      Link <Link to="/blog">Blog</Link>
    </p> */}

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
