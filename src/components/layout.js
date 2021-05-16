/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Footer from "./footer"
import "./layout.css"
// import "./menu.js"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          nama
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.nama || `Title`} />

      <div
        style={{
          // marginTop: 0,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          paddingTop: "0",
          // background:'grey',
        }}
      >
        <nav
          style={{
            maxWidth: "auto",
            // textAlign: "center",
            // alignItems: 'center',
            // alignContent: "center",
            // background: "grey",
            marginTop: "0",
            paddingTop: "0",
            justifyContent: "space-evenly",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: "auto",
              color: "black",
              display: "flex",
              justifyContent: "space-evenly",
              textDecoration: "none",
              textDecorationLine: "none",
              fontStyle: "bold",
              // background: "red",
            }}
          >
            {/* <li
              style={{
                fontStyle: "bold",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontStyle: "bold",
                }}
                to="/blog"
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="#" style={{ textDecoration: `none` }}>
            {data.site.siteMetadata.nama}
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
