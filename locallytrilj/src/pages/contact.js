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
      <div className="kontaktpage">
        <span className="info2">Za sve dodatne informacije:</span>
        <div>
          <b>Kontakt:</b> 098765243
        </div>
        <div>
          <b>E-mail:</b> locallytrilj@gmail.com
        </div>
        <div>
          <b>Adresa:</b> Ul. Kralja Tomislava 10, Trilj
        </div>
        <div className="dodaj">
          <span className="info2">
            Ako želite dodati poslovni objekt na stranicu javite se na:
          </span>
          <div>
            <b>E-mail:</b> locallytrilj@gmail.com
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
    <Footer />
  </div>
)

export default Contact
