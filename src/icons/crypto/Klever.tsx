import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const Klever = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const paths = [
    {
      d: 'M2344.998,1505h-427.135l427.135-422.86V1505z',
    },
    {
      d: 'M2344.998,1505l-213.547-213.588l38.447-34.13L2344.998,1505z',
    },
    {
      d: 'M2344.998,1505h-849.995V655L2344.998,1505z',
    },
  ];
  const ids = Array.from({length: paths.length}).map((_, i) => `${uuid}${i}`);

  return (
    <SvgIcon viewBox="1170 330 1500 1500" {...props} ref={iconRef || ref}>
      <circle fill="#FFFFFF" cx="1920" cy="1080" r="750" />

      {paths.map(({d}, i) => (
        <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
      ))}

      <linearGradient
        id={ids[0]}
        gradientUnits="userSpaceOnUse"
        x1="2413.0305"
        y1="675.8442"
        x2="2413.0305"
        y2="250.1527"
        gradientTransform="matrix(1 0 0 -1 -281.5996 1756.04)"
      >
        <stop offset="2.717170e-007" stopColor="#FF4681" />
        <stop offset="1" stopColor="#9B44F6" />
      </linearGradient>
      <linearGradient
        id={ids[1]}
        gradientUnits="userSpaceOnUse"
        x1="2556.7991"
        y1="455.4585"
        x2="2496.886"
        y2="297.2668"
        gradientTransform="matrix(1 0 0 -1 -281.5996 1756.04)"
      >
        <stop offset="9.430190e-007" stopColor="#000000" />
        <stop offset="1" stopColor="#000000" />
      </linearGradient>
      <linearGradient
        id={ids[2]}
        gradientUnits="userSpaceOnUse"
        x1="1574.1228"
        y1="878.521"
        x2="2425.4524"
        y2="27.1923"
        gradientTransform="matrix(1 0 0 -1 -281.5996 1756.04)"
      >
        <stop offset="9.430190e-007" stopColor="#FF4681" />
        <stop offset="0.7392" stopColor="#9B44F6" />
      </linearGradient>
    </SvgIcon>
  );
});

export default Klever;
