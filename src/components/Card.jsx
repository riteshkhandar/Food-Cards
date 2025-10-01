// src/components/Card.jsx
import React from "react";
import "./Card.css";

const Card = ({ img, name, price, description }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="price">₹{price}</p>
      <p>{description}</p>
      <button>Order Now</button>
    </div>
  );
};

export default Card;
