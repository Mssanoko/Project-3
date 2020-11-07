import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Quiz from './components/Quiz/Quiz'
import UserContext from "./utils/UserContext";
import Logout from "./pages/Logout";

function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <UserContext.Provider value={{ email, setEmail, loggedIn, setLoggedIn }}>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={"/books"}>
            <Books />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={["/", "/signup"]}>
            <Signup />
          </Route>

          <Route exact path="/books/:bookid">
            <Detail />
          </Route>
          <Route exact path={"/card"}>
            <Card />
          </Route>
          <Route exact path={"/quiz"}>
            <Quiz />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      </UserContext.Provider>
    </Router >
  );
}

export default App;
