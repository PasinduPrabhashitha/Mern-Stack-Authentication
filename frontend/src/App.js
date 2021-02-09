import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import LoginScreen from "../src/Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import WelcomePage from "./Screens/WelcomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/welcome">
            <WelcomePage />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
