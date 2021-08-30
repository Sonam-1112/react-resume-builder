import React from "react";
import { Link } from "react-router-dom";

function Templates() {
  return (
    <div className="container">
      <div className="row mx-auto text-center">
        <div className="col-md-6">
          <Link to="/preview-resume" className="btn m-3 btn-primary w-50">
            Choose Template 1
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/preview-resume-2" className="btn m-3 btn-primary w-50">
            Choose Template 2
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Templates;
