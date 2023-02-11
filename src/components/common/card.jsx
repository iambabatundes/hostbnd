import React from "react";
import "./Card.css";

const Card = ({ title, subTitle, description, tag, rated, price, image }) => {
  return (
    <div className="card-container">
      <img src={image} alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{description}</p>
        {rated && <div className="card-tag">{tag}</div>}
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Card;
