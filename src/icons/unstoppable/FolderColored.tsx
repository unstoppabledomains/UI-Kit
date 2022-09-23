import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';
import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const FolderColored = (props: SvgIconProps) => {
  const {classes} = useStyles();
  const paths = [
    'M46.6667 13.9997H28L23.3334 9.33301H9.33335C6.76669 9.33301 4.69002 11.433 4.69002 13.9997L4.66669 41.9997C4.66669 44.5663 6.76669 46.6663 9.33335 46.6663H46.6667C49.2334 46.6663 51.3334 44.5663 51.3334 41.9997V18.6663C51.3334 16.0997 49.2334 13.9997 46.6667 13.9997ZM46.6667 41.9997H9.33335V18.6663H46.6667V41.9997Z',
  ];
  const uuid = classes.id;
  const ids = Array.from({length: paths.length}).map((_, i) => `${uuid}${i}`);

  return (
    <SvgIcon viewBox="0 0 56 56" {...props}>
      {paths.map((d, i) => (
        <path key={i} d={d} fill={`url(#${ids[i]})`} />
      ))}
      <defs>
        <linearGradient
          id={ids[0]}
          x1="4.66669"
          y1="46.6663"
          x2="41.0894"
          y2="1.13788"
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

export default FolderColored;
