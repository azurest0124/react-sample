import React, { Component } from "react";

class Input extends Component {
  /**생성자 */
  constructor(props) {
    super(props);
    this.state = {
      validator: { [props.field]: true },
      fields: { [props.field]: "" }
    };
  }
  render() {
    return (
      <div>
        {/* input에 대한 부분*/}
        <input
          {...this.props}
          onChange={e => {
            if (this.props.onChange === undefined) return;

            const valid = this.props.onChange(e.target.value);
            this.setState({
              ...this.state,
              fields: { [this.props.field]: e.target.value },
              validator: { [this.props.field]: valid }
            });
          }}
          onBlur={e => {
            if (this.props.onBlur === undefined) return;

            const valid = this.props.onBlur(e.target.value);
            this.setState({
              ...this.state,
              fields: { [this.props.field]: e.target.value },
              validator: { [this.props.field]: valid }
            });
          }}
        />
        {/* input의 Error에 대한 부분*/}
        {this.state.validator[this.props.field] ? (
          ""
        ) : (
          <div>{this.props.err_msg}</div>
        )}
      </div>
    );
  }
}
export default Input;
