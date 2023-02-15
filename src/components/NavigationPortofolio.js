import React from "react";
import { Link } from "react-router-dom";

export default function NavigationPortofolio() {
  return (
    <header className="container">
      <div className="row g-0 mt-4">
        <div className="col-lg-3 m-2">
          <p className="encrypto">LOGO</p>
        </div>
        <div className="col-lg-8">
          <ul
            style={{ listStyle: "none" }}
            className="d-flex gap-4 mt-2 justify-content-end"
          >
            <li>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/work"
              >
                Work
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
