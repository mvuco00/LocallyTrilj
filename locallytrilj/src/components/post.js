import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

const Post = ({ title, business, type, date, body, path }) => {
  return (
    <div className="container" id="content">
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            <span className="text-info">{date}</span>{" "}
            <span className="text-info">{business}</span>{" "}
            <span className="text-info">{type}</span>
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
