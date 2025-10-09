import AbcIcon from '@mui/icons-material/Abc';
import {ThemeProvider} from '@mui/material/styles';
import {act, fireEvent, render} from '@testing-library/react';
import React from 'react';
import theme from 'styles';

import Alert from './Alert';

describe('<Alert />', () => {
  const renderWithTheme = (component: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

  it('should render heading and content strings', () => {
    const {getByText} = renderWithTheme(
      <Alert heading="Test title">Test subtitle</Alert>,
    );
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Test subtitle')).toBeInTheDocument();
  });

  it('should apply className to the root element', () => {
    const treeWithClassNameProp = renderWithTheme(
      <Alert className="test-class" heading="Heading" />,
    );
    const treeWithClassesProp = renderWithTheme(
      <Alert classes={{root: 'test-class'}} heading="Heading" />,
    );
    expect(treeWithClassNameProp.container.firstChild).toHaveClass(
      'test-class',
    );
    expect(treeWithClassesProp.container.firstChild).toHaveClass('test-class');
  });

  it('should render custom icon from props', () => {
    const {getByTestId} = renderWithTheme(
      <Alert heading="Heading" icon={<AbcIcon />} />,
    );
    expect(getByTestId('AbcIcon')).toBeInTheDocument();
  });

  it('should render default close icon if onClose is provided', () => {
    const mockOnClose = jest.fn();
    const {getByTitle} = renderWithTheme(
      <Alert heading="Heading" onClose={mockOnClose} />,
    );
    expect(getByTitle('Close')).toBeInTheDocument();
    act(() => {
      fireEvent.click(getByTitle('Close'));
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should render custom action from props', () => {
    const {getByText} = renderWithTheme(
      <Alert heading="Heading" action={<button>Test</button>} />,
    );
    expect(getByText('Test')).toBeInTheDocument();
  });
});
