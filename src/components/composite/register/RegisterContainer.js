import React, { Component } from "react";
import RegUtil from "../../../util/RegExpUtil";
import msg from "../../../util/msg";
import Register from "../register/Register";
import Axios from "axios";
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

    // https://tuhbm.github.io/2019/03/21/axios/
    // https://github.com/axios/axios
    if (validated) {
      Axios.post("http://localhost:4000/register", {
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
      <Register
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default RegisterContainer;
