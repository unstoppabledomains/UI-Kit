import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const CompoundTether = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const paths = [
    {
      d: 'M209.3,226.9c-19.5,16.1-43.4,26-68.6,28.4c-33.7,3.3-67.4-6.9-93.7-28.4c-26.2-21.5-42.8-52.5-46.2-86.3c-2.5-25.2,2.5-50.5,14.4-72.8c11.9-22.3,30.2-40.6,52.5-52.5c22.3-11.9,47.6-17,72.8-14.5c25.2,2.5,49,12.3,68.6,28.4l-25.8,31.5c-13.3-10.9-29.6-17.7-46.8-19.3c-17.2-1.7-34.4,1.8-49.6,9.9c-15.2,8.1-27.6,20.6-35.8,35.8c-8.1,15.2-11.5,32.5-9.8,49.6c2.3,23,13.6,44.2,31.5,58.8c17.9,14.7,40.9,21.6,63.9,19.3c17.2-1.7,33.4-8.5,46.7-19.4L209.3,226.9z',
    },
  ];
  const ids = Array.from({length: paths.length}).map(
    (_, i) => `compound-tether-${uuid}-${i}`,
  );

  return (
    <SvgIcon viewBox="0 0 256 256" {...props} ref={iconRef || ref}>
      <g>
        <g>
          <circle
            className="st0"
            cx="128.1"
            cy="128.2"
            r="127.9"
            fill="#EDF0F2"
          />

          <linearGradient
            id={ids[0]}
            gradientUnits="userSpaceOnUse"
            x1="92.0939"
            y1="243.6545"
            x2="132.1881"
            y2="21.3615"
            gradientTransform="matrix(1 0 0 -1 0 258)"
          >
            <stop offset="0" stopColor="#27D3A2" />
            <stop offset="1" stopColor="#9388FD" />
          </linearGradient>
          {paths.map(({d}, i) => (
            <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
          ))}
          <path
            d="M128.5,232.9c57.7,0,104.4-46.8,104.4-104.4C232.9,70.8,186.2,24,128.5,24C70.8,24,24,70.8,24,128.5
			C24,186.2,70.8,232.9,128.5,232.9z"
            fill="#FFFFFF"
          />
        </g>
        <path
          d="M137.9,131.3L137.9,131.3c-0.6,0-3.4,0.2-9.8,0.2c-5.1,0-8.7-0.2-10-0.2l0,0c-19.7-0.9-34.3-4.2-34.3-8.3
		c0-4.1,14.7-7.4,34.3-8.3V128c1.3,0.1,5,0.3,10.1,0.3c6.1,0,9.2-0.3,9.7-0.3v-13.2c19.6,0.9,34.3,4.2,34.3,8.3
		C172.2,127.1,157.6,130.5,137.9,131.3L137.9,131.3L137.9,131.3z M137.9,113.4v-11.8h27.4v-18H90.8v18h27.4v11.8
		c-22.3,1-39,5.4-39,10.6s16.7,9.6,39,10.6v37.9h19.8v-37.9c22.2-1,38.9-5.4,38.9-10.6C176.9,118.8,160.2,114.4,137.9,113.4
		L137.9,113.4L137.9,113.4z M137.9,113.4L137.9,113.4z"
          fill="#283947"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
    </SvgIcon>
  );
});

export default CompoundTether;