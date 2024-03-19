import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Extra, LogoContainer, Para, NavLink } from "./styles";
import { colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "1rem" }}
          >
            <Col span={6}>
              <LogoContainer to="/" aria-label="homepage">
                <SvgIcon src="logo-inverted.svg" width="101px" height="64px" />
              </LogoContainer>
            </Col>
            <Col
              span={17}
              style={{
                textAlign: "right",
                paddingTop: "3rem",
              }}
            >
              <Para>
                &copy; {currentYear}{" "}
                <NavLink
                  href="https://www.linkedin.com/in/mshady"
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Shady Mansour
                </NavLink>
                . All rights reserved.
              </Para>
            </Col>
            <Col
              span={1}
              style={{
                textAlign: "right",
                paddingTop: "3rem",
                color: colors.main.backgroud,
              }}
            >
              <NavLink
                href="https://github.com/shadyemansour/ipd_proj"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </NavLink>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
