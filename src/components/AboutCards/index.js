import React from "react";
import { Card, Image, Title, Anchor, Button, CardText, Name } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const UserProfileCard = ({
  src,
  alt,
  name,
  title,
  text,
  twitter,
  linkedin,
  email,
}) => {
  const handleMailTo = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Card>
      <Image src={src} alt={alt} />
      <Name>{name}</Name>
      {twitter && (
        <Anchor href={twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </Anchor>
      )}
      {linkedin && (
        <Anchor href={linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Anchor>
      )}
      <Title>{title}</Title>
      <CardText>{text}</CardText>
      <p>
        <Button onClick={handleMailTo}>Contact</Button>
      </p>
    </Card>
  );
};

export default UserProfileCard;
