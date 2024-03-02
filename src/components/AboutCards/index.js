import React from "react";
import { Card, Image, Title, Anchor, Button, CardText, Name } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // for a brand icon
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // for a solid icon

const UserProfileCard = ({ src, alt, name, title, text }) => {
  return (
    <Card>
      <Image src={src} alt={alt} />
      <Name>{name}</Name>
      <Anchor href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </Anchor>
      <Anchor href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </Anchor>
      <Title>{title}</Title>
      <CardText>{text}</CardText>

      <p>
        <Button>Contact</Button>
      </p>
    </Card>
  );
};

export default UserProfileCard;
