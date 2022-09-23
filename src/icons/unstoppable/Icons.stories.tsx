import React from 'react';
import type {SvgIconProps} from '@mui/material';
import {Grid, Typography} from '@mui/material';

import * as nftIcons from './nft';
import * as generalIcons from './index';
import * as cryptoIcons from './crypto';

export default {
  title: 'Components/Icons',
  argTypes: {
    htmlColor: {
      control: {type: 'text'},
    },
    color: {
      control: {type: 'select'},
      options: [
        'inherit',
        'action',
        'disabled',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
    },
    fontSize: {
      control: {type: 'select'},
      options: [
        'inherit',
        'large',
        'medium',
        'small',
      ] as SvgIconProps['fontSize'][],
    },
  },
};

const defaultArgs: Pick<SvgIconProps, 'fontSize' | 'color'> = {
  color: 'inherit' as const,
  fontSize: 'medium' as const,
};

export const GeneralIcons = (args: typeof defaultArgs) => (
  <Grid container>
    {Object.entries(generalIcons).map(([key, Icon]) => (
      <Grid
        item
        key={key}
        padding={2}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid
          container
          width={104}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon {...args} width={60} height={60} />
          <Typography fontSize={16} align="center">
            {key}
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

GeneralIcons.args = defaultArgs;

export const CryptoIcons = (args: typeof defaultArgs) => (
  <Grid container>
    {Object.entries(cryptoIcons).map(([key, Icon]) => (
      <Grid
        item
        key={key}
        padding={2}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid
          container
          width={104}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon {...args} width={60} height={60} />
          <Typography fontSize={16} align="center">
            {key}
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

CryptoIcons.args = defaultArgs;

export const NftIcons = (args: typeof defaultArgs) => (
  <Grid container>
    {Object.entries(nftIcons).map(([key, Icon]) => (
      <Grid
        item
        key={key}
        padding={2}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid
          container
          width={104}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon {...args} width={60} height={60} />
          <Typography fontSize={16} align="center">
            {key}
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

NftIcons.args = defaultArgs;
