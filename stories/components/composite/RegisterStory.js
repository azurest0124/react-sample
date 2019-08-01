import React from "react";

import { storiesOf } from "@storybook/react";

import Register from "../../../src/components/composite/register/RegisterContainer";
const input = storiesOf("Component|Component.composite").add("Register", () => {
  return <Register />;
});

export default input;
