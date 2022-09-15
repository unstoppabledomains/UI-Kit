import React from 'react';
import type {ComponentStory} from '@storybook/react';
import {Grid} from '@mui/material';
import UDLogo, {UDLogoTheme} from '../src/components/UDLogo';

export default {
  title: 'Components/UDLogo',
  component: UDLogo,
  argTypes: {
    theme: {
      options: Object.values(UDLogoTheme).filter(
        (value) => typeof value === 'string',
      ),
      description:
        'Theme of the logo. Defines the colors of SVG <path> elements.',
      mapping: UDLogoTheme,
      control: {
        type: 'select',
        labels: {
          [UDLogoTheme.Primary]: 'Primary',
          [UDLogoTheme.White]: 'White',
          [UDLogoTheme.WhiteWithRay]: 'WhiteWithRay',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {name: 'dark', value: '#121212'},
        {name: 'light', value: '#F9FAFF'},
      ],
    },
  },
};

const Template: ComponentStory<typeof UDLogo> = (args) => {
  return <UDLogo {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  theme: UDLogoTheme.Primary,
};

export const AllLogos: ComponentStory<typeof UDLogo> = () => (
  <Grid container justifyContent="space-between" alignItems="center">
    <UDLogo theme={UDLogoTheme.Primary} />
    <UDLogo theme={UDLogoTheme.White} />
    <UDLogo theme={UDLogoTheme.WhiteWithRay} />
  </Grid>
);
