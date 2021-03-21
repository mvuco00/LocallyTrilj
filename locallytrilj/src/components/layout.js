import React from "react"
import PropTypes from "prop-types"
import "../styles/index.scss"
import HeaderNav from "./headernav"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <>
      <HeaderNav />
      <div className="container" id="content">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
