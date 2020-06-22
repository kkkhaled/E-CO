import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/auth/Register";
import Alerts from "./Components/Layouts/Alerts";
import Login from "./Components/auth/Login";
import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
