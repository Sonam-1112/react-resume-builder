import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Experience() {
  const { formData, setFormData } = useContext(InfoContext);
  const experienceFunc = () => {
    console.log("ExperinceFunc");
  };

  const handleChange = (value, key, fieldName) => {
    const experienceData = [...formData.experience];
    experienceData[key][fieldName] = value;
    setFormData({
      ...formData,
      experience: [...experienceData],
    });
  };

  const handleDelete = (e, key) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((data, index) => index !== key),
    });
  };
  return (
    <div className="container">
      <Heading headingName="Experience Details" />
      <div className="text-center" id="expContainer">
        {formData.experience.map((val, key) => (
          <div className="row" key={key}>
            <div className="px-5" id="exp">
              <h5 className="mt-4 d-flex justify-content-between">
                <div>
                  <i className="fas fa-check-circle"></i> Experience {key + 1}
                </div>
                {key ? (
                  <button
                    onClick={(e) => handleDelete(e, key)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                ) : null}
              </h5>

              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-building"></i>
                <input
                  type="text"
                  placeholder="Institute Name"
                  className="form-control"
                  value={formData.experience[key].expInstituteValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "expInstituteValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-user-tie"></i>
                <input
                  type="text"
                  placeholder="Position"
                  className="form-control"
                  value={formData.experience[key].expPositionValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "expPositionValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-clock"></i>
                <input
                  type="text"
                  placeholder="Duration"
                  className="form-control"
                  value={formData.experience[key].expDurationValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "expDurationValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-file-invoice"></i>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="form-control"
                  value={formData.experience[key].expDescriptionValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "expDescriptionValue");
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-5" id="addMoreExpBtn">
          <button
            onClick={(e) => {
              setFormData({
                ...formData,
                experience: [
                  ...formData.experience,
                  {
                    expInstituteValue: "",
                    expPositionValue: "",
                    expDurationValue: "",
                    expDescriptionValue: "",
                  },
                ],
              });
            }}
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
