import React from "react";
import { Wrapper } from "../index";

export default { title: "Ad Wrapper" };

const AdWrapper = (args) => (
  <Wrapper>
    <p>{args.text}</p>
  </Wrapper>
);

export const WithShortText = AdWrapper.bind({});

WithShortText.args = {
  text: "Ad Placeholder",
};

export const WithLongText = AdWrapper.bind({});

WithLongText.args = {
  text: `Do what you can, with what you have, where you are. First we form habits, then they form us. Conquer your bad habits, or they will eventually conquer you. Imagine you only have one year to live. What important things would you be doing? How would you be allotting your time to accomplish the most you could? This exercise is one method of going after your priorities.
  Do what you can, with what you have, where you are. First we form habits, then they form us. Conquer your bad habits, or they will eventually conquer you. Imagine you only have one year to live. What important things would you be doing? How would you be allotting your time to accomplish the most you could? This exercise is one method of going after your priorities.`,
};
