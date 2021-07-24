import * as React from "react";
import { ThemeProvider } from "@storybook/theming";

import "../styles/globals.css";

const theme = {};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
