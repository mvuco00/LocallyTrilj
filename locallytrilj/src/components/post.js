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

const Post = ({ title, business, type, date, body, path, fluid }) => {
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
                <Badge color="primary">{business}</Badge>
                <Badge color="info">{type}</Badge>
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
