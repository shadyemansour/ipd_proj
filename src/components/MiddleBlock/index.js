import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Button from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { colors } from "../../styles/colors";
const MiddleBlock = ({ title, content, button, t, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const formatContent = (text) => {
    const boldRegex = /\[b\](.*?)\[\/b\]/g;
    return text.replace(
      boldRegex,
      `<strong style="font-family: 'Motiva Sans Bold'; color: ${colors.main.secondary};">$1</strong>`
    );
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content
                dangerouslySetInnerHTML={{ __html: formatContent(t(content)) }}
              />
              {button && (
                <Button name="submit" onClick={() => scrollTo(button.scrollTo)}>
                  {t(button.title)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
