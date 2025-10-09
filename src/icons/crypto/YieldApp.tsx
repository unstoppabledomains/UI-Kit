import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));
// https://www.yield.app/en

const Yield = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const ids = Array.from({length: 1}).map((_, i) => `yield-app-${uuid}-${i}`);

  return (
    <SvgIcon viewBox="0 0 1728 1728" {...props} ref={iconRef || ref}>
      <g>
        <path fill="#FFFFFF" d="M892.1,856" />
        <linearGradient
          id={ids[0]}
          gradientUnits="userSpaceOnUse"
          x1="-42.1028"
          y1="864"
          x2="1664.6058"
          y2="864"
        >
          <stop offset="1.278670e-06" style={{stopColor: '#0066CC'}} />
          <stop offset="0.9986" style={{stopColor: '#0F367F'}} />
        </linearGradient>
        <path
          fill={`url(#${ids[0]})`}
          d="M1714.1,864c0,477.2-379.7,864-848.1,864S17.9,1341.2,17.9,864S397.6,0,866,0S1714.1,386.8,1714.1,864z"
        />
        <g>
          <path
            fill="#FFFFFF"
            d="M984.8,815.9L984.8,815.9l-404.7,366.4c-14.7,13.2-28.5,24.5-41.8,35L403,1331.1
			c64.2,24.7,168.9,39.2,281.8-51.6L1053.7,942l0,0c23.7-19,61.7-37.8,94.2-37.8c77,0,139.4,63.6,139.4,142
			c0,78.4-62.4,142-139.4,142c-64.7,0-104.9-30.4-132.9-96.9l-111.1,93c34.7,66,105.2,145.9,244,145.9
			c153.9,0,278.7-127.1,278.7-284c0-156.8-124.8-284-278.7-284C1087,762.2,1030.7,782.1,984.8,815.9z"
          />
          <path
            fill="#FFFFFF"
            d="M1047.1,448.5L678.3,786c-23.7,19-61.7,37.8-94.2,37.8c-77,0-139.4-63.6-139.4-142c0-78.4,62.4-142,139.4-142
			c62.6,0,102.3,28.5,130.1,90.7l110.1-93.5c-35.9-64.5-106.2-139.1-240.3-139.1c-153.9,0-278.7,127.1-278.7,284
			c0,156.8,124.8,284,278.7,284c60.9,0,117.2-19.9,163.1-53.7l0,0l404.7-366.4c14.7-13.2,28.5-24.5,41.8-35L1329,396.9
			C1264.8,372.2,1160.1,357.7,1047.1,448.5z"
          />
        </g>
      </g>
    </SvgIcon>
  );
});

export default Yield;
