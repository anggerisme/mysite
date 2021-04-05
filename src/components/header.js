import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      opacity: "1",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <nav
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <ul
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <li
            style={{
              color: `white`,
            }}
          >
            {" "}
            <Link
              to="/blog"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/contact"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/page-2"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
