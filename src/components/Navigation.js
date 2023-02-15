import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="row g-0">
      <div className="col-lg-2 col-md-4 col-sm-12">
        <p className="odo mt-2 text-center" style={{ color: "#20262E" }}>
          V2 DOC
        </p>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <nav
          className="navbar navbar-expand-lg"
          style={{ borderRadius: "0px 0px 30px 30px" }}
        >
          <div className="container-fluid justify-content-end">
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/portofolio"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Portofolio
                  </Link>
                </li>
              </ul>
              <Link
                className="me-2"
                style={{
                  textDecoration: "none",
                  fontFamily: "Manrope",
                  color: "white",
                }}
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-12">
        <p className="odo mt-2 text-center">REST API</p>
      </div>
    </div>
  );
}
