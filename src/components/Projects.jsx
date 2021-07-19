import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Projects() {
  const { formData, setFormData } = useContext(InfoContext);
  const projectsFunc = () => {
    console.log("ProjectsFunc");
  };

  const addMoreProjectFunc = () => {
    // Row Div
    let divRow = document.createElement("div");
    divRow.classList.add("row");

    // Project Div
    let divProject = document.createElement("div");
    divProject.classList.add("px-5");

    // Experience Differentiable horizontal line
    let hr = document.createElement("hr");

    // ProjectTitle Field
    let divProjectTitleField = document.createElement("div");
    divProjectTitleField.classList.add("inner-addon");
    divProjectTitleField.classList.add("right-addon");
    divProjectTitleField.classList.add("form-group");
    divProjectTitleField.classList.add("mt-4");

    let projectTitleIcon = document.createElement("i");
    projectTitleIcon.classList.add("icon");
    projectTitleIcon.classList.add("fas");
    projectTitleIcon.classList.add("fa-star");

    let projectTitleInputField = document.createElement("input");
    projectTitleInputField.classList.add("form-control");
    projectTitleInputField.setAttribute("type", "text");
    projectTitleInputField.setAttribute("placeholder", "Title");

    divProjectTitleField.appendChild(projectTitleIcon);
    divProjectTitleField.appendChild(projectTitleInputField);

    // ProjectLink Field
    let divProjectLinkField = document.createElement("div");
    divProjectLinkField.classList.add("inner-addon");
    divProjectLinkField.classList.add("right-addon");
    divProjectLinkField.classList.add("form-group");
    divProjectLinkField.classList.add("mt-4");

    let projectLinkIcon = document.createElement("i");
    projectLinkIcon.classList.add("icon");
    projectLinkIcon.classList.add("fas");
    projectLinkIcon.classList.add("fa-link");

    let projectLinkInputField = document.createElement("input");
    projectLinkInputField.classList.add("form-control");
    projectLinkInputField.setAttribute("type", "text");
    projectLinkInputField.setAttribute("placeholder", "Link");

    divProjectLinkField.appendChild(projectLinkIcon);
    divProjectLinkField.appendChild(projectLinkInputField);

    // ProjectDescription Field
    let divProjectDescriptionField = document.createElement("div");
    divProjectDescriptionField.classList.add("inner-addon");
    divProjectDescriptionField.classList.add("right-addon");
    divProjectDescriptionField.classList.add("form-group");
    divProjectDescriptionField.classList.add("mt-4");

    let projectDescriptionIcon = document.createElement("i");
    projectDescriptionIcon.classList.add("icon");
    projectDescriptionIcon.classList.add("fas");
    projectDescriptionIcon.classList.add("fa-file-alt");

    let projectDescriptionInputField = document.createElement("textarea");
    projectDescriptionInputField.classList.add("form-control");
    projectDescriptionInputField.setAttribute("type", "text");
    projectDescriptionInputField.setAttribute("placeholder", "Description");

    divProjectDescriptionField.appendChild(projectDescriptionIcon);
    divProjectDescriptionField.appendChild(projectDescriptionInputField);

    // ProjectDiv appending starts
    divProject.appendChild(hr);
    divProject.appendChild(divProjectTitleField);
    divProject.appendChild(divProjectLinkField);
    divProject.appendChild(divProjectDescriptionField);

    // Row div which contains one Project
    divRow.appendChild(divProject);

    // RowDiv added dynamically
    let projectsContainer = document.getElementById("projectsContainer");
    let addMoreProjectBtn = document.getElementById("addMoreProjectBtn");
    projectsContainer.insertBefore(divRow, addMoreProjectBtn);
  };

  return (
    <div className="container">
      <Heading headingName="Project Details" />
      <div className="text-center" id="projectsContainer">
        <div className="row">
          <div className="px-5">
            <h4>
              <i className="fas fa-tasks"></i> Project
            </h4>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-star"></i>
              <input
                type="text"
                id="pro1TitleField"
                placeholder="Title"
                className="form-control mx-auto"
                value={formData.projects.pro1TitleValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro1TitleValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-link"></i>
              <input
                type="text"
                id="pro1LinkField"
                placeholder="Link"
                className="form-control mx-auto"
                value={formData.projects.pro1LinkValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro1LinkValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-file-alt"></i>
              <textarea
                type="text"
                id="pro1DescriptionField"
                placeholder="Description"
                className="form-control mx-auto"
                value={formData.projects.pro1DescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro1DescriptionValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-5" id="addMoreProjectBtn">
          <button
            onClick={(e) => addMoreProjectFunc(e)}
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
