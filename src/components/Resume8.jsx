import React, { useContext } from "react";
import { InfoContext } from "./InfoContext";
import "../css/template.css";

function Resume8() {
  const { formData, setFormData } = useContext(InfoContext);
  const printResume = (e) => {
    e.preventDefault();
    window.print();
  };
  return (
    <>
      {formData.personal.firstNameValue ? (
        <div
          className="container resume-8 w-50 template-container"
          id="cv-template"
        >
          <div className="row">
            <div className="text-center py-3 background">
              {/* <img id="imgT" src="profile.jpg" className="img-fluid proImg" alt="" /> */}
              <div className="">
                <h5>
                  <i class="fas fa-user"></i> Personal Details
                </h5>
                <p id="emailT">
                  {formData.personal.emailValue ? (
                    <div>
                      <i className="fas fa-envelope"></i>{" "}
                      {formData.personal.emailValue}
                    </div>
                  ) : null}
                </p>
                <p id="contactT">
                  {formData.personal.phoneValue ? (
                    <div>
                      <i className="fas fa-phone-square-alt"></i>{" "}
                      {formData.personal.phoneValue}
                    </div>
                  ) : null}
                </p>

                {formData.personal.portfolioValue ? (
                  <div>
                    <hr />
                    <p>
                      <i className="fas fa-globe"></i>{" "}
                      <a
                        id="portfolioT"
                        target="_blank"
                        rel="noreferrer"
                        href={formData.personal.portfolioValue}
                      >
                        PortFolio
                      </a>
                    </p>
                  </div>
                ) : null}
                {formData.personal.linkedinValue ? (
                  <p>
                    <i className="fab fa-linkedin"></i>{" "}
                    <a
                      id="linkT"
                      target="_blank"
                      rel="noreferrer"
                      href={formData.personal.linkedinValue}
                    >
                      LinkedIn
                    </a>
                  </p>
                ) : null}
                {formData.personal.facebookValue ? (
                  <p>
                    <i className="fab fa-facebook-square"></i>{" "}
                    <a
                      id="fbT"
                      target="_blank"
                      rel="noreferrer"
                      href={formData.personal.facebookValue}
                    >
                      Facebook
                    </a>
                  </p>
                ) : null}
                {formData.personal.githubValue ? (
                  <p>
                    <i className="fab fa-github-square"></i>{" "}
                    <a
                      id="gitT"
                      target="_blank"
                      rel="noreferrer"
                      href={formData.personal.githubValue}
                    >
                      Github
                    </a>
                  </p>
                ) : null}
                {formData.personal.twitterValue ? (
                  <p>
                    <i className="icon fab fa-twitter-square"></i>{" "}
                    <a
                      id="gitT"
                      target="_blank"
                      rel="noreferrer"
                      href={formData.personal.twitterValue}
                    >
                      Twitter
                    </a>
                  </p>
                ) : null}
                {formData.personal.instagramValue ? (
                  <p>
                    <i className="icon fab fa-instagram-square"></i>{" "}
                    <a
                      id="instaT"
                      target="_blank"
                      rel="noreferrer"
                      href={formData.personal.instagramValue}
                    >
                      Instagram
                    </a>
                  </p>
                ) : null}

                <div>
                  <h5>
                    <i class="fas fa-palette"></i> Skills/languages
                  </h5>
                  {formData.skill.map((val, key) => (
                    <div key={key}>
                      {formData.skill[key].skillValue ? (
                        <div>
                          {formData.skill[key].skillValue}
                          <hr className="mt-1 mb-1 w-50 mx-auto" />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <h5>
                    <i class="fas fa-pencil-ruler"></i> Interests
                  </h5>
                  {formData.interest.map((val, key) => (
                    <div key={key}>
                      {formData.interest[key].interestValue ? (
                        <div>
                          {formData.interest[key].interestValue}
                          <hr className="mt-1 mb-1 w-50 mx-auto" />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-2">
              <h3 id="nameT2" className="text-center">
                <i className="icon fas fa-id-card-alt"></i>{" "}
                {formData.personal.firstNameValue}{" "}
                {formData.personal.lastNameValue}
              </h3>

              <div className="card mt-4">
                <div className="card-header bg-secondary bg-gradient  text-light">
                  <h4>
                    <i className="icon fas fa-graduation-cap"></i> Educational
                    Info
                  </h4>
                </div>
                <div className="card-body">
                  {formData.educational.map((val, key) => (
                    <div key={key}>
                      {formData.educational[key].schoolNameValue ? (
                        <div>
                          <h5>
                            {formData.educational[key].schoolQualificationValue}
                          </h5>
                          <h6 className="d-inline">School Name : </h6>
                          {formData.educational[key].schoolNameValue}
                          <br />
                          <h6 className="d-inline">From : </h6>
                          {formData.educational[key].schoolFromDateValue}
                          <br />
                          <h6 className="d-inline"> To : </h6>
                          {formData.educational[key].schoolToDateValue}
                          <br />
                          <h6 className="d-inline"> Description : </h6>
                          {formData.educational[key].schoolDescriptionValue}
                          <hr />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-header bg-secondary bg-gradient text-light">
                  <h4>
                    <i className="fas fa-tasks"></i> Projects
                  </h4>
                </div>
                <div className="card-body">
                  {formData.projects.map((val, key) => (
                    <div key={key}>
                      {formData.projects[key].proTitleValue ? (
                        <div>
                          <h5>{formData.projects[key].proTitleValue}</h5>
                          <h6 className="d-inline"> Link : </h6>
                          {formData.projects[key].proLinkValue}
                          <br />
                          <h6 className="d-inline"> Description : </h6>
                          {formData.projects[key].proDescriptionValue}
                          <hr />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-header bg-secondary bg-gradient  text-light">
                  <h4>
                    <i className="icon fas fa-user-tie"></i> Experience
                  </h4>
                </div>
                <div className="card-body">
                  {formData.experience.map((val, key) => (
                    <div key={key}>
                      {formData.experience[key].expInstituteValue ? (
                        <div>
                          <h5>
                            {formData.experience[key].expInstituteValue} -{" "}
                            {formData.experience[key].expPositionValue}
                          </h5>
                          <h6 className="d-inline">Duration : </h6>
                          {formData.experience[key].expDurationValue}
                          <br />
                          <h6 className="d-inline">Description : </h6>
                          {formData.experience[key].expDescriptionValue}
                          <hr />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={(e) => printResume(e)}
              className="btn mx-auto bg-success bg-gradient d-print-none background w-25 text-light"
            >
              Print Resume
            </button>
          </div>
        </div>
      ) : (
        <h4 className="text-center" style={{ "margin-top": "20rem" }}>
          No data to display
        </h4>
      )}
    </>
  );
}

export default Resume8;
