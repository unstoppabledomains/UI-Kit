import AbcIcon from '@mui/icons-material/Abc';
import {act, fireEvent, render} from '@testing-library/react';
import React from 'react';

import Alert from './Alert';

describe('<Alert />', () => {
  it('should render title and subtitle strings', () => {
    const {getByText} = render(<Alert title="Test title">Test subtitle</Alert>);
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Test subtitle')).toBeInTheDocument();
  });

  it('should apply className to the root element', () => {
    const treeWithClassNameProp = render(
      <Alert className="test-class" title="Title" />,
    );
    const treeWithClassesProp = render(
      <Alert classes={{root: 'test-class'}} title="Title" />,
    );
    expect(treeWithClassNameProp.container.firstChild).toHaveClass(
      'test-class',
    );
    expect(treeWithClassesProp.container.firstChild).toHaveClass('test-class');
  });

  it('should render custom icon from props', () => {
    const {getByTestId} = render(<Alert title="Title" icon={<AbcIcon />} />);
    expect(getByTestId('AbcIcon')).toBeInTheDocument();
  });

  it('should render default close icon if onClose is provided', () => {
    const mockOnClose = jest.fn();
    const {getByTitle} = render(<Alert title="Title" onClose={mockOnClose} />);
    expect(getByTitle('Close')).toBeInTheDocument();
    act(() => {
      fireEvent.click(getByTitle('Close'));
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should render custom action from props', () => {
    const {getByText} = render(
      <Alert title="Title" action={<button>Test</button>} />,
    );
    expect(getByText('Test')).toBeInTheDocument();
  });
});
