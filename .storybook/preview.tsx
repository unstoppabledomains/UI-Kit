import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {lightTheme} from 'styles';

export const decorators = [
  (Story) => <ThemeProvider theme={lightTheme}>{Story()}</ThemeProvider>,
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const tags = ['autodocs'];
