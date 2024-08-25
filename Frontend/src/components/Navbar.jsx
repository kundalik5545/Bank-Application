import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Bank Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Left-aligned menu items */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bank">
                  Bank
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Card
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Loan
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Calculator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FD
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Right-aligned Login/Register item */}
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  <i className="bi bi-person me-1"></i>Login/Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
