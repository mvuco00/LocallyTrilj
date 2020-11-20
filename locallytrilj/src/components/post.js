import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from "reactstrap"
import { slugify } from "../util/utils"

// destrukturiranje da ne koristimo npr props.title
const Post = ({ title, business, type, date, body, path, fluid, tags }) => {
  return (
    <div className="blog-container">
      <Card style={{ width: "60%", height: "60%" }}>
        <Link to={path}>
          <Img className="card-image-top" fluid={fluid} />
        </Link>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            <div className="card-tags">
              <span className="text-info">{date}</span>{" "}
              <span>
                <Badge color="primary" className="text-uppercase">
                  <Link to={`/tag/${slugify(business)}`}>{business}</Link>
                </Badge>
                <Badge color="info" className="text-uppercase">
                  <Link to={`/tag/${slugify(type)}`}>{type}</Link>
                </Badge>
              </span>
            </div>
          </CardSubtitle>
          <CardText>{body}</CardText>
          <Link to={path} className="btn btn-outline-primary float-right">
            Pročitaj više
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
