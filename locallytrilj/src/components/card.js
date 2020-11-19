import React from "react"
import {
  Card,
  Badge,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

const CardComponent = props => {
  console.log(props)
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.business.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <span className="text-info">{props.business.address}</span>{" "}
          </CardSubtitle>
          <Badge color="info">{props.business.type}</Badge>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardComponent
