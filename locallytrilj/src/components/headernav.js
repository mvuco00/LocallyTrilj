import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "gatsby"

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

  return (
    <div>
      {!isMobile ? (
        <nav className="headerItems">
          <h4>LocallyTrilj</h4>
          <div className="headerLinks">
            {" "}
            {menuItems.map(item => (
              <Link
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
          <div className="headerLinksMobile">
            <div onClick={() => setOpenBar(!openBar)}>
              <div>|||</div>
              {openBar ? (
                <div className="headerLinksMobile">
                  <div onClick={() => setOpenBar(!openBar)}>
                    <div>|||</div>
                  </div>

                  {menuItems.map(item => (
                    <Link to={item.url}>{item.title}</Link>
                  ))}
                </div>
              ) : (
                <div>|||</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderNav
