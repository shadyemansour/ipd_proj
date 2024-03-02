import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledButton = styled.button`
  background: ${(props) => props.color || colors.main.button.backgroud};
  color: ${(props) =>
    props.color ? colors.main.button.backgroud : colors.main.button.color};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid ${colors.main.button.border};
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px ${colors.main.button.shadow};

  &:hover,
  &:active,
  &:focus {
    color: ${colors.main.onHover.textColor};
    border: 1px solid ${colors.main.onHover.color};
    background-color: ${colors.main.onHover.color};
  }
`;
