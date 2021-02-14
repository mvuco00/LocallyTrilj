import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
} from "reactstrap"

class Newsletter extends Component {
  state = {
    email: "",
    message:
      "Pretplatite se na naš newsletter kako bi vam sve novosti stizale na mail",
  }

  changeEmailHandler = event => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ message: "Uspješno ste se prijavili na naš newsletter" })
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
      })
    this.setState({ email: "" })
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <h5 className="newstitle">Newsletter</h5>
            <h6 className="subtitlenews">{this.state.message}</h6>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Unesite e-mail adresu"
                  value={this.state.email}
                  onChange={this.changeEmailHandler}
                />
              </FormGroup>
              <button
                className="btn btn-outline-success text-uppercase  float-right pretplati"
                type="submit"
              >
                Pretplati se
              </button>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Newsletter
