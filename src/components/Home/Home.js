import React from 'react';
import {Container, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Home = () => {
    return (
        <Container className='mt-4'>
            <Row>
                <Meals></Meals>
            </Row>
        </Container>
    );
};

export default Home;