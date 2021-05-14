import React from "react"
import { Link } from "gatsby"
// import styled from "styled-components"

const Menu = () => (
  <div
    style={{
        background: 'rebeccapurple',
        color: 'black',
        fontSize:12,
    }}
  >
    <nav>
      <ul style={{listStyle:'none',}}>
        <li>
          {" "}
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact" style={{}}>
            Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/page-2" style={{}}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
