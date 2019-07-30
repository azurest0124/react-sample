import React from "react";

import { storiesOf } from "@storybook/react";

import FlatPickr from "../../../src/components/unit/FlatPickr";

const flatPickr = storiesOf("Component|Component.unit").add("FlatPickr", () => (
  <FlatPickr />
));

export default flatPickr;
