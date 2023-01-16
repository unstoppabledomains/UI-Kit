import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const ProfilePlaceholder = (props: SvgIconProps) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const ids = Array.from({length: 3}).map(
    (_, i) => `profile-placeholder-${uuid}-${i}`,
  );

  return (
    <SvgIcon viewBox="0 0 132 132" {...props}>
      <mask
        id={ids[0]}
        style={{maskType: 'alpha'}}
        maskUnits="userSpaceOnUse"
        x="6"
        y="6"
        width="120"
        height="120"
      >
        <path
          d="M126 66C126 99.1371 99.1371 126 66 126C32.8629 126 6 99.1371 6 66C6 32.8629 32.8629 6 66 6C99.1371 6 126 32.8629 126 66Z"
          fill="#0D67FE"
        />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <ellipse
          cx="66"
          cy="48"
          rx="24"
          ry="24"
          fill={`url(#${ids[1]})`}
          fillOpacity="0.32"
        />
        <circle
          cx="66"
          cy="140"
          r="60"
          fill={`url(#${ids[2]})`}
          fillOpacity="0.32"
        />
      </g>
      <defs>
        <linearGradient
          id={ids[1]}
          x1="66"
          y1="24"
          x2="66"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props.stopColor || 'white'} />
          <stop
            offset="1"
            stopColor={props.stopColor || 'white'}
            stopOpacity="0.4"
          />
        </linearGradient>
        <linearGradient
          id={ids[2]}
          x1="66"
          y1="80"
          x2="66"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props.stopColor || 'white'} />
          <stop
            offset="1"
            stopColor={props.stopColor || 'white'}
            stopOpacity="0.4"
          />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

ProfilePlaceholder.muiName = 'ProfilePlaceholderIcon';

export default ProfilePlaceholder;
