import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, hashHistory, IndexRoute } from "react-router-dom";
import Translate from "./pages/translate";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Quiz from './components/Quiz/Quiz'
import UserContext from "./utils/UserContext";
import Logout from "./pages/Logout";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs"
import MainNav from "./components/Nav";


function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // i suggest putting translations/flashcards state here.
  return (
    <Router>
      <UserContext.Provider value={{ email, setEmail, loggedIn, setLoggedIn }}>
     
        <MainNav/>
        <Switch>
          <Route exact path={"/translate"}>
            <Translate />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={["/", "/signup"]}>
            <Signup />
          </Route>
          <Route exact path={"/card"}>
            <Card />
          </Route>
          <Route exact path={"/quiz"}>
            <Quiz />
          </Route>
          <Route exact path={"/contactus"}>
            <ContactUs />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    
      </UserContext.Provider>
    </Router >
  );
}

export default App;
