import React, { useState, useRef, useContext } from "react";
import { login_img } from "../images/index";
import "../css/login_reg.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { InfoContext } from "./InfoContext";

function Register() {
  const { formData, setFormData } = useContext(InfoContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const conpasswordRef = useRef();
  const [error, setError] = useState("");
  const history = useHistory();
  const { signup } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== conpasswordRef.current.value) {
      return setError("Passwords do not match...");
    }
    setError("");
    signup(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        console.log("then");
        setFormData({
          ...formData,
          isAuth: {
            ...formData.isAuth,
            isAuthValue: true,
          },
        });
        history.push("/personal");
      })
      .catch((err) => {
        setError("Failed to create an account");
        console.log(err, "err");
      });
  }
  return (
    <div className="container bg-info text-dark text-center mt-3 p-4">
      <h2>Register</h2>
      <h5 className="text-danger">{error}</h5>
      <div className="content row">
        <div className="px-5">
          <img src={login_img} alt="" className="img-fluid w-50" />
          <form className="entry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control w-75 mx-auto mt-4"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control w-75 mx-auto mt-4"
                ref={passwordRef}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="conpassword"
                placeholder="Confirm Password"
                className="form-control w-75 mx-auto mt-4"
                ref={conpasswordRef}
              />
            </div>
            <button type="submit" className="btn btn-success mt-4 w-25">
              Register
            </button>
          </form>
          <div className="switch-link mt-3">
            <h6 className="d-inline">Already have an account ? </h6>
            <Link className="btn btn-sm btn-secondary" to="/">
              {" "}
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
