import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const TallyColored = (props: SvgIconProps) => {
  const {classes} = useStyles();
  const paths = [
    'M71.367 38.0327L41.9337 8.59935C40.7003 7.36602 39.0003 6.66602 37.2337 6.66602H13.3337C9.66699 6.66602 6.66699 9.66602 6.66699 13.3327V37.2327C6.66699 38.9994 7.36699 40.6993 8.63366 41.9327L38.067 71.366C40.667 73.966 44.9003 73.966 47.5003 71.366L71.4003 47.466C74.0003 44.866 74.0003 40.666 71.367 38.0327ZM42.767 66.666L13.3337 37.2327V13.3327H37.2337L66.667 42.766L42.767 66.666Z',
    'M21.667 26.666C24.4284 26.666 26.667 24.4274 26.667 21.666C26.667 18.9046 24.4284 16.666 21.667 16.666C18.9056 16.666 16.667 18.9046 16.667 21.666C16.667 24.4274 18.9056 26.666 21.667 26.666Z',
  ];
  const uuid = classes.id;
  const ids = Array.from({length: paths.length}).map(
    (_, i) => `tally-colored-${uuid}-${i}`,
  );

  return (
    <SvgIcon viewBox="0 0 80 80" {...props}>
      {paths.map((d, i) => (
        <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
      ))}
      <defs>
        <linearGradient
          id={ids[0]}
          x1="6.66699"
          y1="73.316"
          x2="73.317"
          y2="6.63683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BD47F7" />
          <stop offset="0.5208" stopColor="#5D59F8" />
          <stop offset="1" stopColor="#38BDD1" />
        </linearGradient>
        <linearGradient
          id={ids[1]}
          x1="6.66699"
          y1="73.316"
          x2="73.317"
          y2="6.63683"
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

export default TallyColored;
