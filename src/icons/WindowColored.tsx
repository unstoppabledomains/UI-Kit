import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const WindowColored = (props: SvgIconProps) => {
  const {classes} = useStyles();
  const paths = [
    'M63.3333 13.333H16.6667C12.9667 13.333 10 16.333 10 19.9997V59.9997C10 63.6663 12.9667 66.6663 16.6667 66.6663H63.3333C67 66.6663 70 63.6663 70 59.9997V19.9997C70 16.333 67.0333 13.333 63.3333 13.333ZM63.3333 59.9997H16.6667V26.6663H63.3333V59.9997Z',
  ];
  const uuid = classes.id;
  const ids = Array.from({length: paths.length}).map(
    (_, i) => `window-colored-${uuid}-${i}`,
  );

  return (
    <SvgIcon viewBox="0 0 80 80" {...props}>
      {paths.map((d, i) => (
        <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
      ))}
      <defs>
        <linearGradient
          id={ids[0]}
          x1="10"
          y1="66.6663"
          x2="62.9655"
          y2="7.08013"
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

export default WindowColored;
