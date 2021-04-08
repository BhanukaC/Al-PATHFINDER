import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const navStyle = {
  color: "white"
};

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" style={navStyle}>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" width="50" height="50" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            dataBsToggle="collapse"
            dataBsTarget="#navbarSupportedContent"
            ariaControls="navbarSupportedContent"
            ariaExpanded="false"
            ariLabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <ul class="navbar-nav ml-auto">
              <Link to="/">
                <li class="nav-item">
                  <a class="nav-link active my-btn-hover mx-2" href="#">
                    <b>Home</b>
                  </a>
                </li>
              </Link>
              <Link to="/about" style={navStyle}>
                <li class="nav-item">
                  <a class="nav-link active my-btn-hover mx-2" href="#">
                    <b>About</b>
                  </a>
                </li>
              </Link>
              <Link to="/login">
                <li class="nav-item">
                  <a class="nav-link active my-btn-hover mx-2" href="#">
                    <b>Login</b>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
