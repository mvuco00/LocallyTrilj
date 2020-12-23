import React from "react"

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
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
