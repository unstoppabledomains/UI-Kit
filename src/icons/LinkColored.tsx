import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const LinkColored = (props: SvgIconProps) => {
  const {classes} = useStyles();
  const paths = [
    'M9.10002 27.9997C9.10002 24.0097 12.3434 20.7663 16.3334 20.7663H25.6667V16.333H16.3334C9.89335 16.333 4.66669 21.5597 4.66669 27.9997C4.66669 34.4397 9.89335 39.6663 16.3334 39.6663H25.6667V35.233H16.3334C12.3434 35.233 9.10002 31.9897 9.10002 27.9997ZM18.6667 30.333H37.3334V25.6663H18.6667V30.333ZM39.6667 16.333H30.3334V20.7663H39.6667C43.6567 20.7663 46.9 24.0097 46.9 27.9997C46.9 31.9897 43.6567 35.233 39.6667 35.233H30.3334V39.6663H39.6667C46.1067 39.6663 51.3334 34.4397 51.3334 27.9997C51.3334 21.5597 46.1067 16.333 39.6667 16.333Z',
  ];
  const uuid = classes.id;
  const ids = Array.from({length: paths.length}).map(
    (_, i) => `link-colored-${uuid}-${i}`,
  );

  return (
    <SvgIcon viewBox="0 0 56 56" {...props}>
      {paths.map((d, i) => (
        <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
      ))}
      <defs>
        <linearGradient
          id={ids[0]}
          x1="4.66669"
          y1="39.6663"
          x2="23.3334"
          y2="2.33301"
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

export default LinkColored;
