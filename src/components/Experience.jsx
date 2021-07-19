import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Experience() {
  const { formData, setFormData } = useContext(InfoContext);
  const experienceFunc = () => {
    console.log("ExperinceFunc");
  };
  const addMoreExpFunc = () => {
    // Row Div
    let divRow = document.createElement("div");
    divRow.classList.add("row");

    // Exp Div
    let divExp = document.createElement("div");
    divExp.classList.add("px-5");

    // Experience Differentiable horizontal line
    let hr = document.createElement("hr");

    // InstituteName Field
    let divInstituteNameField = document.createElement("div");
    divInstituteNameField.classList.add("inner-addon");
    divInstituteNameField.classList.add("right-addon");
    divInstituteNameField.classList.add("form-group");
    divInstituteNameField.classList.add("mt-4");

    let instituteNameIcon = document.createElement("i");
    instituteNameIcon.classList.add("icon");
    instituteNameIcon.classList.add("fas");
    instituteNameIcon.classList.add("fa-building");

    let instituteNameInputField = document.createElement("input");
    instituteNameInputField.classList.add("form-control");
    instituteNameInputField.setAttribute("type", "text");
    instituteNameInputField.setAttribute("placeholder", "Institute Name");

    divInstituteNameField.appendChild(instituteNameIcon);
    divInstituteNameField.appendChild(instituteNameInputField);

    // InstitutePosition Field
    let divInstitutePositionField = document.createElement("div");
    divInstitutePositionField.classList.add("inner-addon");
    divInstitutePositionField.classList.add("right-addon");
    divInstitutePositionField.classList.add("form-group");
    divInstitutePositionField.classList.add("mt-4");

    let institutePositionIcon = document.createElement("i");
    institutePositionIcon.classList.add("icon");
    institutePositionIcon.classList.add("fas");
    institutePositionIcon.classList.add("fa-user-tie");

    let institutePositionInputField = document.createElement("input");
    institutePositionInputField.classList.add("form-control");
    institutePositionInputField.setAttribute("type", "text");
    institutePositionInputField.setAttribute("placeholder", "Position");

    divInstitutePositionField.appendChild(institutePositionIcon);
    divInstitutePositionField.appendChild(institutePositionInputField);

    // InstituteDuration Field
    let divInstituteDurationField = document.createElement("div");
    divInstituteDurationField.classList.add("inner-addon");
    divInstituteDurationField.classList.add("right-addon");
    divInstituteDurationField.classList.add("form-group");
    divInstituteDurationField.classList.add("mt-4");

    let instituteDurationIcon = document.createElement("i");
    instituteDurationIcon.classList.add("icon");
    instituteDurationIcon.classList.add("fas");
    instituteDurationIcon.classList.add("fa-clock");

    let instituteDurationInputField = document.createElement("input");
    instituteDurationInputField.classList.add("form-control");
    instituteDurationInputField.setAttribute("type", "text");
    instituteDurationInputField.setAttribute("placeholder", "Duration");

    divInstituteDurationField.appendChild(instituteDurationIcon);
    divInstituteDurationField.appendChild(instituteDurationInputField);

    // InstituteDescription Field
    let divInstituteDescriptionField = document.createElement("div");
    divInstituteDescriptionField.classList.add("inner-addon");
    divInstituteDescriptionField.classList.add("right-addon");
    divInstituteDescriptionField.classList.add("form-group");
    divInstituteDescriptionField.classList.add("mt-4");

    let instituteDescriptionIcon = document.createElement("i");
    instituteDescriptionIcon.classList.add("icon");
    instituteDescriptionIcon.classList.add("fas");
    instituteDescriptionIcon.classList.add("fa-file-invoice");

    let instituteDescriptionInputField = document.createElement("textarea");
    instituteDescriptionInputField.classList.add("form-control");
    instituteDescriptionInputField.setAttribute("type", "text");
    instituteDescriptionInputField.setAttribute("placeholder", "Description");

    divInstituteDescriptionField.appendChild(instituteDescriptionIcon);
    divInstituteDescriptionField.appendChild(instituteDescriptionInputField);

    // ExpDiv appending starts
    divExp.appendChild(hr);
    divExp.appendChild(divInstituteNameField);
    divExp.appendChild(divInstitutePositionField);
    divExp.appendChild(divInstituteDurationField);
    divExp.appendChild(divInstituteDescriptionField);

    // Row div which contains one Exp
    divRow.appendChild(divExp);

    // RowDiv added dynamically
    let expContainer = document.getElementById("expContainer");
    let addMoreExpBtn = document.getElementById("addMoreExpBtn");
    expContainer.insertBefore(divRow, addMoreExpBtn);
  };
  return (
    <div className="container">
      <Heading headingName="Experience Details" />
      <div className="text-center" id="expContainer">
        <div className="row">
          {/* 1st Column */}
          <div className="px-5" id="exp">
            <h5>
              <i className="fas fa-check-circle"></i> Experience
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
        </div>
        <div className="text-center mt-5" id="addMoreExpBtn">
          <button
            onClick={(e) => addMoreExpFunc(e)}
            className="btn btn-warning"
          >
            Add More Experience
          </button>
        </div>
        <SaveNext text="Save &amp; Next" link="/extra" func={experienceFunc} />
      </div>
    </div>
  );
}

export default Experience;
