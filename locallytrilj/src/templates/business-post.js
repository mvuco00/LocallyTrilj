import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Map from "../components/map"
import { Col, Row } from "reactstrap"

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
                <h2>{business.name}</h2>
                {business.address}
                <h4>{`Radno vrijeme: ${business.workTime}`}</h4>
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
      facebook
      instagram
      id
      lat
      long
      name
      vlasnik
      tag
      workTime
    }
  }
`

export default BusinessPost
