import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Meals.css';

const Meals = () => {
    return (
        <Col md={3}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='brand-bg border-0'>Go somewhere</Button>
            </Card.Body>
        </Col>
    );
};

export default Meals;