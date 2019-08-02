import React, { Component } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import RegisterHSMF from "./pages/register/RegisterHSMF";
import RegisterHMF from "./pages/register/RegisterHMF";
import RegisterH_SM_F from "./pages/register/RegisterH_SM_F";
import RegisterHSMSF from "./pages/register/RegisterHSMSF";
import Home from "./pages/Home";
import Header from "./components/layout/unit/Header";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/hmf" component={RegisterHMF} />
            <Route path="/hsmf" component={RegisterHSMF} />
            <Route path="/h_sm_f" component={RegisterH_SM_F} />
            <Route path="/h_sms_f" component={RegisterHSMSF} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
