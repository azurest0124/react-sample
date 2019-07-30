import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

const welcome = storiesOf("Sample|Sample.Welcome", module).add(
  "to Storybook",
  () => <Welcome showApp={linkTo("Button")} />
);

const button = storiesOf("Sample|Sample.Button", module).add(
  "with text",
  () => <Button onClick={action("clicked")}>Hello Button</Button>
);

export default { welcome, button };
