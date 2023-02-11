import React from "react";

function Like({ rated, onClick }) {
  let classes = "fa fa-star";
  if (!rated) classes += "-o";
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer", color: "red" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
}

export default Like;
