import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import usersService from "../../services/users";

import {
  Container,
  UpperBkg,
  LowerBkg,
  FormContainer,
  LoginRegisterButton
} from "./LoginRegisterStyles";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [formErrorMsg, setFormErrorMsg] = useState({
    username: "test",

    password: "test"
  });

  const navigate = useNavigate();

  const handleUserRegistration = async e => {
    e.preventDefault();

    try {
      await usersService.login(username, password);

      // Login successful
      navigate("/dashboard");
    } catch (e) {
      setFormErrorMsg(e);
    }
  };

  return (
    <FormContainer onSubmit={handleUserRegistration}>
      <h1>Personal Fitness App</h1>
      <p className="register-header">Login</p>
      <div className="form-field">
        <label>
          <input
            name="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
        </label>
        <div className="form-field-error">{formErrorMsg.username}</div>
      </div>

      <div className="form-field">
        <label>
          <input
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </label>
        <div className="form-field-error">{formErrorMsg.password}</div>
      </div>

      <div className="register-form-bottom">
        <button
          className="already-have-acc"
          type="button"
          onClick={() => navigate("/register")}
        >
          New user? Register here.
        </button>
        <LoginRegisterButton type="submit" value="Login"></LoginRegisterButton>
      </div>
    </FormContainer>
  );
}
