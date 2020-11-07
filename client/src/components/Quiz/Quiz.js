import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function Quiz() {
    const [quizArr, setQuizArr] = useState();

    const handlegetFlashcards = ()=>{
        API.getFlashcards().then(data => {
            console.log(data.data);
            setQuizArr(data.data);
          
        })
            .catch(err => {
                console.log(err);
            });
    }
  

    //    const choice1 = (phrase) => {
    //    }
   useEffect(()=>{handlegetFlashcards()},[])

    return (
        <>
            <h1>HELLO {JSON.stringify(quizArr)}</h1>
        </>
    );
}

export default Quiz;