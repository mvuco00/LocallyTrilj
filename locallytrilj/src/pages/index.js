import React from "react"
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import Cards from "../components/cards"
import { Col, Row } from "reactstrap"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col md="8">
        <h1 className="page-title">Poslovni objekti</h1> <Cards />{" "}
      </Col>
      <Col md="4">
        <h1 className="page-title">Najnovije</h1>
        <Sidebar />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
