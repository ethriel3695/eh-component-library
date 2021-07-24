import React from "react";
import { Button } from "../index";

export default { title: "Button" };

const simpleComponent = (args) => <Button {...args} />;

export const standardButton = simpleComponent.bind({});

standardButton.args = {
  children: "Hello Google",
};

export const withHref = simpleComponent.bind({});

withHref.args = {
  ...standardButton.args,
  href: "https://google.com",
};
