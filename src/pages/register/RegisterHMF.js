import React, { Component } from "react";
import Register from "../../components/composite/register/RegisterContainer";
import HMF from "../../components/layout/composite/HMF";

import Footer from "../../components/layout/unit/Footer";
import Header from "../../components/layout/unit/Header";

class RegisterPage extends Component {
  render() {
    return (
      <HMF
        headerComponent={<Header />}
        mainComponent={<Register />}
        footerComponent={<Footer />}
      />
    );
  }
}

export default RegisterPage;
