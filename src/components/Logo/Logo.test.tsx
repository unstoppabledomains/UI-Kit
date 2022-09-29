import {render, waitFor} from '@testing-library/react';
import React from 'react';

import Logo, {LogoTheme} from './Logo';

describe('<Logo />', () => {
  it('renders without crashing', () => {
    const {container} = render(<Logo />);
    expect(container.firstChild).toBeInTheDocument();
  });

  for (const theme of Object.values(LogoTheme)) {
    it(`renders a Logo icon for: ${theme}`, async () => {
      const {getByTestId} = render(<Logo theme={theme} />);
      await waitFor(() =>
        expect(getByTestId(`${theme}Logo`)).toBeInTheDocument(),
      );
    });
  }
});
