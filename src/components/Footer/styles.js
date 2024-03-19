import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export const FooterSection = styled.footer`
  background: ${colors.main.secondaryBackground};
  padding: 2.5rem 0;
`;

export const Title = styled.h4`
  font-size: 22px;
  text-transform: capitalize;
  color: ${colors.main.text.header};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled.a`
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: ${colors.main.backgroud};

  &:hover,
  &:active,
  &:focus {
    color: ${colors.main.onHover.color};
  }
`;

export const Extra = styled.section`
  background: ${colors.main.secondaryBackground};
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Para = styled.div`
  color: ${colors.main.text.light};
  font-size: 12px;
  width: 100%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: ${colors.main.secondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: ${colors.main.onHover.color};
    text-underline-position: under;
    text-decoration: ${colors.main.onHover.color} wavy underline;
  }
`;

export const Chat = styled.p`
  color: ${colors.main.text.light};
  max-width: fit-content;
  border-bottom: 1px solid ${colors.main.text.body};
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.main.onHover.color};
    color: ${colors.main.onHover.color};
  }
`;

export const Empty = styled.div`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled.div`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: ${colors.main.onHover.color};
    }
  }
`;

export const Language = styled.h4`
  font-size: 22px;
  text-transform: capitalize;
  color: ${colors.main.text.light};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled.label`
  font-size: 22px;
  text-transform: capitalize;
  color: ${colors.main.text.light};
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled.div`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
