import React, { Component } from "react";
import Register from "../../components/composite/register/RegisterContainer";
import HSMF from "../../components/layout/composite/H_SM_F";

import Footer from "../../components/layout/unit/Footer";
import Header from "../../components/layout/unit/Header";
import Side from "../../components/layout/unit/Side";
class RegisterPage extends Component {
  render() {
    return (
      <HSMF
        headerComponent={<Header />}
        mainComponent={<Register />}
        footerComponent={<Footer />}
        sideComponent={<Side />}
      />
    );
  }
}

export default RegisterPage;
