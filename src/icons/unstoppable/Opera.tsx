import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import type {ForwardedRef} from 'react';
import React from 'react';
import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const Opera = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    const {classes} = useStyles();
    const paths = [
      'M8.70844 17.6355C7.60289 16.3305 6.88673 14.4009 6.83804 12.2356C6.83787 12.2301 6.83787 11.7701 6.83804 11.7644C6.88673 9.59932 7.60289 7.66985 8.70844 6.36475C10.1431 4.50185 12.2757 3.32053 14.657 3.32053C16.1221 3.32053 17.4928 3.7679 18.6649 4.54558C16.9046 2.97059 14.5835 2.00995 12.0379 2.00042C12.0253 2.00042 12.0127 1.99995 12.0001 1.99995C6.47724 1.99995 2 6.47716 2 12C2 17.3632 6.22218 21.7399 11.5238 21.9883C11.6816 21.9959 11.8403 22 12.0001 22C14.5602 22 16.8953 21.0373 18.6643 19.455C17.4923 20.2324 16.1218 20.6797 14.657 20.6797C12.2757 20.6797 10.1431 19.4983 8.70844 17.6355',
      'M8.70837 6.36472C9.62579 5.28161 10.8113 4.62824 12.106 4.62824C15.017 4.62824 17.377 7.92881 17.377 12.0001C17.377 16.0713 15.017 19.3719 12.106 19.3719C10.8113 19.3719 9.62599 18.7185 8.70837 17.6355C10.143 19.4983 12.2756 20.6797 14.6569 20.6797C16.1217 20.6797 17.4922 20.2324 18.6642 19.455C20.7112 17.6238 22 14.9626 22 11.9999C22 9.03764 20.7116 6.37657 18.6648 4.54555C17.4927 3.76788 16.122 3.3205 14.6569 3.3205C12.2756 3.3205 10.143 4.50182 8.70837 6.36472',
    ];
    const uuid = classes.id;
    const ids = Array.from({length: paths.length}).map((_, i) => `${uuid}${i}`);

    return (
      <SvgIcon {...props} ref={ref}>
        {paths.map((d, i) => (
          <path key={i} d={d} fill={`url(#${ids[i]})`} />
        ))}

        <defs>
          <linearGradient
            id={ids[0]}
            x1="10.3325"
            y1="2.32608"
            x2="10.3325"
            y2="21.7089"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED1F33" />
            <stop offset="0.3" stopColor="#ED1F33" />
            <stop offset="1" stopColor="#A51C21" />
          </linearGradient>
          <linearGradient
            id={ids[1]}
            x1="15.3542"
            y1="3.46849"
            x2="15.3542"
            y2="20.6117"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9A1A1F" />
            <stop offset="0.7" stopColor="#EF3547" />
            <stop offset="1" stopColor="#EF3547" />
          </linearGradient>
        </defs>
      </SvgIcon>
    );
  },
);

export default Opera;
