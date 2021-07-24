import React from "react";
import { TextInput } from "../index";

export default { title: "TextInput" };

const simpleComponent = (args) => <TextInput {...args} />;

export const withPlaceholder = simpleComponent.bind({});

withPlaceholder.args = {
  name: "email",
  required: true,
  type: "email",
  placeholder: "Enter your email",
};

export const withNoPlaceholder = simpleComponent.bind({});

withNoPlaceholder.args = {
  ...withPlaceholder.args,
  placeholder: "",
};
