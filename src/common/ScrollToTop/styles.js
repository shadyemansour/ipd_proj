import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ScrollUpContainer = styled.div`
  padding: 6px;
  position: fixed;
  left: 1px;
  bottom: 20px;
  z-index: 10;
  cursor: pointer;
  background: ${colors.main.secondaryBackground};
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: ${colors.main.scrollToTopHover};
  }

  }
`;
