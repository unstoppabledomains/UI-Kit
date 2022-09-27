import type {SvgIconProps} from '@mui/material';
import {Grid, Typography, Tooltip} from '@mui/material';
import React from 'react';

import {makeStyles} from '../styles';

import * as cryptoIcons from './crypto';
import * as generalIcons from './generalIcons';
import * as nftIcons from './nft';

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

const useStyles = makeStyles()(() => ({
  icon: {
    width: 60,
    height: 60,
  },
}));

const [GeneralIconsTemplate, CryptoIconsTemplate, NftIconsTemplate] = [
  generalIcons,
  cryptoIcons,
  nftIcons,
].map((icons) => {
  return (args: typeof defaultArgs) => {
    const {classes} = useStyles();

    return (
      <Grid container>
        {Object.entries(icons).map(([key, Icon]) => (
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
              <Icon {...args} className={classes.icon} />
              <Tooltip title={key}>
                <Typography
                  fontSize={18}
                  align="center"
                  noWrap
                  sx={{width: 100}}
                >
                  {key}
                </Typography>
              </Tooltip>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  };
});

export const GeneralIcons = GeneralIconsTemplate.bind({});
export const CryptoIcons = CryptoIconsTemplate.bind({}); // eslint-disable-line sort-exports/sort-exports
export const NftIcons = NftIconsTemplate.bind({});

GeneralIcons.args = defaultArgs;
CryptoIcons.args = defaultArgs;
NftIcons.args = defaultArgs;
