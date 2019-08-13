import React, { Component } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/LoginContainer";
import Home from "./pages/Home";
import Header from "./components/layout/unit/Header";
import { PrivateRoute } from "./util/PrivateRoute";
import NoMatch from "./pages/NoMatch";
class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Header />

          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
