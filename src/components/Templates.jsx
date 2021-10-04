import React from "react";
import { Link } from "react-router-dom";

function Templates() {
  return (
    <div className="container">
      <div className="row mx-auto text-center">
        <div className="col-md-6">
          <Link to="/preview-resume-1" className="btn m-3 btn-primary w-50">
            Select Template 1
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/preview-resume-2" className="btn m-3 btn-primary w-50">
            Select Template 2
          </Link>
        </div>
      </div>
      <div className="row mx-auto text-center">
        <div className="col-md-6">
          <Link to="/preview-resume-3" className="btn m-3 btn-primary w-50">
            Select Template 3
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/preview-resume-4" className="btn m-3 btn-primary w-50">
            Select Template 4
          </Link>
        </div>
      </div>
      <div className="row mx-auto text-center">
        <div className="col-md-6">
          <Link to="/preview-resume-5" className="btn m-3 btn-primary w-50">
            Select Template 5
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/preview-resume-6" className="btn m-3 btn-primary w-50">
            Select Template 6
          </Link>
        </div>
      </div>
      <div className="row mx-auto text-center">
        <div className="col-md-6">
          <Link to="/preview-resume-7" className="btn m-3 btn-primary w-50">
            Select Template 7
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/preview-resume-8" className="btn m-3 btn-primary w-50">
            Select Template 8
          </Link>
        </div>
      </div>
      <div className="row mx-auto text-center">
        <div className="col-md-6">
          <Link to="/preview-resume-9" className="btn m-3 btn-primary w-50">
            Select Template 9
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/preview-resume-10" className="btn m-3 btn-primary w-50">
            Select Template 10
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Templates;
