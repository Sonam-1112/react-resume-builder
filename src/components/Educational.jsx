import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Educational() {
  const { formData, setFormData } = useContext(InfoContext);
  const educationalFunc = () => {
    console.log("Educational");
  };

  const addMoreEducationFunc = () => {
    // Row Div
    let divRow = document.createElement("div");
    divRow.classList.add("row");

    // Educationt Div
    let divEducation = document.createElement("div");
    divEducation.classList.add("px-5");

    // Experience Differentiable horizontal line
    let hr = document.createElement("hr");

    // EducationName Field
    let divEducationNameField = document.createElement("div");
    divEducationNameField.classList.add("inner-addon");
    divEducationNameField.classList.add("right-addon");
    divEducationNameField.classList.add("form-group");
    divEducationNameField.classList.add("mt-4");

    let educationNameIcon = document.createElement("i");
    educationNameIcon.classList.add("icon");
    educationNameIcon.classList.add("fas");
    educationNameIcon.classList.add("fa-school");

    let educationNameInputField = document.createElement("input");
    educationNameInputField.classList.add("form-control");
    educationNameInputField.setAttribute("type", "text");
    educationNameInputField.setAttribute("placeholder", "School Name");

    divEducationNameField.appendChild(educationNameIcon);
    divEducationNameField.appendChild(educationNameInputField);

    // EducationFromDate Field
    let divEducationFromDateField = document.createElement("div");
    divEducationFromDateField.classList.add("inner-addon");
    divEducationFromDateField.classList.add("right-addon");
    divEducationFromDateField.classList.add("form-group");
    divEducationFromDateField.classList.add("mt-4");

    let educationFromDateIcon = document.createElement("i");
    educationFromDateIcon.classList.add("icon");
    educationFromDateIcon.classList.add("fas");
    educationFromDateIcon.classList.add("fa-calendar-alt");

    let educationFromDateInputField = document.createElement("input");
    educationFromDateInputField.classList.add("form-control");
    educationFromDateInputField.setAttribute("type", "text");
    educationFromDateInputField.setAttribute("placeholder", "From Date");

    divEducationFromDateField.appendChild(educationFromDateIcon);
    divEducationFromDateField.appendChild(educationFromDateInputField);

    // EducationToDate Field
    let divEducationToDateField = document.createElement("div");
    divEducationToDateField.classList.add("inner-addon");
    divEducationToDateField.classList.add("right-addon");
    divEducationToDateField.classList.add("form-group");
    divEducationToDateField.classList.add("mt-4");

    let educationToDateIcon = document.createElement("i");
    educationToDateIcon.classList.add("icon");
    educationToDateIcon.classList.add("fas");
    educationToDateIcon.classList.add("fa-calendar-alt");

    let educationToDateInputField = document.createElement("input");
    educationToDateInputField.classList.add("form-control");
    educationToDateInputField.setAttribute("type", "text");
    educationToDateInputField.setAttribute("placeholder", "To Date");

    divEducationToDateField.appendChild(educationToDateIcon);
    divEducationToDateField.appendChild(educationToDateInputField);

    // EducationQualificationDate Field
    let divEducationQualificationField = document.createElement("div");
    divEducationQualificationField.classList.add("inner-addon");
    divEducationQualificationField.classList.add("right-addon");
    divEducationQualificationField.classList.add("form-group");
    divEducationQualificationField.classList.add("mt-4");

    let educationQualificationIcon = document.createElement("i");
    educationQualificationIcon.classList.add("icon");
    educationQualificationIcon.classList.add("fas");
    educationQualificationIcon.classList.add("fa-graduation-cap");

    let educationQualificationInputField = document.createElement("input");
    educationQualificationInputField.classList.add("form-control");
    educationQualificationInputField.setAttribute("type", "text");
    educationQualificationInputField.setAttribute(
      "placeholder",
      "Qualification"
    );

    divEducationQualificationField.appendChild(educationQualificationIcon);
    divEducationQualificationField.appendChild(
      educationQualificationInputField
    );

    // EducationDescription Field
    let divEducationDescriptionField = document.createElement("div");
    divEducationDescriptionField.classList.add("inner-addon");
    divEducationDescriptionField.classList.add("right-addon");
    divEducationDescriptionField.classList.add("form-group");
    divEducationDescriptionField.classList.add("mt-4");

    let educationDescriptionIcon = document.createElement("i");
    educationDescriptionIcon.classList.add("icon");
    educationDescriptionIcon.classList.add("fas");
    educationDescriptionIcon.classList.add("fa-info-circle");

    let educationDescriptionInputField = document.createElement("textarea");
    educationDescriptionInputField.classList.add("form-control");
    educationDescriptionInputField.setAttribute("type", "text");
    educationDescriptionInputField.setAttribute("placeholder", "Description");

    divEducationDescriptionField.appendChild(educationDescriptionIcon);
    divEducationDescriptionField.appendChild(educationDescriptionInputField);

    // EducationDiv appending starts
    divEducation.appendChild(hr);
    divEducation.appendChild(divEducationNameField);
    divEducation.appendChild(divEducationFromDateField);
    divEducation.appendChild(divEducationToDateField);
    divEducation.appendChild(divEducationQualificationField);
    divEducation.appendChild(divEducationDescriptionField);

    // Row div which contains one Project
    divRow.appendChild(divEducation);

    // RowDiv added dynamically
    let educationContainer = document.getElementById("educationContainer");
    let addMoreEducationBtn = document.getElementById("addMoreEducationBtn");
    educationContainer.insertBefore(divRow, addMoreEducationBtn);
  };

  return (
    <div className="container">
      <Heading headingName="Educational Details" />
      <div className="text-center" id="educationContainer">
        <div className="row">
          <div className="px-5">
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
        </div>
        <div className="text-center mt-5" id="addMoreEducationBtn">
          <button
            onClick={(e) => addMoreEducationFunc(e)}
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
