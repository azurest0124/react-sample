import { setOptions } from "@storybook/addon-options";

import flatPickr from "./components/unit/FlatPicker";
import inputs from "./components/unit/Input";
import sample from "./components/Sample";
import numberInput from "./components/unit/NumberInput";
import register from "./components/composite/RegisterStory";
setOptions({
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/
});

flatPickr();
inputs();
sample();
numberInput();
register();
