import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import { renderRichText } from "gatsby-source-wordpress/rich-text"

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        date(fromNow: true)
        content
      }
    }
  }
`

const Blog = ({ data }) => {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Layout>
      <h1 style={{}}>{post.title}</h1>
      <hr style={{ marginBottom: 0 }}></hr>
      <p
        style={{
          color: "grey",
          textAlign: "right",
          fontStyle: "italic",
        }}
      >
        {post.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Layout>
  )
}
export default Blog
