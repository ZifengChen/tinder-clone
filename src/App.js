import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards></TinderCards>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
