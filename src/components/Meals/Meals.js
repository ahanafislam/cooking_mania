import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Meals.css';

const Meals = (props) => {
    const {strMeal, strMealThumb, strCategory} = props.meal;

    return (
        <Col md={3}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{strCategory}</Card.Subtitle>
                <Card.Text></Card.Text>
                <Button className='brand-bg border-0'>Read More</Button>
            </Card.Body>
        </Col>
    );
};

export default Meals;