import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Login from "./Components/login/Login";
import News from "./Components/dashboard/Dashboard";
import Register from "./Components/register/Register";
import ReadLater from "./Components/readNow/Readnow";
import authentication  from "./Services/Auth";


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() =>
            authentication.isLoggedIn ? <News /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/login"
          component={() =>
            !authentication.isLoggedIn ? <Login /> : <Redirect to="/" />
          }
        />
        <Route exact path="/" component={News} />
        <Route
          exact
          path="/register"
          component={() =>
            !authentication.isLoggedIn ? <Register /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/readLater"
          component={() =>
            authentication.isLoggedIn ? <ReadLater /> : <Redirect to="/login" />
          }
        />
      </Switch>
      <Footer />
    </Router>
  );
}

// ()=>authentication.isLoggedIn ? <News /> :<Redirect to ="/login"/>}