import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import CommentForm from "../CommentForm";
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            <CardText>{props.dish.description}</CardText>
            <CardText>Price : {props.dish.price} /-</CardText>
          </CardText>
          <hr />
          <LoadComments comments={props.comments}></LoadComments>
          <hr />
          <CommentForm dishId={props.dish.id} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
