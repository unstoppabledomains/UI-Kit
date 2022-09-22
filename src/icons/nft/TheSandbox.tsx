import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import type {ForwardedRef} from 'react';
import React from 'react';

const TheSandbox = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} viewBox="0 0 50 50" ref={ref}>
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="25.2144"
          y1="1024.8223"
          x2="25.8374"
          y2="1024.1193"
          gradientTransform="matrix(50 0 0 -50 -1250 51250)"
        >
          <stop offset="0" style={{stopColor: '#00adef'}} />
          <stop offset="1" style={{stopColor: '#0084ff'}} />
        </linearGradient>
        <circle
          xmlns="http://www.w3.org/2000/svg"
          fill="url(#SVGID_1_)"
          cx="25"
          cy="25"
          r="25"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          d="M16.6,11.8l-2.7,2.7v10.7l2.7,2.7h10.7v5.4H22v-2.7h-8.1v5.4l2.7,2.7h16.1l2.7-2.7V25.2l-2.7-2.7H22v-5.4h5.4  v2.7h8.1v-5.4l-2.7-2.7H16.6z"
        />
      </SvgIcon>
    );
  },
);

export default TheSandbox;
