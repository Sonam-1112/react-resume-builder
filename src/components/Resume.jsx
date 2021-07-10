import React, { useContext } from "react";
import { InfoContext } from "./InfoContext";

function Resume() {
  const { formData, setFormData } = useContext(InfoContext);
  const printResume = (e) => {
    e.preventDefault();
    console.log(formData.personal.firstNameValue);
    console.log(formData.personal.lastNameValue);
    // window.print();
  };
  return (
    <>
      {formData.personal.firstNameValue ? (
        <div className="container" id="cv-template">
          <div className="row">
            <div className="col-md-4 text-center py-5 background">
              {/* <img id="imgT" src="profile.jpg" className="img-fluid proImg" alt="" /> */}
              <div className="container">
                <p id="nameT1">
                  {formData.personal.firstNameValue}{" "}
                  {formData.personal.lastNameValue}
                </p>
                <p id="emailT">
                  <i className="fas fa-envelope"></i>{" "}
                  {formData.personal.emailValue}
                </p>
                <p id="contactT">
                  <i className="icon fas fa-phone-square-alt"></i>{" "}
                  {formData.personal.phoneValue}
                </p>

                {formData.personal.portfolioValue ? (
                  <div>
                    <hr />
                    <p>
                      <i className="fas fa-globe"></i>{" "}
                      <a
                        id="portfolioT"
                        target="_blank"
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
                      href={formData.personal.instagramValue}
                    >
                      Instagram
                    </a>
                  </p>
                ) : null}

                <div className="inner-container">
                  {formData.extra.skill1Value ? (
                    <div>
                      <hr />
                      <h4>Skills/languages</h4>
                    </div>
                  ) : null}
                  {formData.extra.skill1Value ? (
                    <p>
                      <i className="fas fa-certificate"></i>{" "}
                      {formData.extra.skill1Value}
                    </p>
                  ) : null}
                  {formData.extra.skill2Value ? (
                    <p>
                      <i className="fas fa-certificate"></i>{" "}
                      {formData.extra.skill2Value}
                    </p>
                  ) : null}
                  {formData.extra.skill3Value ? (
                    <p>
                      <i className="fas fa-certificate"></i>{" "}
                      {formData.extra.skill3Value}
                    </p>
                  ) : null}
                  {formData.extra.skill4Value ? (
                    <p>
                      <i className="fas fa-certificate"></i>{" "}
                      {formData.extra.skill4Value}
                    </p>
                  ) : null}
                  {formData.extra.skill5Value ? (
                    <p>
                      <i className="fas fa-certificate"></i>{" "}
                      {formData.extra.skill5Value}
                    </p>
                  ) : null}
                  {formData.extra.skill6Value ? (
                    <p>
                      <i className="fas fa-certificate"></i>{" "}
                      {formData.extra.skill6Value}
                    </p>
                  ) : null}
                </div>
                <div className="inner-container">
                  {formData.extra.interest1Value ? (
                    <div>
                      <hr />
                      <h4>Interests</h4>
                    </div>
                  ) : null}
                  {formData.extra.interest1Value ? (
                    <p>
                      <i className="fas fa-user-plus"></i>{" "}
                      {formData.extra.interest1Value}
                    </p>
                  ) : null}
                  {formData.extra.interest2Value ? (
                    <p>
                      <i className="fas fa-user-plus"></i>{" "}
                      {formData.extra.interest2Value}
                    </p>
                  ) : null}
                  {formData.extra.interest3Value ? (
                    <p>
                      <i className="fas fa-user-plus"></i>{" "}
                      {formData.extra.interest3Value}
                    </p>
                  ) : null}
                  {formData.extra.interest4Value ? (
                    <p>
                      <i className="fas fa-user-plus"></i>{" "}
                      {formData.extra.interest4Value}
                    </p>
                  ) : null}
                  {formData.extra.interest5Value ? (
                    <p>
                      <i className="fas fa-user-plus"></i>{" "}
                      {formData.extra.interest5Value}
                    </p>
                  ) : null}
                  {formData.extra.interest6Value ? (
                    <p>
                      <i className="fas fa-user-plus"></i>{" "}
                      {formData.extra.interest6Value}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-md-8 py-5">
              <h1 id="nameT2" className="text-center">
                <i className="icon fas fa-id-card-alt"></i>{" "}
                {formData.personal.firstNameValue}{" "}
                {formData.personal.lastNameValue}
              </h1>
              {formData.educational.schoolNameValue ? (
                <div className="card mt-4">
                  <div className="card-header background">
                    <h3>Educational</h3>
                  </div>
                  <div className="card-body">
                    <h4>
                      <i className="icon fas fa-graduation-cap"></i> School Info
                    </h4>
                    <h6 className="d-inline">School Name : </h6>
                    {formData.educational.schoolNameValue}
                    <br />
                    <h6 className="d-inline">From : </h6>
                    {formData.educational.schoolFromDateValue}
                    <br />
                    <h6 className="d-inline"> To : </h6>
                    {formData.educational.schoolToDateValue}
                    <br />
                    <h6 className="d-inline"> Qualification : </h6>
                    {formData.educational.schoolQualificationValue}
                    <br />
                    <h6 className="d-inline"> Description : </h6>
                    {formData.educational.schoolDescriptionValue}
                    <hr />
                    <h4>
                      <i className="icon fas fa-graduation-cap"></i> College
                      Info
                    </h4>
                    <h6 className="d-inline">School Name : </h6>
                    {formData.educational.clgNameValue}
                    <br />
                    <h6 className="d-inline">From : </h6>
                    {formData.educational.clgFromDateValue}
                    <br />
                    <h6 className="d-inline"> To : </h6>
                    {formData.educational.clgToDateValue}
                    <br />
                    <h6 className="d-inline"> Qualification : </h6>
                    {formData.educational.clgQualificationValue}
                    <br />
                    <h6 className="d-inline"> Description : </h6>
                    {formData.educational.clgDescriptionValue}
                  </div>
                </div>
              ) : null}

              {formData.projects.pro1TitleValue ? (
                <div className="card mt-4">
                  <div className="card-header background">
                    <h3>Projects</h3>
                  </div>
                  <div className="card-body">
                    <h4>
                      <i className="fas fa-tasks"></i> Project 1
                    </h4>
                    <h6 className="d-inline"> Title : </h6>
                    {formData.projects.pro1TitleValue}
                    <br />
                    <h6 className="d-inline"> Link : </h6>
                    {formData.projects.pro1LinkValue}
                    <br />
                    <h6 className="d-inline"> Description : </h6>
                    {formData.projects.pro1DescriptionValue}
                    {formData.projects.pro2TitleValue ? (
                      <div>
                        <hr />
                        <h4>
                          <i className="fas fa-tasks"></i> Project 2
                        </h4>
                        <h6 className="d-inline"> Title : </h6>
                        {formData.projects.pro2TitleValue}
                        <br />
                        <h6 className="d-inline"> Link : </h6>
                        {formData.projects.pro2LinkValue}
                        <br />
                        <h6 className="d-inline"> Description : </h6>
                        {formData.projects.pro2DescriptionValue}
                      </div>
                    ) : null}
                    {formData.projects.pro3TitleValue ? (
                      <div>
                        <hr />
                        <h4>
                          <i className="fas fa-tasks"></i> Project 3
                        </h4>
                        <h6 className="d-inline"> Title : </h6>
                        {formData.projects.pro3TitleValue}
                        <br />
                        <h6 className="d-inline"> Link : </h6>
                        {formData.projects.pro3LinkValue}
                        <br />
                        <h6 className="d-inline"> Description : </h6>
                        {formData.projects.pro3DescriptionValue}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {formData.experience.exp1InstituteValue ? (
                <div className="card mt-4">
                  <div className="card-header background">
                    <h3>Experience</h3>
                  </div>
                  <div className="card-body">
                    <h5>
                      <i className="icon fas fa-user-tie"></i>{" "}
                      {formData.experience.exp1InstituteValue} -{" "}
                      {formData.experience.exp1PositionValue}
                    </h5>
                    <h6 className="d-inline">Duration : </h6>
                    {formData.experience.exp1DurationValue}
                    <br />
                    <h6 className="d-inline">Description : </h6>
                    {formData.experience.exp1DescriptionValue}
                    {formData.experience.exp2InstituteValue ? (
                      <div>
                        <hr />
                        <h5>
                          <i className="icon fas fa-user-tie"></i>{" "}
                          {formData.experience.exp2InstituteValue} -{" "}
                          {formData.experience.exp2PositionValue}
                        </h5>
                        <h6 className="d-inline">Duration : </h6>
                        {formData.experience.exp2DurationValue}
                        <br />
                        <h6 className="d-inline">Description : </h6>
                        {formData.experience.exp2DescriptionValue}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
            <button
              onClick={(e) => printResume(e)}
              className="btn mx-auto btn-info background w-25 text-dark"
            >
              Print Resume
            </button>
          </div>
        </div>
      ) : (
        <h4 className="text-center mt-5">No data to display</h4>
      )}
    </>
  );
}

export default Resume;
