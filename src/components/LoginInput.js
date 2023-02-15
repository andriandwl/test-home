import React, { useState } from "react";
import ProptTypes from "prop-types";

export default function LoginInput({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const rmCheck = document.getElementById("rememberMe");
  // const emailInput = document.getElementById("floatingInput");

  // if (localStorage.checkbox && localStorage.checkbox !== "") {
  //   rmCheck.setAttribute("checked", "checked");
  //   emailInput.value = localStorage.username;
  // } else {
  //   rmCheck.removeAttribute("checked");
  //   emailInput.value = "";
  // }

  // function lsRememberMe() {
  //   if (rmCheck.checked && emailInput.value !== "") {
  //     localStorage.username = emailInput.value;
  //     localStorage.checkbox = rmCheck.value;
  //   } else {
  //     localStorage.username = "";
  //     localStorage.checkbox = "";
  //   }
  // }

  function checkPass() {
    var pass1 = document.getElementById("floatingPassword");
    var message = document.getElementById("error-nwl");
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass1.value.length > 5) {
      pass1.style.backgroundColor = goodColor;
      message.style.color = goodColor;
      message.innerHTML = "character number ok!";
    } else {
      pass1.style.backgroundColor = badColor;
      message.style.color = badColor;
      message.innerHTML = " you have to enter at least 6 digit!";
    }
  }
  return (
    <div className="col-lg-6">
      <h1 className="text-center">Login</h1>
      <form className="p-4 p-md-5">
        <div className="form-floating mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onKeyUp={() => checkPass()}
          />
          <label htmlFor="floatingPassword">Password</label>
          <span id="error-nwl"></span>
        </div>
        <div className="mb-2 text-center">
          <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button
          className="w-100 btn btn-lg manrope"
          type="button"
          onClick={() => {
            return login({ email, password });
          }}
          style={{ backgroundColor: "#20262E", color: "white" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: ProptTypes.func.isRequired,
};
