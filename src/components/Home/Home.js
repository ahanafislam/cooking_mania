import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Home = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    },[]);

    return (
        <Container className='mt-4'>
            <Row className='g-3'>
                {
                    meals.map(meal => <Meals
                            key={meal.idMeal}
                            meal={meal}
                        ></Meals>)
                }
            </Row>
        </Container>
    );
};

export default Home;