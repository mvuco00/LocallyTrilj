import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { Component } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
      <div className="container" id="content">
        <Navbar fixed="top" light expand="sm">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>

          <NavbarToggler onClick={this.setIsOpen} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className="header-links"
                  activeClassName="navbar__link--active"
                  to="/"
                >
                  Naslovnica
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="header-links"
                  activeClassName="navbar__link--active"
                  to="/blog"
                >
                  Novosti
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="header-links"
                  activeClassName="navbar__link--active"
                  to="/contact"
                >
                  Kontakt
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
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
