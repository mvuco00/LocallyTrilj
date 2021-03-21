import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const menuItems = [
  {
    title: "Naslovnica",
    url: "/",
    className0: "header-links",
    activeClassName0: "navbar__link--active",
  },
  {
    title: "Novosti",
    url: "/blog",
    className0: "header-links",
    activeClassName0: "navbar__link--active",
  },
  {
    title: "Kontakt",
    url: "/contact",
    className0: "header-links",
    activeClassName0: "navbar__link--active",
  },
]
const HeaderNav = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 560px)` })
  const [openBar, setOpenBar] = useState(false)

  const handleOpenBar = () => {
	  setOpenBar(!openBar)
  }
  return (
    <div>
      {!isMobile ? (
        <nav className="headerItems">
          <h4>
            <Link to="/">LocallyTrilj</Link>
          </h4>
          <div className="headerLinks">
            {" "}
            {menuItems.map(item => (
              <Link
                key={item.title}
                to={item.url}
                className={item.className0}
                activeClassName={item.activeClassName0}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      ) : (
        <div className="mainheaderLinksMobile">
          <Link to="/"><h4>LocallyTrilj</h4></Link>
          <div role='button' tabIndex={0} onClick={handleOpenBar} onKeyDown={handleOpenBar}>
            <div className="headerLinksMobile2">
              {openBar ? (
                <div className="headerLinksMobile">
                  <FontAwesomeIcon icon={faTimes} size="lg" color="white" />
                  <div className="collapsedLinks">
                    {menuItems.map(item => (
                      <Link key={item.title} to={item.url}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon
                    icon={faBars}
                    size="lg"
                    color="white"
                    className="hambar"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderNav
