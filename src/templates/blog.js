import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        raw
        references {
            contentful_id
            __typename
            fixed(width: 100) {
              src
            }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          
            <img
              alt={node.data.target.contentful_id}
              src={node.data.target.fixed.src}
            />
          
        )
      },
    },
  }
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  )
}
export default Blog
