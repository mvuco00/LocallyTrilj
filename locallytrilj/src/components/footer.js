import React from "react"
import { Link } from "gatsby"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="site-footer">
      <div>
        <div className="address-footer">
          <div>
            <b>Kontakt:</b> 098765243
          </div>
          <div>
            <b>Adresa:</b> Ul. Kralja Tomislava 10, Trilj
          </div>
          <div>
            <b>E-mail:</b> locallytrilj@gmail.com
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-center">LocallyTrilj</h4>
        <p className="text-center">Pratite nas na društvenim mrežama</p>
        <div className="footer-social-links">
          <ul className="social-links-list">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebook size="20px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <FaTwitter size="20px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.trilj.hr"
                target="_blank"
                rel="noopener noreferrer"
                className="google"
              >
                <FaGoogle size="20px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="links-footer">
        <Link to="/">Naslovna stranica</Link>
        <Link to="/contact">Kontaktirajte nas</Link>
        <Link to="/blog">Saznajte sve novosti</Link>
      </div>
    </div>
  )
}

export default Footer
