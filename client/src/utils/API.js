import axios from "axios";
// add login and signup route
export default {
  // Gets all books
  getFlashcards: function () {
    return axios.get("/api/flashcards");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  translate: function (bookData) {
    return axios.post("/api/translate/translate", bookData);
  },
  login: function(userData){
    return axios.post("/api/user/login", userData);
  },
  logout: function(userData){
    return axios.get("/api/user/logout", userData);
  },
  signUp: function (userData) {
    return axios.post("/api/user/signup", userData)
  },
  getUser: function(){
    return axios.get("/api/user/user-data");
  }
};
