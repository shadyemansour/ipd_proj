import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={src}
      aria-label={src}
    >
      <SvgIcon src={src} width="25px" height="25px" />
    </a>
  );

  return (
    <>
      {/*<FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <LogoContainer to="/" aria-label="homepage">
                <SvgIcon src="logo-inverted.svg" width="101px" height="64px" />
              </LogoContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t("Do you have any question? Feel free to reach out.")}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t("Let's Chat")}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Find me on..")}</Language>
              <FooterContainer>
                <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="linkedin.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon src="united-states.svg" width="30px" height="30px" />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon src="spain.svg" width="30px" height="30px" />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>  */}

      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "1rem" }}
          >
            <LogoContainer to="/" aria-label="homepage">
              <SvgIcon src="logo-inverted.svg" width="101px" height="64px" />
            </LogoContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
