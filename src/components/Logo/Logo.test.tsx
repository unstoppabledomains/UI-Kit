import React from 'react';

import {render} from '../../../tests/test-utils';

import Logo, {LogoTheme} from './Logo';

describe('<Logo />', () => {
  it('renders without crashing', () => {
    const {container} = render(<Logo />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
