import { css } from "styled-components";

export const primaryButtonStyle = css`
  background: ${props => props.theme.bluePrimary};
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  border: none;
  padding: 0.5rem 1rem;
  transition: 0.125s ease-out;
  &:hover,:focus {
    cursor: pointer;
    filter: brightness(105%);
    background: ${props => props.theme.blueSecondary};
    transform: scaleX(105%);
  }
`;
