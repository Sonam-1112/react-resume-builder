import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Extra() {
  const { formData, setFormData } = useContext(InfoContext);
  const extraFunc = () => {
    console.log("ExtraFunc");
  };

  const handleSkillChange = (value, key, fieldName) => {
    const skillData = [...formData.skill];
    skillData[key][fieldName] = value;
    setFormData({
      ...formData,
      skill: [...skillData],
    });
  };
  const handleInterestChange = (value, key, fieldName) => {
    const interestData = [...formData.interest];
    interestData[key][fieldName] = value;
    setFormData({
      ...formData,
      interest: [...interestData],
    });
  };

  const handleSkillDelete = (e, key) => {
    setFormData({
      ...formData,
      skill: formData.skill.filter((data, index) => index !== key),
    });
  };
  const handleInterestDelete = (e, key) => {
    setFormData({
      ...formData,
      interest: formData.interest.filter((data, index) => index !== key),
    });
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
            {formData.skill.map((val, key) => (
              <div
                className="inner-addon right-addon form-group mt-2"
                key={key}
              >
                <div class="input-group mb-3 w-75 mx-auto">
                  <input
                    type="text"
                    placeholder="Your Skill"
                    className="form-control"
                    value={formData.skill[key].skillValue}
                    onChange={(e) => {
                      handleSkillChange(e.target.value, key, "skillValue");
                    }}
                  />
                  <div class="input-group-append">
                    <button
                      onClick={(e) => handleSkillDelete(e, key)}
                      className=" btn btn-danger"
                    >
                      -
                    </button>
                  </div>
                  <i className="icon fas fa-certificate"></i>
                </div>
                <hr />
              </div>
            ))}
            <div className="text-center mt-5" id="addMoreSkillBtn">
              <button
                onClick={(e) => {
                  setFormData({
                    ...formData,
                    skill: [
                      ...formData.skill,
                      {
                        skillValue: "",
                      },
                    ],
                  });
                }}
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
            {formData.interest.map((val, key) => (
              <div
                className="inner-addon right-addon form-group mt-2"
                key={key}
              >
                <div class="input-group mb-3 w-75 mx-auto">
                  <input
                    type="text"
                    placeholder="Your Interest"
                    className="form-control"
                    value={formData.interest[key].interestValue}
                    onChange={(e) => {
                      handleInterestChange(
                        e.target.value,
                        key,
                        "interestValue"
                      );
                    }}
                  />
                  <div class="input-group-append">
                    <button
                      onClick={(e) => handleInterestDelete(e, key)}
                      className=" btn btn-danger"
                    >
                      -
                    </button>
                  </div>
                  <i className="icon fas fa-certificate"></i>
                </div>
                <hr />
              </div>
            ))}

            <div className="text-center mt-5" id="addMoreInterestBtn">
              <button
                onClick={(e) => {
                  setFormData({
                    ...formData,
                    interest: [
                      ...formData.interest,
                      {
                        interestValue: "",
                      },
                    ],
                  });
                }}
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
