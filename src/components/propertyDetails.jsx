import React from "react";
import Rating from "./common/rating";

function propertyDetails({ property, onClick }) {
  return (
    <div className="modal fade" tabIndex="-1" onClick={onClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{property.title}</h5>
          <button type="button" className="btn-close">
            {onClick}
          </button>
        </div>
        <div className="modal-body">
          <img src={property.image} />
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
            <p card-subtitle text-muted>
              {property.description}
            </p>
            <div className="d-flex align-items-center flex-row justify-content-between mt-2">
              <span className=" card-subtitle text-muted">
                {property.location}
              </span>
              <span className="btn btn-outline-primary">{property.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default propertyDetails;
