import React, { Component } from "react";
import RegUtil from "../../../util/RegExpUtil";
import msg from "../../../util/msg";
import Register from "../register/Register";
class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
      passwordConfirm: null,
      errors: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors[name] = !RegUtil.validateFormat(value, name)
          ? msg.error.valid[name].format
          : "";
        break;
      case "name":
        errors.name = value.length < 2 ? msg.error.valid.name : "";
        break;

      case "password":
        errors[name] = RegUtil.validateFormat(value, name)
          ? ""
          : msg.error.valid[name].format;
        break;

      case "passwordConfirm":
        errors[name] = RegUtil.validateFormat(value, name)
          ? ""
          : msg.error.valid[name].different;
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.info(this.state);
    // validate when submitted
  };

  render() {
    return (
      <Register
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default RegisterContainer;
