import React, { useState, useEffect } from "react";

import usersService from "../../services/users";

export default function LoginRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const handleUserRegistration = async e => {
    e.preventDefault();

    try {
      const res = await usersService.register(
        username,
        email,
        password,
        confirmPassword
      );
      if (res.error) {
        throw new Error(res.error);
      }
    } catch (e) {
      setFormErrorMsg(e.message || "Unable to register");
    }
  };

  useEffect(() => {
    setFormErrorMsg("");
  }, [username, email, password, confirmPassword]);

  return (
    <div className="register">
      <form onSubmit={handleUserRegistration}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          Confirm Password:
          <input
            name="confirmPassword"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        <input type="submit" value="Register"></input>
      </form>
      <div className="form-error">{formErrorMsg}</div>
    </div>
  );
}
