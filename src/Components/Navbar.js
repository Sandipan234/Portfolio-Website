import NavBar_logo from "../images/gitdp.jpg";
import React from "react";
import "./bgi";
import "./Aboutme";
import "./projects";
import "./skill";
import "./footer";
// import { BrowserRouter as Router, Switch, Route, a } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-black fixed-top navbar-expand-lg text-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">
            <img src={NavBar_logo} alt="Bootstrap" width="40" height="34" />
          </a>
          <a href="#/" className="navbar-brand nav-link text-light">
            Home
          </a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
                    </button> */}

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent "
          >
            <div className="mx-auto text-light ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-light" href="#aboutme">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#techskill">
                    Technical Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#projects">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex mx-3">
              <a className="nav-link text-light" href="#footer">
                Connect With Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
