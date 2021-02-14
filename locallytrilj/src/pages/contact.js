import React from "react"

import Newsletter from "../components/newsletter"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <div className="container" id="content">
      <h1 className="page-title">Kontaktirajte nas</h1>
      <div className="kontaktpage">
        <span className="info2">Za sve dodatne informacije:</span>
        <div className="xy">
          <b>Kontakt:</b> <span>098765243</span>
        </div>
        <div className="xy">
          <b>E-mail:</b> <span>locallytrilj@gmail.com</span>
        </div>
        <div className="xy">
          <b>Adresa:</b> <span>Ul. Kralja Tomislava 10, Trilj</span>
        </div>
        <div className="dodaj">
          <span className="info2">
            Ako želite dodati poslovni objekt na stranicu javite se na:
          </span>
          <div className="xy">
            <b>E-mail:</b> <span>locallytrilj@gmail.com</span>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  </Layout>
)

export default Contact
