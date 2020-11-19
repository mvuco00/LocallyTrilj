import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends Component {
  state = {
    isOpen: false,
  }

  setIsOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <Navbar fixed="top" light expand="sm">
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={this.setIsOpen} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Naslovnica</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
