import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';
import {makeStyles} from 'styles';

const useStyles = makeStyles()(() => ({id: {}}));

const VerifiedGradient = React.forwardRef<SVGSVGElement | null, SvgIconProps>(
  (props, ref) => {
    const {classes} = useStyles();
    const uuid = classes.id;
    const ids = Array.from({length: 1}).map((_, i) => `${uuid}${i}`);

    return (
      <SvgIcon viewBox="0 0 20 20" {...props} ref={ref}>
        <path
          d="M19.1673 10L17.134 7.675L17.4173 4.6L14.409 3.91667L12.834 1.25L10.0007 2.46667L7.16732 1.25L5.59232 3.90833L2.58398 4.58333L2.86732 7.66667L0.833984 10L2.86732 12.325L2.58398 15.4083L5.59232 16.0917L7.16732 18.75L10.0007 17.525L12.834 18.7417L14.409 16.0833L17.4173 15.4L17.134 12.325L19.1673 10ZM8.40898 13.9333L5.24232 10.7583L6.47565 9.525L8.40898 11.4667L13.284 6.575L14.5173 7.80833L8.40898 13.9333Z"
          fill={`url(#${ids[0]})`}
        />
        <defs>
          <linearGradient
            id={ids[0]}
            x1="0.833984"
            y1="18.75"
            x2="18.3151"
            y2="0.436488"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BD47F7" />
            <stop offset="0.5208" stopColor="#5D59F8" />
            <stop offset="1" stopColor="#38BDD1" />
          </linearGradient>
        </defs>
      </SvgIcon>
    );
  },
);

export default VerifiedGradient;
