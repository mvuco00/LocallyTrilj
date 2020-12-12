import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import SEO from "../components/seo"

const Contact = () => (
  <div>
    <div className="container" id="content">
      <Header siteTitle="LocallyTrilj">
        <SEO title="Kontakt" />
      </Header>
      <h1 className="page-title">Kontaktirajte nas</h1>
      <Newsletter />
    </div>
    <Footer />
  </div>
)

export default Contact
