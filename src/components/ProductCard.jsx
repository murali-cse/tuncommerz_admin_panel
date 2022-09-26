import React from "react";
import { Card, Badge } from "react-bootstrap";

const ProductCard = ({
  image,
  title,
  price,
  discountPrice,
  discount,
  desc,
  stock,
  status,
}) => {
  const stockStatus = (stock) => {
    return stock === "In Stock"
      ? "badge badge-success mt-2"
      : "badge badge-danger mt-2";
  };

  const active = () => {
    return (
      <div>
        <div
          style={{
            borderRadius: "50px",
            fontSize: "10px",
            backgroundColor: "green",
            color: "white",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          Active
        </div>
      </div>
    );
  };

  const inactive = () => {
    return (
      <div>
        <div
          style={{
            borderRadius: "50px",
            fontSize: "10px",
            backgroundColor: "#FF4747",
            color: "white",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          Inactive
        </div>
      </div>
    );
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        style={{
          aspectRatio: "1",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title style={{ fontSize: "14px" }}>
          {price}
          <span
            style={{
              marginLeft: "5px",
              fontSize: "12px",
              textDecoration: "line-through",
              color: "#878787",
            }}
          >
            ₹ 50,000
          </span>
          <span
            style={{
              marginLeft: "5px",
              fontSize: "12px",
              color: "green",
            }}
          >
            50% off
          </span>
        </Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          {/* <div> */}
          <div class={stockStatus(stock)}>{stock}</div>
          {status ? active() : inactive()}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
