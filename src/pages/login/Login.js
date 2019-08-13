import React, { Component } from "react";
import msg from "../../util/msg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.state.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder={msg.placeholder.register.email}
            onChange={this.state.handleChange}
          />
          {this.state.errors.email ? (
            <div className="error">{this.state.errors.email}</div>
          ) : null}
          <br />
          <input
            type="password"
            name="password"
            placeholder={msg.placeholder.register.password}
            onChange={this.state.handleChange}
          />
          {this.state.errors.password ? (
            <div className="error">{this.state.errors.password}</div>
          ) : null}
          <br />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Login;
