import React, { useState } from "react";
import { Row, Col } from "antd";
import { CustomDrawer } from "../Drawer";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(false);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: ["application", "theory", "team"].includes(id)
            ? "start"
            : "center",
        });
      }
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall
          onClick={() => scrollTo("overview")}
          menuOpen={visible}
        >
          <Span>{t("Overview")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("project")}
          menuOpen={visible}
        >
          <Span>{t("Project")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("theory")}
          menuOpen={visible}
        >
          <Span>{t("Theory")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("application")}
          menuOpen={visible}
        >
          <Span>{t("Application")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("survey")}
          menuOpen={visible}
        >
          <Span>{t("Survey")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("team")} menuOpen={visible}>
          <Span>{t("About Us")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer} isvisible={visible}>
            <Outline />
          </Burger>
        </Row>
        <CustomDrawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </CustomDrawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
