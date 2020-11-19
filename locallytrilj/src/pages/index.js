import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cards from "../components/cards"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>
    <Cards />
  </Layout>
)

export default IndexPage
