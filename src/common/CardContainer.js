import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import Slide from "react-awesome-reveal";

const CardContainer = ({ title, id, children }) => {
  return (
    <Slide direction="up">
      <div>
        <h6>{title}</h6>
        <Row gutter={[24, 24]} wrap={true} id={id}>
          {React.Children.map(children, (child, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              {child}
            </Col>
          ))}
        </Row>
      </div>
    </Slide>
  );
};

export default CardContainer;
