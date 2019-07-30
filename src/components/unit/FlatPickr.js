import React from "react";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

class FlatPickr extends React.Component {
  render() {
    const option = { dateFormat: "Y-m-d", minDate: "today" };
    const date = new Date();
    return <Flatpickr data-enable-time options={option} value={date} />;
  }
}

export default FlatPickr;
