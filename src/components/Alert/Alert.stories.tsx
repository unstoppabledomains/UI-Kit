import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'error'],
      },
    },
    size: {
      description: 'Defines the sizes of the title, icon and inner paddings',
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    classNames: {
      control: {
        type: null,
      },
    },
    icon: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const textProps = {
  warning: {
    title: 'Please fill IPFS hash input to launch website',
    subtitle:
      'Don’t worry, we are actively working on developing Android App for our users.',
  },
  error: {
    title: 'Unable to detect a web3 wallet',
    subtitle:
      'It looks like you did not install it yet, or have multiple wallets installed.',
  },
  success: {
    title: 'Claim Process Started',
    subtitle:
      'Your domains are now being deployed into the blockchain and your crypto-wallet.',
  },
  info: {
    title: "Please select another method for claiming if you can't use iOS app",
    subtitle:
      'Don’t worry, we are actively working on developing Android App for our users.',
  },
};

const Template: ComponentStory<typeof Alert> = (args) => {
  const {title, subtitle} = textProps[args.severity || 'info'];

  return (
    <Alert {...args} title={args.title || title}>
      {args.children || subtitle}
    </Alert>
  );
};

export const Default = Template.bind({});

Default.args = {
  severity: 'warning',
  size: 'small',
};

Default.parameters = {controls: {exclude: ['elevation', 'square', 'ref']}};
