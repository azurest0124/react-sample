import React, { Component } from "react";
import RegUtil from "../../../util/RegExpUtil";
import msg from "../../../util/msg";
import Register from "../register/Register";
class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: null,
        email: null,
        password: null,
        passwordConfirm: null
      },

      errors: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    };
  }

  validateFormat = (name, value, errors) => {
    switch (name) {
      case "email":
        errors[name] = !RegUtil.validateFormat(value, name)
          ? msg.error.valid[name].format
          : "";
        break;
      case "name":
        errors.name =
          value === null || value.length < 2 ? msg.error.valid.name : "";
        break;

      case "password":
        errors[name] = RegUtil.validateFormat(value, name)
          ? ""
          : msg.error.valid[name].format;
        break;

      case "passwordConfirm":
        errors[name] =
          value !== this.state.fields.password
            ? msg.error.valid[name].different
            : "";
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
      // 얘를 어떻게 처리해 줘야 하나?

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
      fetch("http://localhost:4000/register", {
        method: "post",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fields)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.info(data);
        })
        .catch(err => console.error(err));
    }
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
