import React from "react";
import NumberFormat from "react-number-format";
class NumberInput extends NumberFormat {
  render() {
    return <NumberFormat {...this.props} />;
  }
}

export default NumberInput;
