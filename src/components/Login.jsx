import React, { useState, useRef, useContext } from "react";
import { login_img } from "../images/index";
import "../css/login_reg.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { InfoContext } from "./InfoContext";

function Login() {
  const { formData, setFormData } = useContext(InfoContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    login(emailRef.current.value, passwordRef.current.value)
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
        setError("Failed to login");
        console.log(err, "err");
      });
  }
  return (
    <div className="container bg-info text-dark text-center mt-0 p-5 h-25 mt-3">
      <h2>Login</h2>
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
                className="form-control  w-75 mx-auto mt-4"
                ref={passwordRef}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success mt-4 w-25 text-center"
            >
              Login
            </button>
          </form>
          <div className="switch-link mt-3">
            <h6 className="d-inline">Not have an account ? </h6>
            <Link className="btn btn-sm btn-secondary" to="/register">
              {" "}
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
