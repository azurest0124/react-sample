import React from "react";
import RegUtil from "../../../src/util/RegExpUtil";
import msg from "../../../src/util/msg";
import { storiesOf } from "@storybook/react";

import NumberFormat from "react-number-format";

const numberInput = storiesOf("Component|Component.unit").add(
  "Number Format",
  () => {
    return (
      <>
        <div>주민등록번호 테스트</div>
        <NumberFormat format="# # # # # #" mask="_" />
        <br />
        <div>원화 테스트</div>
        <NumberFormat
          prefix={"￦"}
          thousandSeparator={true}
          allowNegative={false}
        />
      </>
    );
  }
);

export default numberInput;
