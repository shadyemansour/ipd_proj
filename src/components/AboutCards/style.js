import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
// Styled card container
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: auto;
  text-align: center;
`;

export const Name = styled.h1`
  font-size: 32px;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

// Styled image
export const Image = styled.img`
  width: 100%;
`;

// Styled title
export const Title = styled.p`
  color: grey;
  font-size: 16px;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

// Styled button
export const Button = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: ${colors.main.button.color};
  background-color: ${colors.main.button.backgroud};
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

export const CardText = styled.p`
  font-size: 16px; /* Adjust text size as needed */
  text-align: justify;
  padding-top: 0px;
  padding-right: 20px;
  padding-left: 20px;
`;

// Styled anchor
export const Anchor = styled.a`
  text-decoration: none;
  font-size: 12 px;
  color: black;

  &:hover {
    opacity: 0.7;
  }
`;
