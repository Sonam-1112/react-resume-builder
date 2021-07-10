import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Experience() {
  const { formData, setFormData } = useContext(InfoContext);
  const experienceFunc = () => {
    console.log("ExperinceFunc");
  };
  return (
    <div className="container">
      <Heading headingName="Experience Details" />
      <div className="text-center">
        <div className="row">
          {/* 1st Column */}
          <div className="col-md-6 px-5">
            <h5>
              <i className="fas fa-check-circle"></i> Experience 1
            </h5>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-building"></i>
              <input
                type="text"
                id="exp1InstituteField"
                placeholder="Institute Name"
                className="form-control"
                value={formData.experience.exp1InstituteValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp1InstituteValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-tie"></i>
              <input
                type="text"
                id="exp1PositionField"
                placeholder="Position"
                className="form-control"
                value={formData.experience.exp1PositionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp1PositionValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-clock"></i>
              <input
                type="text"
                id="exp1DurationField"
                placeholder="Duration"
                className="form-control"
                value={formData.experience.exp1DurationValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp1DurationValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-file-invoice"></i>
              <textarea
                type="text"
                id="exp1DescriptionField"
                placeholder="Description"
                className="form-control"
                value={formData.experience.exp1DescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp1DescriptionValue: e.target.value,
                    },
                  });
                }}
              ></textarea>
            </div>
          </div>
          {/* 2nd Column */}
          <div className="col-md-6 px-5">
            <h5>
              <i className="fas fa-check-circle"></i> Experience 2
            </h5>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-building"></i>
              <input
                type="text"
                id="exp2InstituteField"
                placeholder="Institute Name"
                className="form-control"
                value={formData.experience.exp2InstituteValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp2InstituteValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-tie"></i>
              <input
                type="text"
                id="exp2PositionField"
                placeholder="Position"
                className="form-control"
                value={formData.experience.exp2PositionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp2PositionValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-clock"></i>
              <input
                type="text"
                id="exp2DurationField"
                placeholder="Duration"
                className="form-control"
                value={formData.experience.exp2DurationValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp2DurationValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-file-invoice"></i>
              <textarea
                type="text"
                id="exp2DescriptionField"
                placeholder="Description"
                className="form-control"
                value={formData.experience.exp2DescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    experience: {
                      ...formData.experience,
                      exp2DescriptionValue: e.target.value,
                    },
                  });
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <SaveNext text="Save &amp; Next" link="/extra" func={experienceFunc} />
    </div>
  );
}

export default Experience;
