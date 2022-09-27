import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Beam = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 544 544" {...props} ref={iconRef || ref}>
      <defs>
        <linearGradient
          id="Nameless_gradient_11"
          x1="-24.6"
          y1="683.51"
          x2="-23.57"
          y2="683.51"
          gradientTransform="matrix(98, 0, 0, -47, 2497.75, 32364.11)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="Nameless_gradient_39"
          x1="-28.68"
          y1="685.09"
          x2="-27.47"
          y2="685.09"
          gradientTransform="translate(-2353.25 41328.94) rotate(180) scale(98 60)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd76fd" stopOpacity="0" />
          <stop offset="1" stopColor="#ff51ff" />
        </linearGradient>
        <linearGradient
          id="Nameless_gradient_370"
          x1="-28.7"
          y1="703.17"
          x2="-27.72"
          y2="703.17"
          gradientTransform="matrix(-98, 0, 0, 26, -2353.25, -18019.72)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9d6eff" stopOpacity="0" />
          <stop offset="1" stopColor="#a18cff" />
        </linearGradient>
        <linearGradient
          id="Nameless_gradient_12"
          x1="-28.69"
          y1="682.8"
          x2="-27.57"
          y2="682.8"
          gradientTransform="translate(-2353.25 29603.78) rotate(180) scale(98 43)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ae60d6" stopOpacity="0" />
          <stop offset="1" stopColor="#ab38e6" />
        </linearGradient>
      </defs>
      <title>Beam logo</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="logo_in_dark_circle" data-name="logo in dark circle">
          <g id="logo_in_dark_circle-2" data-name="logo in dark circle">
            <circle id="circle" fill="#0b1624" cx="272" cy="272" r="272" />
            <g id="logo">
              <path
                id="Combined-Shape"
                fill="#0b76ff"
                d="M272.25,327.21h77.53l-77.5-135V110.45L424.19,370.64H272.25Z"
              />
              <path
                id="Combined-Shape-2"
                data-name="Combined-Shape"
                fill="#24c1ff"
                d="M272.25,327.21H194.72l77.5-135V110.45L120.31,370.64H272.25Z"
              />
              <path
                id="BEAM"
                fill="#25c1ff"
                d="M164,434.94V403.2c1.81-.09,6.33-.27,9.87-.27,7.78,0,10.94,3.51,10.94,7.93a7.79,7.79,0,0,1-3.72,7.12v.09c2.37.86,4.65,3.19,4.65,7.29,0,6.71-5.3,9.85-12.38,9.85C170.24,435.21,165.91,435.12,164,434.94Zm10.33-12.81h-2.88v6a8.51,8.51,0,0,0,2.51.27c2.89,0,4.33-1.23,4.33-3.37S176.76,422.13,174.33,422.13Zm-.55-12.36a18.69,18.69,0,0,0-2.33.18v5.79h2.47c1.9,0,3.44-.77,3.44-3.1C177.36,410.73,175.59,409.77,173.78,409.77Zm50,25.26V403.11H243.1V410H231.23v5.61h10.48v6.84H231.23v5.79h12.34V435Zm53.63,0L291,403.11h6.66L311.18,435h-8l-2.7-6.7h-12.9l-2.7,6.7Zm16.67-22.57-3.68,9h7.32ZM346.41,435V403.11h7.5L364,416.56l9.5-13.45h7V435h-7.45V414.69L364,427.14H362.9l-9-12.31V435Z"
              />
              <polygon
                id="Triangle-5"
                fill="#39fff2"
                points="272.25 226.3 272.25 313.57 224.77 313.67 272.25 226.3"
              />
              <polygon
                id="Triangle-5-2"
                data-name="Triangle-5"
                fill="#00e2c2"
                points="272.25 226.3 272.25 313.57 319.73 313.67 272.25 226.3"
              />
              <polygon
                id="Rectangle-5"
                fill="url(#Nameless_gradient_11)"
                points="86.13 191.81 272.25 277.83 272.25 286.83 86.13 246.1 86.13 191.81"
              />
              <polygon
                id="Rectangle-5-2"
                data-name="Rectangle-5"
                fill="url(#Nameless_gradient_39)"
                points="458.75 166.83 272.25 277.83 272.25 280.83 458.75 202.67 458.75 166.83"
              />
              <polygon
                id="Rectangle-5-3"
                data-name="Rectangle-5"
                fill="url(#Nameless_gradient_370)"
                points="458.75 274.33 272.25 286.83 272.25 283.83 458.75 238.5 458.75 274.33"
              />
              <polygon
                id="Rectangle-5-4"
                data-name="Rectangle-5"
                fill="url(#Nameless_gradient_12)"
                points="458.75 202.67 272.25 280.83 272.25 283.83 458.75 238.5 458.75 202.67"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
});

export default Beam;
