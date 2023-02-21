import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProperties } from "../services/properties";
import "./common/Card.css";
import Rating from "./common/rating";

function PropertyDetails() {
  const [properties, setProperties] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setProperties(getProperties());
  }, []);

  const property = properties.find((property) => property._id === params.id);
  if (!property) {
    return <div>Loading...</div>;
  }

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setZoomLevel(1);
  };

  // const handleImageMouseMove = (e) => {
  //   const image = e.currentTarget;
  //   let zoomer = image.querySelector(".zoomer");
  //   if (!zoomer) {
  //     zoomer = document.createElement("div");
  //     zoomer.classList.add("zoomer");
  //     image.appendChild(zoomer);
  //   }

  //   const boundingRect = image.getBoundingClientRect();
  //   const x = e.clientX - boundingRect.left;
  //   const y = e.clientY - boundingRect.top;

  //   const offsetX = 0.5 * image.offsetWidth - x;
  //   const offsetY = 0.5 * image.offsetHeight - y;

  //   zoomer.style.transform = `translate(-50%, -50%) scale(2) translate(${offsetX}px, ${offsetY}px)`;
  // };

  // const handleMouseLeave = (e) => {
  //   const image = e.currentTarget;
  //   const zoomer = image.querySelector(".zoomer");
  //   if (zoomer) {
  //     image.removeChild(zoomer);
  //   }
  // };

  const handleImageMouseMove = (e) => {
    const { top, left, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setZoomLevel(1 + Math.min(1, Math.max(0, Math.sqrt(x * x + y * y))));
  };

  return (
    <header className="container mt-4">
      {/* <h1>Property Details {params.id}</h1> */}

      <div className="row m-1 ">
        <div className="col-md-9 shadow-sm p-1 bg-body-tertiary rounded">
          <div className="row">
            <div className="col-md-5">
              <div className="image-zoom">
                <img
                  src={selectedImage || property.thumbnail}
                  width="100%"
                  alt=""
                  srcset=""
                  onMouseMove={handleImageMouseMove}
                />
                {/* <div className=".image-zoom"></div> */}
              </div>
              <div
                className="image-selection "
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {property.images &&
                  Object.entries(property.images).map(([key, image]) => (
                    <img
                      key={key}
                      src={image}
                      width="70"
                      height="60"
                      onClick={() => handleThumbnailClick(image)}
                      className="border shadow-sm p-1 bg-body-tertiary rounded"
                    />
                  ))}
                {property.images && (
                  <img
                    src={property.thumbnail}
                    width="70"
                    height="60"
                    onClick={() => handleThumbnailClick(property.thumbnail)}
                    className="shadow-sm p-1 bg-body-tertiary rounded"
                  />
                )}
              </div>
            </div>
            <div className="col-md-7 ">
              {property.tag && (
                <div
                  className={
                    property.tag === "Executive"
                      ? "bg-danger card-subtitle badge text-uppercase px-2"
                      : "bg-primary card-subtitle badge text-uppercase px-2"
                  }
                >
                  {property.tag}
                </div>
              )}

              <div className="fs-4 text-capitalize fw-semibold">
                {property.title}
              </div>
              <div className="border-bottom mb-1">
                <Rating />
              </div>

              <div className="fw-bolder fs-3">${property.discount}</div>
              <div className="d-flex px-1">
                <div
                  className="text-decoration-line-through fw-light fs-6 text-muted"
                  style={{ marginRight: 8 }}
                >
                  ${property.price}
                </div>
                <div className="text-light bg-danger bg-opacity-1  border border-secondary rounded-1 ml-3">
                  {property.percent}
                </div>
              </div>
              <div className="mt-1">
                <h6 className="mt-1 text-warning opacity-70">
                  {property.bid}+ have bid for it
                </h6>
              </div>

              <div className="d-flex" style={{ gap: 25 }}>
                <span className="d-flex align-self-center" style={{ gap: 8 }}>
                  <span className="">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                  </span>
                  <span>Posted: 20 February, 2023</span>
                </span>

                <span className="d-flex align-self-center" style={{ gap: 8 }}>
                  <span className="">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span>{property.location}</span>
                </span>
              </div>
              <button
                className="mt-4 p-2 d-flex justify-content-center shadow-md bg-danger border-0 text-light p-1 bg-body-tertiary rounded fs-5"
                style={{ width: "95%", gap: 15 }}
              >
                <span className="d-flex align-self-center">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <div className="ml-4">Rent</div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 shadow-sm p-1 bg-body-tertiary rounded">
          column
        </div>
      </div>

      <div className="row m-1 mt-5">
        <div className="col-md-9 shadow-sm p-2 bg-body-tertiary rounded ">
          <h1 className="fs-4 border-bottom">Product Detail</h1>
          <p className="lh-base">{property.productContent}</p>
        </div>
        <div className="col-md-3 shadow-sm p-1 bg-body-tertiary rounded">
          column
        </div>
      </div>

      <div className="row m-1 mt-5 mb-5">
        <div className="col-md-9 shadow-sm p-2 bg-body-tertiary rounded ">
          <div className="row m-3" style={{ gap: 30 }}>
            <div className="col-md-6 border">
              <h1 className="fs-6 border-bottom text-uppercase">
                Specifications
              </h1>
              <div className="d-flex" style={{ gap: 90 }}>
                <div>
                  <h1
                    className="text-uppercase mb-0 text-muted"
                    style={{ fontSize: 12 }}
                  >
                    Condition
                  </h1>
                  <span>{property.condition}</span>
                </div>
                <div>
                  <h1
                    className="text-uppercase mb-0 text-muted"
                    style={{ fontSize: 12 }}
                  >
                    Appartment
                  </h1>
                  <span>{property.size}</span>
                </div>
              </div>

              <div className="d-flex mt-4" style={{ gap: 90 }}>
                <div>
                  <h1
                    className="text-uppercase mb-0 text-muted"
                    style={{ fontSize: 12 }}
                  >
                    Furnishing
                  </h1>
                  <span>{property.furnishing}</span>
                </div>
                <div>
                  <h1
                    className="text-uppercase mb-0 text-muted"
                    style={{ fontSize: 12 }}
                  >
                    Pets
                  </h1>
                  <span>{property.pets}</span>
                </div>
              </div>
            </div>
            <div className="col-md-5 border">
              <h1 className="fs-6 border-bottom text-uppercase">FEATURES</h1>
              <ul className="lh-base">
                <li>{property.features[0]}</li>
                <li>{property.features[1]}</li>
                <li>{property.features[2]}</li>
                <li>{property.features[3]}</li>
                <li>{property.features[4]}</li>
                <li>{property.features[5]}</li>
                <li>{property.features[6]}</li>
                <li>{property.features[7]}</li>
                <li>{property.features[8]}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 shadow-sm p-1 bg-body-tertiary rounded">
          column
        </div>
      </div>

      <div className="row m-1 mt-5 mb-5">
        <div className="col-md-9 shadow-sm p-2 bg-body-tertiary rounded ">
          <h1 className="fs-4 border-bottom">Comment</h1>
          <p className="lh-base">Add Comment</p>
        </div>
        <div className="col-md-3 shadow-sm p-1 bg-body-tertiary rounded">
          column
        </div>
      </div>
    </header>
  );
}

export default PropertyDetails;
