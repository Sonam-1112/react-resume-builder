import React, { useContext } from "react";
import Heading from "./Heading";
import SaveNext from "./SaveNext";
import { InfoContext } from "./InfoContext";

function Extra() {
  const { formData, setFormData } = useContext(InfoContext);
  const extraFunc = () => {
    console.log("ExtraFunc");
  };
  return (
    <div className="container">
      <Heading headingName="Extra Details" />
      <div className="text-center">
        <div className="row">
          {/* Col 1 */}
          <div className="col-md-6 px-5">
            <h5>
              <i className="fas fa-check-circle"></i> Skills/Languages
            </h5>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill1Field"
                placeholder="Skill 1"
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
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill2Field"
                placeholder="Skill 2"
                className="form-control"
                value={formData.extra.skill2Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      skill2Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill3Field"
                placeholder="Skill 3"
                className="form-control"
                value={formData.extra.skill3Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      skill3Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill4Field"
                placeholder="Skill 4"
                className="form-control"
                value={formData.extra.skill4Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      skill4Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill5Field"
                placeholder="Skill 5"
                className="form-control"
                value={formData.extra.skill5Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      skill5Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-certificate"></i>
              <input
                type="text"
                id="skill6Field"
                placeholder="Skill 6"
                className="form-control"
                value={formData.extra.skill6Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      skill6Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-md-6 px-5">
            <h5>
              <i className="fas fa-check-circle"></i> Interests
            </h5>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest1Field"
                placeholder="Interest 1"
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
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest2Field"
                placeholder="Interest 2"
                className="form-control"
                value={formData.extra.interest2Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      interest2Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest3Field"
                placeholder="Interest 3"
                className="form-control"
                value={formData.extra.interest3Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      interest3Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest4Field"
                placeholder="Interest 4"
                className="form-control"
                value={formData.extra.interest4Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      interest4Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest5Field"
                placeholder="Interest 5"
                className="form-control"
                value={formData.extra.interest5Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      interest5Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="inner-addon right-addon form-group mt-4">
              <i className="icon fas fa-user-plus"></i>
              <input
                type="text"
                id="interest6Field"
                placeholder="Interest 6"
                className="form-control"
                value={formData.extra.interest6Value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    extra: {
                      ...formData.extra,
                      interest6Value: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SaveNext text="Preview Resume" link="/preview-resume" func={extraFunc} />
    </div>
  );
}

export default Extra;
