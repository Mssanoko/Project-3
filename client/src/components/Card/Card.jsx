import React from 'react';
import './Card.css';
import Quiz from '../Quiz/Quiz'
import Nav from "../../components/Nav";
import { Container, Row, Col } from "../../components/Grid";

const Card = (props) => (
    <Container fluid>
    <Nav />
    <Row>
    <Col size="md-6">

    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">English word</div>
            </div>
            <div className="front back">
                <div className="fr">French word</div>
            </div>
        </div>

    </div>
    <Quiz/>
    </Col>
          </Row>
          </Container>  
          
)

export default Card

