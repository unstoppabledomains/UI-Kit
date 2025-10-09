import type {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    heading: {
      description: 'A slot for rendering title-like element above the content',
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'Defines the sizes of the title, icon, and inner paddings',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    children: {
      description: 'A slot for rendering the content of the alert',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const textProps = {
  warning: {
    heading: 'Please fill IPFS hash input to launch website',
    body: 'Don’t worry, we are actively working on developing <strong>Android</strong> App for our users.',
  },
  error: {
    heading: 'Unable to detect a web3 wallet',
    body: 'It looks like you did not install it yet, or have multiple wallets installed.',
  },
  success: {
    heading: 'Claim Process Started',
    body: 'Your domains are now being deployed into the blockchain and your crypto-wallet.',
  },
  info: {
    heading:
      "Please select another method for claiming if you can't use iOS app",
    body: 'Don’t worry, we are actively working on developing <strong>Android</strong> App for our users.',
  },
};

const Template: ComponentStory<typeof Alert> = (args) => {
  const {heading, body} = textProps[args.severity || 'info'];

  return (
    <Alert {...args} heading={args.heading || heading}>
      {args.children || body}
    </Alert>
  );
};

export const Default = Template.bind({});

Default.args = {
  severity: 'info',
  size: 'medium',
};

Default.parameters = {
  controls: {
    exclude: [
      'action',
      'classes',
      'closeText',
      'color',
      'components',
      'componentsProps',
      'icon',
      'role',
      'iconMapping',
      'slotProps',
      'slots',
      'className',
      'style',
      'elevation',
      'square',
      'ref',
      'sx',
    ],
  },
};
