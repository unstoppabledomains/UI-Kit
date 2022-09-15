import React from 'react';
import type {ComponentStory} from '@storybook/react';
import {Grid} from '@mui/material';
import UDLogo, {UDLogoTheme} from '../src/components/UDLogo/UDLogo';

export default {
  title: 'Components/UDLogo',
  component: UDLogo,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: [
          UDLogoTheme.Primary,
          UDLogoTheme.White,
          UDLogoTheme.WhiteWithRay,
        ],
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
