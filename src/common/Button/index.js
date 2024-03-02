import React from "react";
import { StyledButton } from "./styles";

const Button = ({ color, fixedWidth, children, onClick }) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
