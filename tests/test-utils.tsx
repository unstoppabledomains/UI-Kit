import type {Theme} from '@mui/material';
import {ThemeProvider} from '@mui/material';
import type {RenderResult} from '@testing-library/react';
import {render, screen} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import type {ReactElement} from 'react';
import React from 'react';
import defaultTheme from 'styles';

const createWrapper =
  ({
    theme,
  }: {
    theme?: Theme;
  } = {}): React.FC =>
  ({children}) =>
    <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>;

const customRender = (
  ui: ReactElement,
  theme?: Theme,
  options?: object,
): RenderResult => {
  return render(ui, {wrapper: createWrapper({theme}), ...options});
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRenderHook = (useCustomHook: () => any) => {
  return renderHook(() => useCustomHook(), {wrapper: createWrapper()});
};

export * from '@testing-library/react';

export const getAllByTextContext = (text: string) =>
  screen.getAllByText(
    (content, node) => content !== '' && node?.textContent === text,
  );

export const getByTextContext = (text: string) =>
  screen.getByText(
    (content, node) => content !== '' && node?.textContent === text,
  );

export const queryAllByTextContext = (text: string) =>
  screen.queryAllByText(
    (content, node) => content !== '' && node?.textContent === text,
  );

// re-export everything
export const queryByTextContext = (text: string) =>
  screen.queryByText(
    (content, node) => content !== '' && node?.textContent === text,
  );

// override render method
export {customRender as render, customRenderHook as renderHook};
