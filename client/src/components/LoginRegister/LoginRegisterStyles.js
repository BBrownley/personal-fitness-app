import styled from "styled-components";

import { primaryButtonStyle } from "../reusable_components/Buttons";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const UpperBkg = styled.div`
  height: 40vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -100;
  background: ${props => props.theme.bluePrimary};
`;

export const LowerBkg = styled.div`
  height: 60vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
  background: #eee;
`;

export const FormContainer = styled.form`
  background: white;
  height: 30rem;
  width: 40rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${props => props.theme.boxShadowLight};
  padding: 3rem;

  h1 {
    position: absolute;
    top: -5rem;
    left: -0.1875rem;
    right: -0.1875rem;

    text-align: center;
    color: #eee;
    user-select: none;
  }

  .register-header {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 200;
  }

  .form-field {
    margin-bottom: 1rem;
    position: relative;
    input {
      width: 100%;
      padding-right: 7rem;
    }
    &-error {
      color: ${props => props.theme.red};
      position: absolute;
      right: 0;
      bottom: 50%;
      transform: translateY(50%);
      z-index: 100;
      user-select: none;
      font-weight: bold;
    }
  }

  .register-form-bottom {
    position: absolute;
    bottom: 3rem;
    right: 3rem;

    .already-have-acc {
      background: none;
      border: none;
      margin-right: 1.5rem;
      font-weight: 400;
      color: #999;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const LoginRegisterButton = styled.input`
  ${primaryButtonStyle}
`;
