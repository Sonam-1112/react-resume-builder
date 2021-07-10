import React from "react";
import "../css/heading.css";

function Heading({ headingName }) {
  return (
    <div className="heading">
      <h1>{headingName}</h1>
    </div>
  );
}

export default Heading;
