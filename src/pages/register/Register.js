import React, { Component } from "react";
import Register from "../../components/composite/register/RegisterContainer";
import HSMF from "../../components/layout/composite/HSMF";

class RegisterPage extends Component {
  render() {
    return (
      <HSMF
        headerComponent={<div>헤더입니다.</div>}
        mainComponent={<Register />}
        footerComponent={<div>풋터입니다.</div>}
      />
    );
  }
}

export default RegisterPage;
