import React from "react";
import Rating from "./common/rating";
import "./common/Card.css";
import PropertyDetails from "./propertyDetails";
import { Link } from "react-router-dom";

function PropertyList({ properties }) {
  return (
    <>
      <div className={`container mains grid grid--1x3 grid--5 mt-2 px-3`}>
        {properties.map((property) => (
          <div
            key={property._id}
            className="card mb-3 bg-image hover-overlay hover-zoom hover-shadow ripple key"
            style={{
              border: 0,
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Link
              className="text-decoration-none"
              style={{ color: "black" }}
              reloadDocument
              to={`/properties/${property._id}`}
            >
              <div>
                {property.isRented ? (
                  <div
                    className="card--rented-out"
                    style={{ background: "black", width: "100%" }}
                  ></div>
                ) : (
                  ""
                )}

                <img
                  src={property.thumbnail}
                  className=" card-img-top"
                  style={{ borderRadius: "10px 10px", marginBottom: "8px" }}
                />

                <div className="p-3 py-0 mb-3">
                  <div className="d-flex flex-row justify-content-between mt-2">
                    <div className="">
                      {property.tag && (
                        <span
                          className={
                            property.tag === "Executive"
                              ? "bg-danger card-subtitle badge text-uppercase px-2"
                              : "bg-primary card-subtitle badge text-uppercase px-2"
                          }
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
                  <h5 className="card-title mt-2">{property.title}</h5>
                  <p card-subtitle text-muted>
                    {property.description}
                  </p>

                  <div className="d-flex align-items-center flex-row justify-content-between mt-2">
                    <span className=" card-subtitle text-muted">
                      {property.location}
                    </span>
                    <span className="btn btn-outline-primary">
                      {property.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default PropertyList;
