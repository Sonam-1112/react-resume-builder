import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Projects() {
  const { formData, setFormData } = useContext(InfoContext);
  const projectsFunc = () => {
    console.log("ProjectsFunc");
  };
  return (
    <div className="container">
      <Heading headingName="Project Details" />
      <div className="text-center">
        <div className="row py-2">
          <div className="col px-5">
            <h4>
              <i className="fas fa-tasks"></i> Project 1
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
              <input
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
        <hr />
        <div className="row py-2">
          <div className="col px-5">
            <h4>
              <i className="fas fa-tasks"></i> Project 2
            </h4>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-star"></i>
              <input
                type="text"
                id="pro2TitleField"
                placeholder="Title"
                className="form-control mx-auto"
                value={formData.projects.pro2TitleValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro2TitleValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-link"></i>
              <input
                type="text"
                id="pro2LinkField"
                placeholder="Link"
                className="form-control mx-auto"
                value={formData.projects.pro2LinkValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro2LinkValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-file-alt"></i>
              <input
                type="text"
                id="pro2DescriptionField"
                placeholder="Description"
                className="form-control mx-auto"
                value={formData.projects.pro2DescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro2DescriptionValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-2">
          <div className="col px-5">
            <h4>
              <i className="fas fa-tasks"></i> Project 3
            </h4>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-star"></i>
              <input
                type="text"
                id="pro3TitleField"
                placeholder="Title"
                className="form-control mx-auto"
                value={formData.projects.pro3TitleValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro3TitleValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-link"></i>
              <input
                type="text"
                id="pro3LinkField"
                placeholder="Link"
                className="form-control mx-auto"
                value={formData.projects.pro3LinkValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro3LinkValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-file-alt"></i>
              <input
                type="text"
                id="pro3DescriptionField"
                placeholder="Description"
                className="form-control mx-auto"
                value={formData.projects.pro3DescriptionValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projects: {
                      ...formData.projects,
                      pro3DescriptionValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SaveNext text="Save &amp; Next" link="/experience" func={projectsFunc} />
    </div>
  );
}

export default Projects;
