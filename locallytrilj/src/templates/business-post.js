import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Map from "../components/map"
import { Col, Row } from "reactstrap"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const BusinessPost = ({ data }) => {
  const business = data.businessJson
  return (
    <Layout>
      <SEO title={business.name} />
      <div className="business-template-row">
        <Row>
          <Col md="8">
            <div className="">
              <div className="blog-post">
                <div className="business-title-icon">
                  <img
                    src={business.path}
                    alt="business-logo"
                    className="business-logo2"
                  />
                  <div>
                    <h1 className="business-title">{business.name}</h1>
                    <span className="business-address">{business.address}</span>
                  </div>
                </div>
                <h5 className="work-time">
                  <b>Radno vrijeme:</b> {business.workTime}
                </h5>
                <h5 className="work-time">
                  <b>Kontakt:</b> {business.kontakt}
                </h5>
                <div className="site-socials">
                  <div className="social-links">
                    <ul className="social-links-list">
                      <li>
                        <a
                          href={`https://www.facebook.com/${business.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="facebook"
                        >
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://www.instagram.com${business.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="instagram"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md="4">
            <Map lat={business.lat} long={business.long} />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export const businessQuery = graphql`
  query businessPostBySlug($slug: String!) {
    businessJson(fields: { slug: { eq: $slug } }) {
      address
      kontakt
      facebook
      instagram
      id
      lat
      long
      name
      vlasnik
      tag
      workTime
      path
    }
  }
`

export default BusinessPost
