import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
        <Route exact path={"/books"}>
            <Books />
          </Route>
          <Route exact path={"/login"}>
            <Books />
          </Route>
          <Route exact path={["/", "/signup"]}>
            <Signup />
          </Route>
          <Route exact path="/books/:bookid">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
