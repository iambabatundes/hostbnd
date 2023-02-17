import React from "react";
import Rating from "./common/rating";
import "./common/Card.css";
import PropertyDetails from "./propertyDetails";

function PropertyList({ properties, onClose, onClick, selectedProperty }) {
  return (
    <>
      {/* {properties.rented === true ? <h3 className="bg-primary">Rented</h3> : ""} */}

      <div className={`container mains grid grid--1x3 grid--5 mt-2 px-3`}>
        {properties.map((property) => (
          <div
            key={property._id}
            className="card mb-3"
            style={{ border: 0, borderRadius: "10px", cursor: "pointer" }}
            onClick={() => onClick(property)}
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
                src={property.image}
                className=" card-img-top"
                style={{ borderRadius: "10px 10px", marginBottom: "8px" }}
              />

              <div className="">
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
          </div>
        ))}
      </div>

      <PropertyDetails property={selectedProperty} onClick={onClose} />
    </>
  );
}

export default PropertyList;
