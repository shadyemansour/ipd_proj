import React from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col } from "antd";

const VideoComponent = ({
  src,
  width,
  height,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  title,
  id,
  fade,
}) => {
  return (
    <Fade direction={fade}>
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={7} md={8} sm={8} xs={24}>
          <h5>{title}</h5>
        </Col>
        <Col lg={16} md={16} sm={16} xs={24}>
          <video
            width={width}
            height={height}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            poster={poster}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Fade>
  );
};

export default VideoComponent;
