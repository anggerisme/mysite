import React from "react"

import Layout from "./layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./blogcss.css"

const BlogPage2 = () => {
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
    <menu>
      {data.allWpPost.nodes.map(nodes => {
        return (
          <li
            style={{
              // color: "grey",
              textDecoration: "none",
              listStyle: "none",
            }}
          >
            <Link to={`/blog/${nodes.slug}`}>
              <div className="title">
                <h4
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "grey",
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                >
                  {nodes.date}
                </h4>
                {/* <p> - </p> */}

                <h4
                  style={{
                    color: "grey",
                    textDecoration: "none",
                    listStyle: "none",
                    fontWeight: 500,
                  }}
                >
                  {nodes.title}
                </h4>
              </div>
              <hr></hr>
            </Link>
          </li>
        )
      })}
    </menu>
  )
}

export default BlogPage2
