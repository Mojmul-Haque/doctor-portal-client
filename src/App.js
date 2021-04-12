import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Appoinment from "./Components/Appoinment Page/Appoinment/Appoinment";
import Home from "./Components/Home/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appoinment">
          <Appoinment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
