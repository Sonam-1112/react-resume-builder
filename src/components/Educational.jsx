import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Educational() {
  const { formData, setFormData } = useContext(InfoContext);
  const educationalFunc = () => {
    console.log("Educational");
  };

  const handleChange = (value, key, fieldName) => {
    const educationData = [...formData.educational];
    educationData[key][fieldName] = value;
    setFormData({
      ...formData,
      educational: [...educationData],
    });
  };

  return (
    <div className="container">
      <Heading headingName="Educational Details" />
      <div className="text-center" id="educationContainer">
        {formData.educational.map((val, key) => (
          <div className="row" key={key}>
            <div className="px-5">
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-school"></i>
                <input
                  type="text"
                  placeholder="School Name"
                  className="form-control"
                  required={true}
                  value={formData.educational[key].schoolNameValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "schoolNameValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-calendar-alt"></i>
                <input
                  type="text"
                  placeholder="From Date"
                  className="form-control"
                  required={true}
                  value={formData.educational[key].schoolFromDateValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "schoolFromDateValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-calendar-alt"></i>
                <input
                  type="text"
                  placeholder="To Date"
                  className="form-control"
                  required={true}
                  value={formData.educational[key].schoolToDateValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "schoolToDateValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-graduation-cap"></i>
                <input
                  type="text"
                  placeholder="Qualification"
                  className="form-control"
                  required={true}
                  value={formData.educational[key].schoolQualificationValue}
                  onChange={(e) => {
                    handleChange(
                      e.target.value,
                      key,
                      "schoolQualificationValue"
                    );
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
                  value={formData.educational[key].schoolDescriptionValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "schoolDescriptionValue");
                  }}
                ></textarea>
              </div>
            </div>
            {/* <div class="mt-2 mb-1 bg-dark w-50 mx-auto">...</div> */}
            {/* <hr className="mt-2 mb-3" /> */}
            <div class="border-top my-3"></div>
          </div>
        ))}
        <div className="text-center mt-5" id="addMoreEducationBtn">
          <button
            onClick={(e) => {
              setFormData({
                ...formData,
                educational: [
                  ...formData.educational,
                  {
                    schoolNameValue: "",
                    schoolFromDateValue: "",
                    schoolToDateValue: "",
                    schoolQualificationValue: "",
                    schoolDescriptionValue: "",
                  },
                ],
              });
            }}
            className="btn btn-warning"
          >
            Add More School
          </button>
        </div>
        <SaveNext
          text="Save &amp; Next"
          link="/projects"
          func={educationalFunc}
        />
      </div>
    </div>
  );
}

export default Educational;
