import type {SvgIconProps, Theme} from '@mui/material';
import {Grid, Typography, Tooltip, Button} from '@mui/material';
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
  tooltip: {
    maxWidth: 'none',
    padding: '10px 20px',
  },
  copyButton: {
    color: 'white',
    marginLeft: 10,
    height: 30,
    '&:hover': {
      color: 'black',
      backgroundColor: 'white',
    },
  },
}));

const subPaths = ['', 'crypto/', 'nft/'];

const [GeneralIconsTemplate, CryptoIconsTemplate, NftIconsTemplate] = [
  generalIcons,
  cryptoIcons,
  nftIcons,
].map((icons, idx) => {
  return (args: typeof defaultArgs) => {
    const {classes} = useStyles();

    return (
      <Grid container>
        {Object.entries(icons).map(([key, Icon]) => {
          const namedImport = `import {${key}} from '@unstoppabledomains/ui-kit/icons';`;
          const defaultImport = `import ${key} from '@unstoppabledomains/ui-kit/icons/${subPaths[idx]}${key}';`;
          const tooltipContent = (
            <Typography variant="body1" component="div">
              {namedImport}
              <Button
                className={classes.copyButton}
                onClick={() => navigator.clipboard.writeText(namedImport)}
              >
                Copy
              </Button>
              <br />
              <i>or</i>
              <br />
              {defaultImport}
              <Button
                className={classes.copyButton}
                onClick={() => navigator.clipboard.writeText(defaultImport)}
              >
                Copy
              </Button>
            </Typography>
          );

          return (
            <Grid
              item
              key={key}
              padding={2}
              justifyContent="center"
              alignContent="center"
              alignItems="center"
            >
              <Tooltip
                title={tooltipContent}
                classes={{tooltip: classes.tooltip}}
              >
                <Grid
                  container
                  width={170}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon
                    {...args}
                    className={classes.icon}
                    stopColor="#62626A"
                  />
                  <Tooltip title={key}>
                    <Typography
                      fontSize={14}
                      align="center"
                      noWrap
                      sx={{width: 160, marginTop: '10px'}}
                    >
                      {key}
                    </Typography>
                  </Tooltip>
                </Grid>
              </Tooltip>
            </Grid>
          );
        })}
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
