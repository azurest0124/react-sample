import React, { Component } from "react";
import Login from "./Login";
import axios from "axios";
import RegExpUtil from "./../../util/RegExpUtil";
import msg from "./../../util/msg";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: null,
        password: null
      },

      errors: {
        email: "",
        password: ""
      }
    };
  }

  validateFormat = (name, value, errors) => {
    switch (name) {
      case "email":
        errors[name] = !RegExpUtil.validateFormat(value, name)
          ? msg.error.valid[name].format
          : "";
        break;
      case "password":
        errors[name] = RegExpUtil.validateFormat(value, name)
          ? ""
          : msg.error.valid[name].format;
        break;

      default:
        break;
    }

    return errors;
  };

  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    errors = this.validateFormat(name, value, errors);
    this.setState({
      errors,
      fields: { ...this.state.fields, [name]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // validate when submitted
    let { errors, fields } = this.state;

    let validated = true;
    for (const key in fields) {
      if (fields[key] == null || fields[key].trim() === "") {
        errors[key] = msg.error.valid.empty;
      }
      if (validated) {
        errors = this.validateFormat(key, fields[key], errors);
      }
      if (errors[key] !== "") {
        validated = false;
      }
    }

    this.setState({
      errors
    });

    if (validated) {
      axios
        .post("http://localhost:4000/login", {
          params: fields
        })
        .then(function(res) {
          console.info(res.data);
        })
        .catch(err => {
          console.error(err);
          alert("server error");
        });
    }
  };

  render() {
    return (
      <Login
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default LoginContainer;
