import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="row g-0 justify-content-center">
        <LoginInput login={onLogin} />
      </div>
    </div>
  );
}
