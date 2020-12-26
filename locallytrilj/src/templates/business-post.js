import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Map from "../components/map"
import { Col, Row } from "reactstrap"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

const BusinessPost = ({ data }) => {
  const business = data.businessJson
  const businessLng = business.tag.length
  const tagList = []
  business.tag.map(el => {
    let x = ""
    if (business.tag[businessLng - 1] === el) {
      return tagList.push(el)
    } else {
      x = el + ","
      return tagList.push(x)
    }
  })

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
                  </div>
                </div>
                <div className="info">
                  <h5 className="info-title">Osnovne informacije</h5>
                  <h5>
                    <b>Radno vrijeme:</b> {business.workTime}
                  </h5>
                  <h5>
                    <b>Adresa:</b> {business.address}
                  </h5>
                  <h5>
                    <b>Kontakt:</b> {business.kontakt}
                  </h5>
                  <h5 className="info-title-more">Dodatno</h5>
                  <div>
                    <b>Vlasnik:</b> {business.vlasnik}
                  </div>
                  <div>
                    <b>Specifičnosti objekta: </b>
                    {tagList.map(el => (
                      <span key={el}>{`${el} `}</span>
                    ))}
                  </div>

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
                            <FaFacebookF size="20px" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.instagram.com${business.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instagram"
                          >
                            <FaInstagram size="20px" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
