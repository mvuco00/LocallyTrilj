import React from "react"

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
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.trilj.hr"
              target="_blank"
              rel="noopener noreferrer"
              className="google"
            >
              <i className="fab fa-google fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
