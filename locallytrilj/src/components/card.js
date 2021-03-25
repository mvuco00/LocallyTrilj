import React from "react"
import { Link } from "gatsby"
import { Card, Badge, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { slugify } from "../util/utils"

function realTimeClock() {
  var rtClock = new Date()
  var hours = rtClock.getHours()
  hours = ("0" + hours).slice(-2)

  return { hours }
}

const CardComponent = props => {
  const { hours } = realTimeClock()
  return (
    <div>
      <Card>
        <div className="card-flex">
          <img
            src={`../../${props.business.node.path}`}
            alt="business-logo"
            className="business-logo"
          />
          <CardBody>
            <div>
              <Link
                to={slugify(props.business.node.name)}
                className="card-link"
              >
                {" "}
                <CardTitle tag="h5">{props.business.node.name}</CardTitle>{" "}
              </Link>

              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <span className="text-info">{props.business.node.address}</span>{" "}
              </CardSubtitle>
              <Badge color="info" className="text-uppercase">
                <Link to={`/tag/${slugify(props.business.node.business)}`}>
                  {props.business.node.business}
                </Link>
              </Badge>
            </div>
            <div className="trenutno">
              <b>Trenutno:</b>
              <div className="hours">
                {hours > 22 ? (
                  <span className="closed">zatvoreno</span>
                ) : (
                  <span className="open">otvoreno</span>
                )}
              </div>
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  )
}

export default CardComponent
