import React from 'react';
import {ThemeProvider} from '@mui/material';
import {lightTheme} from '../src/styles';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => <ThemeProvider theme={lightTheme}>{Story()}</ThemeProvider>,
];
