import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
// import "./header.css"
import "./menu.js"

const SiteHeader = styled.header`
  margin-bottom:0;
  opacity: 1;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <div
      style={{
        margin: `0 auto`,
        marginBottom: "0",
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`, // Header padding
        alignItems: 'center',
        textAlign:'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textAlign: "center",
            justifyContent: "center",
          
            alignItems:'center',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <menu />
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
