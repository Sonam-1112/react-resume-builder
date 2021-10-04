import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ isAuth }) {
  return isAuth ? (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/personal">
            Resume Builder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  to="/personal"
                >
                  Personal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/educational"
                  activeClassName="active"
                >
                  Educational
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/projects"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/experience"
                  activeClassName="active"
                >
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/extra"
                  activeClassName="active"
                >
                  Extra
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  activeClassName="active"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/templates"
                >
                  Templates
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="text-light">
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-1"
                    >
                      Template 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-2"
                    >
                      Template 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-3"
                    >
                      Template 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-4"
                    >
                      Template 4
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-5"
                    >
                      Template 5
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-6"
                    >
                      Template 6
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-7"
                    >
                      Template 7
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-8"
                    >
                      Template 8
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-9"
                    >
                      Template 9
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item nav-link text-dark"
                      activeClassName="active"
                      to="/preview-resume-10"
                    >
                      Template 10
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ) : null;
}

export default Navbar;
