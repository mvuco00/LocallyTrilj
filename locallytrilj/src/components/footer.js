import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="site-footer">
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
  )
}

export default Footer
