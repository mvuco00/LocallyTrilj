import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import {
  Card,
  Badge,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from "reactstrap"

const BusinessPost = ({ data }) => {
  const business = data.businessJson
  return (
    <Layout>
      <SEO title={business.name} />
      <Row>
        <Col md="8">
          <div className="">
            <div className="blog-post">
              <h2>{business.name}</h2>
              {business.address}
              <h4>{business.workTime}</h4>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="blog-container">
            <div className="blog-post">
              <h2>{business.name}</h2>
              {business.address}
              <h4>{business.workTime}</h4>
            </div>
          </div>
        </Col>
      </Row>
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
      tag
      workTime
    }
  }
`

export default BusinessPost
