import React from "react";
import noBg from "../assets/image/mg.png";
// import bgImage from '../assets/image/img.jpg'

export default function AboutPage() {
  return (
    <div className="container">
      <div className="row g-0 m-5 gap-5">
        <div className="col-lg-4 border rounded-pill border-1">
          <img src={noBg} alt="foto" width="100%" />
        </div>
        <div className="col-lg-7">
          <p style={{ fontSize: "8vh" }}>Andrian Dwi Haryanto</p>
          <p style={{ fontSize: "5vh" }}>Web Developer</p>
          <p style={{ fontSize: "3vh", textAlign: "justify" }}>
            I am IT Developer and Bachelor Degree of Computer Science In Pakuan
            University. I would describe myself as a person who is hardworking
            and has a willingness to learn more. determined to increase
            experience and knowledge, especially in the field of technology. i
            am never afraid of failure and can work in a team as well as
            individually
          </p>
          <p style={{ fontSize: "3vh" }}>
            Sarjana Ilmu Komputer, Universitas Pakuan
          </p>
          <h4>Pelatihan</h4>
          <ul>
            <li>Dicoding</li>
            <li>Jabar Coding Camp</li>
            <li>Inosoft BootCamp</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
