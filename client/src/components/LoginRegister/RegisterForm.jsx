import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import usersService from "../../services/users";

import { FormContainer, LoginRegisterButton } from "./LoginRegisterStyles";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrorMsg, setFormErrorMsg] = useState({
    username: "test",
    email: "test",
    password: "test",
    confirmPassword: "test"
  });

  const navigate = useNavigate();

  const handleUserRegistration = async e => {
    e.preventDefault();

    try {
      await usersService.register(username, email, password, confirmPassword);

      // User successfully registered, redirect to dashboard
      navigate("/dashboard");
    } catch (e) {
      // set errors on form thrown from usersService
      setFormErrorMsg(e);
    }
  };

  return (
    <FormContainer onSubmit={handleUserRegistration}>
      <h1>Personal Fitness App</h1>
      <p className="register-header">Register</p>
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
            name="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </label>
        <div className="form-field-error">{formErrorMsg.email}</div>
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
      <div className="form-field">
        {" "}
        <label>
          <input
            name="confirmPassword"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
        </label>
        <div className="form-field-error">{formErrorMsg.confirmPassword}</div>
      </div>

      <div className="register-form-bottom">
        <button
          className="already-have-acc"
          type="button"
          onClick={() => navigate("/login")}
        >
          Have an account? Login here.
        </button>
        <LoginRegisterButton
          type="submit"
          value="Register"
        ></LoginRegisterButton>
      </div>
    </FormContainer>
  );
}
