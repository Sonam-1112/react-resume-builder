import React, { useState, useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";
import { withRouter } from "react-router-dom";

function Personal() {
  const { formData, setFormData } = useContext(InfoContext);
  const perosnalFunc = () => {
    console.log("PErsonam");
  };
  return (
    <div className="container">
      <Heading headingName="Personal Details" />
      <div>
        <div className="row text-center">
          {/* 1st col */}
          <div className="col-md-6 px-5">
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-id-card-alt"></i>
              <input
                type="text"
                id="firstNameField"
                placeholder="First Name*"
                className="form-control"
                required={true}
                value={formData.personal.firstNameValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      firstNameValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-envelope"></i>
              <input
                type="text"
                id="emailField"
                placeholder="Email*"
                className="form-control"
                required={true}
                value={formData.personal.emailValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      emailValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-globe"></i>
              <input
                type="text"
                id="portfolioField"
                placeholder="Your Portfolio"
                className="form-control"
                value={formData.personal.portfolioValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      portfolioValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fab fa-linkedin"></i>
              <input
                type="text"
                id="linkedInField"
                placeholder="Linked in"
                className="form-control"
                value={formData.personal.linkedinValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      linkedinValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fab fa-facebook-square"></i>
              <input
                type="text"
                id="facebookField"
                placeholder="Facebook"
                className="form-control"
                value={formData.personal.facebookValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      facebookValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
          {/* 2nd col */}
          <div className="col-md-6 px-5">
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-id-card-alt"></i>
              <input
                type="text"
                id="lastNameField"
                placeholder="Last Name*"
                className="form-control"
                required={true}
                value={formData.personal.lastNameValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      lastNameValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-phone-square-alt"></i>
              <input
                type="text"
                id="phoneField"
                placeholder="Phone Number"
                className="form-control"
                value={formData.personal.phoneValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      phoneValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fab fa-github-square"></i>
              <input
                type="text"
                id="githubField"
                placeholder="Github"
                className="form-control"
                value={formData.personal.githubValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      githubValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fab fa-twitter-square"></i>
              <input
                type="text"
                id="twitterField"
                placeholder="Twitter"
                className="form-control"
                value={formData.personal.twitterValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      twitterValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fab fa-instagram-square"></i>
              <input
                type="text"
                id="instagramField"
                placeholder="Instagram"
                className="form-control"
                value={formData.personal.instagramValue}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      instagramValue: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SaveNext
        text="Save &amp; Next"
        link="/educational"
        func={perosnalFunc}
      />
    </div>
  );
}

export default withRouter(Personal);
