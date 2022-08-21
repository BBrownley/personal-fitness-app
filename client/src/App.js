import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

import usersService from "./services/users";

function App() {
  const [apiRes, setApiRes] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrorMsg, setFormErrorMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(text => {
        console.log(text);
        setApiRes(text);
      });
  }, []);

  const handleUserRegistration = async e => {
    e.preventDefault();

    try {
      await usersService.register(username, email, password, confirmPassword);
    } catch (e) {
      setFormErrorMsg(e.message || "Unable to register");
      setTimeout(() => {
        setFormErrorMsg("");
      }, 5000);
    }
  };

  return (
    <div className="App">
      <h3>test page</h3>
      <p>{apiRes}</p>

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
    </div>
  );
}

export default App;
