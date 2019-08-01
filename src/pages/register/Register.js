import React, { Component } from "react";
import Register from "../../components/composite/register/RegisterContainer";
import HMF from "../../components/layout/composite/HMF";

class RegisterPage extends Component {
  render() {
    return <HMF mainComponent={<Register />} />;
  }
}

export default RegisterPage;
