import React from "react";
import "../../App.css";

function HeaderBar({ className, properties }) {
  const propertiesNumber = properties.length;
  return (
    <div
      className={`${className} container main d-flex align-items-center flex-row justify-content-between mb-4 mt-3 px-2 `}
    >
      <h3 className="font-poppins fw-bold">Stay in Nigeria</h3>
      <span className="">
        {propertiesNumber > 12 ? "12+" : propertiesNumber} Properties
      </span>
    </div>
  );
}

export default HeaderBar;
