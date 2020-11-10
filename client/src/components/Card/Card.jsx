import React from 'react';
import './Card.css';
import Quiz from '../Quiz/Quiz';
import DrawButton from '../DrawButton/DrawButton'
import { Container, Row, Col } from "../../components/Grid";


  // Load all the user's flashcards and update translations (translatinl = flashcard)
//   useEffect(() => {
    // hit the /user_data GET rouite and set the results into translations state
const Card = (props) => (
    <Container fluid>
    
    <Row>
    <Col size="md-12">

    <div className="card-container">
        <div className="card">
            <div className="front">
            <Quiz/>
            </div>
            <div className="front back">
            <Quiz/>
            </div>
            
        </div>
    </div>
    <DrawButton/>
    </Col>
          </Row>
          </Container>  
       
)



export default Card

