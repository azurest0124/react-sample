import React, { Component } from "react";
import msg from "../../../util/msg";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    return (
      <>
        <h3>Register</h3>
        <form>
          <input
            type="text"
            name="email"
            placeholder={msg.placeholder.register.email}
            onChange={this.state.handleChange}
          />
          {this.state.errors.email ? (
            <div>{this.state.errors.email}</div>
          ) : null}
          <br />
          <input
            type="text"
            name="name"
            placeholder={msg.placeholder.register.name}
            onChange={this.state.handleChange}
          />
          {this.state.errors.name ? <div>{this.state.errors.name}</div> : null}
          <br />
          <input
            type="text"
            name="password"
            placeholder={msg.placeholder.register.password}
            onChange={this.state.handleChange}
          />
          {this.state.errors.password ? (
            <div>{this.state.errors.password}</div>
          ) : null}
          <br />
          <input
            type="text"
            name="passwordConfirm"
            placeholder={msg.placeholder.register.passwordConfirm}
            onChange={this.state.handleChange}
          />
          {this.state.errors.passwordConfirm ? (
            <div>{this.state.errors.passwordConfirm}</div>
          ) : null}
          <br />
        </form>
      </>
    );
  }
}

export default Register;
