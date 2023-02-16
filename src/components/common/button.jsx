import React from "react";

function Button({ children, onClick, className }) {
  return (
    <button
      className={`${className} btn btn-outline border-end`}
      style={{ fontSize: "1rem", border: "none", marginLeft: "" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
