import type {ComponentStory} from '@storybook/react';
import React from 'react';
import {makeStyles} from 'styles';

import Logo, {LogoTheme} from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
  argTypes: {
    theme: {
      options: Object.values(LogoTheme).filter(
        (value) => typeof value === 'string',
      ),
      description:
        'Theme of the logo. Defines the colors of SVG <path> elements.',
      mapping: LogoTheme,
      control: {
        type: 'select',
        labels: {
          [LogoTheme.Primary]: 'Primary',
          [LogoTheme.White]: 'White',
          [LogoTheme.WhiteWithRay]: 'WhiteWithRay',
          [LogoTheme.PrimaryWithText]: 'PrimaryWithText',
          [LogoTheme.BlackWithTextAndRay]: 'BlackWithTextAndRay',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        {name: 'dark', value: '#121212'},
        {name: 'grey', value: '#D8DAE6'},
        {name: 'light', value: '#F9FAFF'},
      ],
    },
  },
};

const useStyles = makeStyles()(() => ({
  UDLogo: {
    fontSize: '8rem',
  },
  logoWrapper: {
    width: '100%',
    height: 195,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Template: ComponentStory<typeof Logo> = (args) => {
  const {classes} = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <Logo className={classes.UDLogo} {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  theme: LogoTheme.Primary,
};
