import React from "react";
import Rating from "./common/rating";
import Like from "./like";
import Card from "./common/card";
import "../App.css";

function PropertyList({ properties, onLike, onRated }) {
  // const [rating, setRating] = React.useState(2.9);

  return (
    <div className="mains grid grid--1x3 grid--5 m-5">
      {properties.map((property) => (
        <div className="card mb-3" style={{ border: 0, borderRadius: "10px" }}>
          <img
            src={property.image}
            className=" card-img-top"
            style={{ borderRadius: "10px 10px", marginBottom: "8px" }}
          />
          <div className="">
            <div className="d-flex flex-row justify-content-between mt-2">
              <div className="">
                {property.tag && (
                  <span
                    className="card-subtitle badge bg-primary  text-uppercase px-2"
                    style={{ width: "6rem" }}
                  >
                    {property.tag}
                  </span>
                )}
                <span
                  className="card-subtitle text-muted"
                  style={{ paddingLeft: "1rem" }}
                >
                  {property.subTitle}
                </span>
              </div>
              <span className="card-subtitle">
                <Rating />
              </span>
            </div>
            <h4 className="card-title mt-2">{property.title}</h4>
            <p card-subtitle text-muted>
              {property.description}
            </p>

            <button type="button" className="btn btn-outline-primary btn-lg">
              {property.price}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
