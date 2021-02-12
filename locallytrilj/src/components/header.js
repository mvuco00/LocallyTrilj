import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="container" id="content">
      <Navbar fixed="top" light expand="sm">
        <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
