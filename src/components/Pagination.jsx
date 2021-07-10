import React from "react";
import { NavLink, Link } from "react-router-dom";

function Pagination() {
  return (
    <div className="container mt-5 w-25">
      <nav aria-label="Page navigation">
        <ul className="pagination mb-0">
          <li className="page-item">
            <NavLink
              activeClassName="pageactive"
              className="page-link"
              to="/personal"
            >
              Start
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink
              activeClassName="pageactive"
              className="page-link"
              to="/educational"
            >
              2
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink
              activeClassName="pageactive"
              className="page-link"
              to="/projects"
            >
              3
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink
              activeClassName="pageactive"
              className="page-link"
              to="/experience"
            >
              4
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink
              activeClassName="pageactive"
              className="page-link"
              to="/extra"
            >
              End
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
