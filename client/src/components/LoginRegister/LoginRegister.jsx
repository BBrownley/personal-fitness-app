import React from "react";
import { useLocation } from "react-router-dom";

import { Container, UpperBkg, LowerBkg } from "./LoginRegisterStyles";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

/**
 * Container for the login and register forms. This is the first page
 * the user sees upon opening the application
 */

export default function LoginRegister() {
  let location = useLocation();

  return (
    <Container>
      <UpperBkg></UpperBkg>
      <LowerBkg />
      {location.pathname === "/register" && <RegisterForm />}
      {location.pathname === "/login" && <LoginForm />}
    </Container>
  );
}
