import React from "react";
import NavigationPortofolio from "../components/NavigationPortofolio";
import imghd from "../assets/image/hd.jpg";
import { Link } from "react-router-dom";

export default function PortofolioPage() {
  return (
    <div>
      <NavigationPortofolio />
      <div className="container">
        <div className="row g-0 my-5">
          <div className="col-lg-12">
            <p className="text-center affiliate">I'm Andrian</p>
            <p
              className="text-center manrope mt-5"
              style={{ fontSize: "20px" }}
            >
              a web developer
            </p>
          </div>
          <div className="row g-0 mt-2">
            <div className="col-lg-12">
              <img src={imghd} alt="img" width="100%" />
            </div>
          </div>
        </div>
        <div className="row g-0 mb-5">
          <div className="col-lg-12">
            <h1 className="text-center">Portofolio</h1>
            <hr className="mt-5" />
          </div>
        </div>
        <div className="row g-0 mb-5">
          <div className="col-lg-4">
            <Link
              to="https://trash-drab.vercel.app/"
              style={{ textDecoration: "none" }}
            >
              <p
                className="wondersong mt-3 text-center"
                style={{ color: "#5caa47" }}
              >
                PiTrash
              </p>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link
              to="https://jabar-tradifood.vercel.app/"
              style={{ textDecoration: "none" }}
            >
              <p className="manrope mt-3 text-center">Jabar Tradifood</p>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link
              to="https://andriandwl.github.io/Discuss"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="bodoni mt-3 text-center">Disscuss</p>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to="https://discuss-alpha.vercel.app/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="mt-3 text-center" style={{ fontSize: "32px" }}>
                Google Place Autocomplete
              </p>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to="https://poke-api-gilt.vercel.app/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
