import React from "react"
import Header from "../components/header"
import Newsletter from "../components/newsletter"
import SEO from "../components/seo"

const Contact = () => (
  <div>
    <Header siteTitle="LocallyTrilj">
      <SEO title="Kontakt" />
    </Header>
    <h1 className="page-title">Kontaktirajte nas</h1>
    <Newsletter />
  </div>
)

export default Contact
