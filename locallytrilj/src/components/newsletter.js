import React from "react"
import { Link } from "gatsby"
import {
  Card,
  Badge,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from "reactstrap"

const Newsletter = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Newsletter</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Pretplatite se na naš newsletter kako bi vam sve novosti stizale na
            mail
          </CardSubtitle>
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Unesite e-mail adresu"
              />
            </FormGroup>
          </Form>
          <button className="btn btn-outline-success text-uppercase">
            Pretplati se
          </button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Newsletter
