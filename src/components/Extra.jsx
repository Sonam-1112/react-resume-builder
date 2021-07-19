import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Extra() {
  const { formData, setFormData } = useContext(InfoContext);
  const extraFunc = () => {
    console.log("ExtraFunc");
  };

  const addMoreSkillFunc = () => {
    let divSkillField = document.createElement("div");
    divSkillField.classList.add("inner-addon");
    divSkillField.classList.add("right-addon");
    divSkillField.classList.add("form-group");
    divSkillField.classList.add("mt-4");

    let skillIcon = document.createElement("i");
    skillIcon.classList.add("icon");
    skillIcon.classList.add("fas");
    skillIcon.classList.add("fa-certificate");

    let skillInputField = document.createElement("input");
    skillInputField.classList.add("form-control");
    skillInputField.setAttribute("type", "text");
    skillInputField.setAttribute("placeholder", "Your Skill");

    divSkillField.appendChild(skillIcon);
    divSkillField.appendChild(skillInputField);

    let skillsCol = document.getElementById("skills-col");
    let addMoreSkillBtn = document.getElementById("addMoreSkillBtn");
    skillsCol.insertBefore(divSkillField, addMoreSkillBtn);
  };

  const addMoreInterestFunc = () => {
    let divInterestField = document.createElement("div");
    divInterestField.classList.add("inner-addon");
    divInterestField.classList.add("right-addon");
    divInterestField.classList.add("form-group");
    divInterestField.classList.add("mt-4");

    let interestIcon = document.createElement("i");
    interestIcon.classList.add("icon");
    interestIcon.classList.add("fas");
    interestIcon.classList.add("fa-user-plus");

    let interestInputField = document.createElement("input");
    interestInputField.classList.add("form-control");
    interestInputField.setAttribute("type", "text");
    interestInputField.setAttribute("placeholder", "Your Interest");

    divInterestField.appendChild(interestIcon);
    divInterestField.appendChild(interestInputField);

    let interestsCol = document.getElementById("interests-col");
    let addMoreInterestBtn = document.getElementById("addMoreInterestBtn");
    interestsCol.insertBefore(divInterestField, addMoreInterestBtn);
  };
  return (
    <div className="container">
      <Heading headingName="Extra Details" />
      <div className="text-center" id="extraContainer">
        <div className="row">
          {/* Col 1 */}
          <div className="col-md-6 px-5" id="skills-col">
            <h5>
              <i className="fas fa-check-circle"></i> Skills/Languages
            </h5>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill1Field"
                placeholder="Your Skill"
                className="form-control"
                value={formData.extra.skill1Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      skill1Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="text-center mt-5" id="addMoreSkillBtn">
              <button
                onClick={(e) => addMoreSkillFunc(e)}
                className="btn btn-warning"
              >
                Add More Skills
              </button>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-md-6 px-5" id="interests-col">
            <h5>
              <i className="fas fa-check-circle"></i> Interests
            </h5>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest1Field"
                placeholder="Your Interest"
                className="form-control"
                value={formData.extra.interest1Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      interest1Value: e.target.value,
                    },
                  });
                }}
              />
            </div>

            <div className="text-center mt-5" id="addMoreInterestBtn">
              <button
                onClick={(e) => addMoreInterestFunc(e)}
                className="btn btn-warning"
              >
                Add More Interests
              </button>
            </div>
          </div>
        </div>
      </div>
      <SaveNext text="Preview Resume" link="/preview-resume" func={extraFunc} />
    </div>
  );
}

export default Extra;
