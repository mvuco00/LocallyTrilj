import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo"

const Blog = () => (
  <div>
    <Header siteTitle="LocallyTrilj">
      <SEO title="Blog" />
    </Header>
    <h1 className="page-title">Blog</h1>
  </div>
)

export default Blog
