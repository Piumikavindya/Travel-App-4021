import React from 'react';
import Card from 'react-bootstrap/Card';



const JourneyCard = ({ imageSrc, title, description, buttonLabel }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      
      </Card.Body>
    </Card>
  );
};

export default JourneyCard;
