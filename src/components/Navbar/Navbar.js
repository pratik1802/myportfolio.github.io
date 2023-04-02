import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navtop">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Pratik
          </a>
          <a className="navbar-brand img1" href="#">
            <img src="./Images/toggle-button.png" height="50px" alt=""></img>
          </a>

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
          <div
            className="collapse navbar-collapse nav2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="nav-link active">
                  Services{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Skills" className="nav-link active">
                  Skills{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Project" className="nav-link active">
                  Portfolio{" "}
                </Link>
              </li>
            </ul>
            <ul>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link active">
                  <button type="button" class="btn btn-warning btn1 topbutton">
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
