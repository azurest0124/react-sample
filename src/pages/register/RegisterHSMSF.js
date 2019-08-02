import React, { Component } from "react";
import Register from "../../components/composite/register/RegisterContainer";
import HSMSF from "../../components/layout/composite/HSMSF";

import Footer from "../../components/layout/unit/Footer";
import Header from "../../components/layout/unit/Header";
import Side from "../../components/layout/unit/Side";
class RegisterPage extends Component {
  render() {
    return (
      <HSMSF
        headerComponent={<Header />}
        mainComponent={<Register />}
        footerComponent={<Footer />}
        leftSideComponent={<Side />}
        rightSideComponent={<Side />}
      />
    );
  }
}

export default RegisterPage;
