import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Badge,
  CardTitle,
} from "reactstrap"
import { slugify } from "../util/utils"

// destrukturiranje da ne koristimo npr props.title
const Post = ({ title, business, type, date, body, path, fluid, tags }) => {
  return (
    <div className="blog-container">
      <Card style={{ width: "80%", height: "95%" }}>
        <Link to={`/blog/${path}`}>
          <Img className="card-image-top" fluid={fluid} />
        </Link>
        <CardBody>
          <Link to={`/blog/${path}`} className="card-link">
            <CardTitle tag="h5">{title}</CardTitle>
          </Link>
          <CardSubtitle className="mb-2 text-muted">
            <div className="card-tags">
              <span className="text-info">{date}</span>
              <span>
                <Badge color="info" className="text-uppercase">
                  <Link to={`/tag/${slugify(business)}`}>
                    {business.replace("-", " ")}
                  </Link>
                </Badge>
              </span>
            </div>
          </CardSubtitle>
          <CardText>{body}</CardText>
          <Link
            to={`/blog/${path}`}
            className="btn btn-outline-primary float-right"
          >
            Pročitaj više
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
