import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Nav from "../components/Nav";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  const [translations, setTranslations] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    
  }, [])



  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

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

        })
        .catch(err => console.log(err));
     }
  };

    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Translate anything from English to French
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
            {translations.length ? (
              <List>
                {translations.map( (translation, index) => (
                <ListItem key={"translate-"+index}>
                  {translation}
                </ListItem>))}
              </List>
            ): <span>No translations</span>}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Flashcard list</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.phrase}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Flashcards to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
