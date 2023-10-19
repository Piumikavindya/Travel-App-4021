import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const JourneyCard = ({ imageSrc, title, description, buttonLabel }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
};

export default JourneyCard;
