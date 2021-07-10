import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Educational() {
  const { formData, setFormData } = useContext(InfoContext);
  const educationalFunc = () => {
    console.log("Educational");
  };
  return (
    <div className="container">
      <Heading headingName="Educational Details" />
      <div className="text-center">
        <div className="row">
          {/* 1st Column */}
          <div className="col-md-6 px-5">
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-school"></i>
              <input
                type="text"
                id="schoolNameField"
                placeholder="School Name"
                className="form-control"
                required={true}
                value={formData.educational.schoolNameValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      schoolNameValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-calendar-alt"></i>
              <input
                type="text"
                id="schoolFromDateField"
                placeholder="From Date"
                className="form-control"
                required={true}
                value={formData.educational.schoolFromDateValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      schoolFromDateValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-calendar-alt"></i>
              <input
                type="text"
                id="schoolToDateField"
                placeholder="To Date"
                className="form-control"
                required={true}
                value={formData.educational.schoolToDateValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      schoolToDateValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-graduation-cap"></i>
              <input
                type="text"
                id="schoolQualificationField"
                placeholder="Qualification"
                className="form-control"
                required={true}
                value={formData.educational.schoolQualificationValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      schoolQualificationValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-info-circle"></i>
              <textarea
                type="text"
                id="schoolDescriptionField"
                placeholder="Description"
                className="form-control"
                required={true}
                value={formData.educational.schoolDescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      schoolDescriptionValue: e.target.value,
                    },
                  });
                }}
              ></textarea>
            </div>
          </div>
          {/* 2nd Column */}
          <div className="col-md-6 px-5">
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-university"></i>
              <input
                type="text"
                id="clgNameField"
                placeholder="College Name"
                className="form-control"
                required={true}
                value={formData.educational.clgNameValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      clgNameValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-calendar-alt"></i>
              <input
                type="text"
                id="clgFromDateField"
                placeholder="From Date"
                className="form-control"
                required={true}
                value={formData.educational.clgFromDateValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      clgFromDateValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-calendar-alt"></i>
              <input
                type="text"
                id="clgToDateField"
                placeholder="To Date"
                className="form-control"
                required={true}
                value={formData.educational.clgToDateValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      clgToDateValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-graduation-cap"></i>
              <input
                type="text"
                id="clgQualificationField"
                placeholder="Qualification"
                className="form-control"
                required={true}
                value={formData.educational.clgQualificationValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      clgQualificationValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-info-circle"></i>
              <textarea
                type="text"
                id="clgDescriptionField"
                placeholder="Description"
                className="form-control"
                required={true}
                value={formData.educational.clgDescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    educational: {
                      ...formData.educational,
                      clgDescriptionValue: e.target.value,
                    },
                  });
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <SaveNext
        text="Save &amp; Next"
        link="/projects"
        func={educationalFunc}
      />
    </div>
  );
}

export default Educational;
