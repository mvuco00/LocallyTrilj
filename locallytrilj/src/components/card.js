import React from "react"
import { Link } from "gatsby"
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
import { slugify } from "../util/utils"

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
          <Badge color="info" className="text-uppercase">
            <Link to={`/tag/${slugify(props.business.type)}`}>
              {props.business.type}
            </Link>
          </Badge>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardComponent
