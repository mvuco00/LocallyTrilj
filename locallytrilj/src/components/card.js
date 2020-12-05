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
          <Link to={slugify(props.business.node.name)}>
            {" "}
            <CardTitle tag="h5">{props.business.node.name}</CardTitle>{" "}
          </Link>

          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <span className="text-info">{props.business.node.address}</span>{" "}
          </CardSubtitle>
          <Badge color="info" className="text-uppercase">
            <Link to={`/tag/${slugify(props.business.node.type)}`}>
              {props.business.node.type}
            </Link>
          </Badge>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardComponent
