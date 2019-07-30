import React from "react";

import { storiesOf } from "@storybook/react";

import Input from "../../../src/components/unit/Input";
import RegUtil from "../../../src/util/RegExpUtil";
import msg from "../../../src/util/msg";

const input = storiesOf("Component|Component.unit").add("Input", () => {
  return (
    <>
      <span>EMAIL</span>
      <Input
        type="text"
        placeholder="이메일 테스트"
        err_msg={msg.error.valid.email.format}
        field="email"
        onBlur={value => {
          return RegUtil.validateFormat(value, "email");
        }}
      />
      <br />
      <span>PASSWORD</span>
      <Input
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        err_msg={msg.error.valid.password.format}
        field="password"
        onChange={value => {
          return RegUtil.validateFormat(value, "password");
        }}
      />
    </>
  );
});

export default input;
