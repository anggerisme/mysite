import React from "react"

import Layout from "./layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./blogcss.css"

const BlogPage2 = () => {
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
    <menu>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <li
            style={{
              // color: "grey",
              textDecoration: "none",
              listStyle: "none",
            }}
          >
            <Link to={`/blog/${edge.node.slug}`}>
              <h3
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "grey",
                  fontWeight: 400,
                }}
              >
                {edge.node.publishedDate}
              </h3>

              <h4
                style={{
                  color: "grey",
                  textDecoration: "none",
                  listStyle: "none",
                  fontWeight: 300,
                }}
              >
                {edge.node.title}
              </h4>
              <hr></hr>
            </Link>
          </li>
        )
      })}
    </menu>
  )
}

export default BlogPage2
