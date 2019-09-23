/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MenuItem from "../components/menu-item"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>

          <MenuItem color="blue" text="Photos" url="photos"/>
          <MenuItem color="thistle" text="Greece" url="photos"/>
          <MenuItem color="blue" text="Ireland" url="photos"/>
          <MenuItem color="thistle" text="Stories" url="stories"/>
          <MenuItem color="blue" text="Projects" url="photos"/>

          <footer>
            © {new Date().getFullYear()}, Built by <a href="https://github.com/siwS">me</a> with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://pages.github.com/">Github pages</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
