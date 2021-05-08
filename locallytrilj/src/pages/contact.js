import React, { useState } from "react"
import Newsletter from "../components/newsletter"
import Layout from "../components/layout"

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  })
  const handleChange = e => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)

    if (data.name && data.email) {
      fetch("/api/sendEmail", {
        method: "post",
        body: JSON.stringify({
          data: data,
        }),
      }).then(res => console.log(res))
    }
  }

  return (
    <Layout>
      <div className="container" id="content">
        <h1 className="page-title">Kontaktirajte nas</h1>
        <div className="onama">
          <h4 className="info3">O nama:</h4>
          <p>
            LocallyTrilj je stranica čiji je cilj olakšati stanovnicima grada
            Trilja i njegove okolice, pronalazak i dobivanje informacija u vezi
            poslovnih objekata u gradu. Na jednom mjestu objedinjuje popis svih
            poslovnih objekata te informacije o radnom vremenu, adresi, kontakt
            broju itd.
          </p>
        </div>
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

        <form onSubmit={handleSubmit}>
          <h1>Kontaktirajte nas</h1>
          <input
            type="text"
            name="name"
            placeholder="Name & Surname"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <button type="submit">SEND</button>
        </form>
        <Newsletter />
      </div>
    </Layout>
  )
}
export default Contact
