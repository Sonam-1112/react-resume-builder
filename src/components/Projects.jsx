import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Projects() {
  const { formData, setFormData } = useContext(InfoContext);
  const projectsFunc = () => {
    console.log("ProjectsFunc");
  };

  const handleChange = (value, key, fieldName) => {
    const projectsData = [...formData.projects];
    projectsData[key][fieldName] = value;
    setFormData({
      ...formData,
      projects: [...projectsData],
    });
  };

  return (
    <div className="container">
      <Heading headingName="Project Details" />
      <div className="text-center" id="projectsContainer">
        {formData.projects.map((val, key) => (
          <div className="row" key={key}>
            <div className="px-5">
              <h5 className="mt-4">
                <i className="fas fa-tasks"></i> Project {key + 1}
              </h5>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-star"></i>
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control mx-auto"
                  value={formData.projects[key].proTitleValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "proTitleValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-link"></i>
                <input
                  type="text"
                  placeholder="Link"
                  className="form-control mx-auto"
                  value={formData.projects[key].proLinkValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "proLinkValue");
                  }}
                />
              </div>
              <div className="inner-addon right-addon form-group mt-4">
                <i className="icon fas fa-file-alt"></i>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="form-control mx-auto"
                  value={formData.projects[key].proDescriptionValue}
                  onChange={(e) => {
                    handleChange(e.target.value, key, "proDescriptionValue");
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-5" id="addMoreProjectBtn">
          <button
            onClick={(e) => {
              setFormData({
                ...formData,
                projects: [
                  ...formData.projects,
                  {
                    proTitleValue: "",
                    proLinkValue: "",
                    proDescriptionValue: "",
                  },
                ],
              });
            }}
            className="btn btn-warning"
          >
            Add More Project
          </button>
        </div>
        <SaveNext
          text="Save &amp; Next"
          link="/experience"
          func={projectsFunc}
        />
      </div>
    </div>
  );
}

export default Projects;
