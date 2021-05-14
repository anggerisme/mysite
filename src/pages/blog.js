import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../components/blogcss.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "YYYY MMMM DD")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h2>Blog</h2>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li>
              <Link
                style={{
                  fontWeight: 100,
                }}
                to={`/blog/${edge.node.slug}`}
              >
                <h3>{edge.node.title}</h3>
                <h1>{edge.node.publisheDate}</h1>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
