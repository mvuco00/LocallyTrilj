import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cards from "../components/cards"
import { Col, Row } from "reactstrap"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>

    <Row>
      <Col md="8">
        {" "}
        <Cards />{" "}
      </Col>
      <Col md="4">
        <div></div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
