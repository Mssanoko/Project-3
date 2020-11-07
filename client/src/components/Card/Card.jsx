import React from 'react';
import './Card.css';
import Quiz from '../Quiz/Quiz'

const Card = (props) => (
    <>
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.eng}</div>
            </div>
            <div className="front back">
                <div className="fr">{props.fr}</div>
            </div>
        </div>
    </div>
    <Quiz/>
    </>
)

export default Card;