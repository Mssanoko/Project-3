import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


function Translates() {
  // Setting our component's initial state
  const [translates, setTranslate] = useState([])
  const [formObject, setFormObject] = useState({})
  const [translations, setTranslations] = useState([]);

  // Load all the user's flashcards and update translations (translatinl = flashcard)
  useEffect(() => {
    // hit the /user_data GET rouite and set the results into translations state
  }, [])



  

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.phrase) {
      API.translate({
        text: formObject.phrase,
       
      })
        .then(res => { 
          console.log(res)
          console.log(res.data[0].translation[0].translation);
          const biggerList = [...translations, res.data[0].translation[0].translation];

          setTranslations(biggerList)
 
            // here you can make the AJAX request to add tranlstion to user flashcards
            // API.addToUserFlashcards().then(() => {

            // })
            // after you have added the new flashcard, you have to update your flashcards state.
            // you can still use setTranslations if you want and the old logic
        })
        .catch(err => console.log(err));
     }
  };

    return (
      <Container>
        
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="translate">Translate from English to French
              </h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="phrase"
                placeholder="Phrase(required)"
              />
              <FormBtn
                disabled={!(formObject.phrase)}
                onClick={handleFormSubmit}
              >
                Translate Phrase
              </FormBtn>
            </form>
          </Col>
        
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1 className="translate"> Flashcard List</h1>
            </Jumbotron>
            {translates.length ? (
              <List>
                {translates.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.phrase}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Flashcards to Display</h3>
            )}
            <Col size="md-6 sm-12">
            {translations.length ? (
              <List>
                {translations.map( (translation, index) => (
                <ListItem key={"translate-"+index}>
                  {translation}
                </ListItem>))}
              </List>
            ): <span>No translations</span>}
          </Col>
          </Col>
        </Row>
      </Container>
    );
  }


export default Translates;
