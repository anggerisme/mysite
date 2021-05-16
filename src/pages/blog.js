import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../components/blogcss.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        nodes {
          date(formatString: "YYYY MMMM DD")
          title
          slug
        }
      }
    }
  `)
  return (
    <Layout>
      <h2>Blog</h2>
      <ol>
        {data.allWpPost.nodes.map(nodes => {
          return (
            <li>
              <Link
                style={{
                  fontWeight: 100,
                }}
                to={`/blog/${nodes.slug}`}
              >
                <h3>{nodes.title}</h3>
                <h2>{nodes.date}</h2>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
