import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import { setOptions } from "@storybook/addon-options";

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/
});

storiesOf("Component|Component/unit").add("Button", () => (
  <Button>Unit</Button>
));

storiesOf("Component|Component/composite").add("Button", () => (
  <Button>Unit</Button>
));

// default sample
storiesOf("Sample|Sample/Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Sample|Sample/Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));
