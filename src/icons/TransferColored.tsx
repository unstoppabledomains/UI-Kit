import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const TransferColored = (props: SvgIconProps) => {
  const {classes} = useStyles();
  const paths = [
    'M50 16.666L45.3 21.366L50 26.0993L57.2333 33.3327H26.6667C17.4667 33.3327 10 40.7994 10 49.9994V63.3327H16.6667V49.9994C16.6667 44.4994 21.1667 39.9994 26.6667 39.9994H57.2333L50 47.2327L45.3 51.9327L50 56.666L70 36.666L50 16.666Z',
  ];
  const uuid = classes.id;
  const ids = Array.from({length: paths.length}).map((_, i) => `${uuid}${i}`);

  return (
    <SvgIcon viewBox="0 0 80 80" {...props}>
      {paths.map((d, i) => (
        <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
      ))}
      <defs>
        <linearGradient
          id={ids[0]}
          x1="10"
          y1="63.3327"
          x2="55.2308"
          y2="5.17884"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BD47F7" />
          <stop offset="0.5208" stopColor="#5D59F8" />
          <stop offset="1" stopColor="#38BDD1" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default TransferColored;
