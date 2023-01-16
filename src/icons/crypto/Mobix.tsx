import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Mobix = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 425.2 425.2" {...props} ref={iconRef || ref}>
      <g>
        <circle
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFFFFF"
          cx="212.9"
          cy="212.3"
          r="193"
        />
        <g>
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="391.1584"
            y1="342.1496"
            x2="43.2013"
            y2="92.8905"
            gradientTransform="matrix(1 0 0 -1 0 426.7244)"
          >
            <stop offset="0" stopColor="#0096E9" />
            <stop offset="1" stopColor="#00C74A" />
          </linearGradient>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_1_)"
            d="M272.5,165.1l0,119l0,0.6c0.3,6.4,5.4,11.5,11.8,11.8l0.6,0l80.6,0c-29.7,53.5-86.9,89.7-152.6,89.7
			S90,350,60.3,296.5l80.6,0l0.6,0c6.4-0.3,11.5-5.4,11.8-11.8l0-0.6l0-119l53.1,32.9l0.6,0.3c3.7,2,8.2,2,11.9,0l0.6-0.3
			L272.5,165.1z M332.2,199.9l-0.6,0c-6.6,0.3-11.8,5.7-11.8,12.4s5.2,12.1,11.8,12.4l0.6,0l54.7,0c-1.2,17.2-4.9,33.6-10.8,49
			c-1.7-1.1-3.8-1.8-6-1.9l-0.7,0l-72.1,0l0-128.9l0-0.5c-0.4-9.2-10.5-14.8-18.5-10.3l-0.5,0.3l-65.5,40.6l-65.5-40.6l-0.5-0.3
			c-8.1-4.5-18.1,1-18.5,10.3l0,0.5l0,128.9l-77,0l-0.6,0c-0.6,0-1.2,0.1-1.8,0.2c-5.5-14.9-8.9-30.8-10.1-47.3l54.7,0l0.6,0
			c6.6-0.3,11.8-5.7,11.8-12.4s-5.2-12.1-11.8-12.4l-0.6,0l-54.7,0c1.2-16.8,4.7-32.9,10.3-48c1.2,0.5,2.5,0.8,3.8,0.9l0.8,0h39.8
			l0.6,0c6.6-0.3,11.8-5.7,11.8-12.4c0-6.6-5.2-12.1-11.8-12.4l-0.6,0l-33.4,0C90,74.5,147.2,38.3,212.9,38.3S335.8,74.5,365.5,128
			l-33.4,0l-0.6,0c-6.6,0.3-11.8,5.7-11.8,12.4c0,6.6,5.2,12.1,11.8,12.4l0.6,0h39.8l0.6,0c1.4-0.1,2.8-0.4,4-0.9
			c5.6,15.1,9.2,31.2,10.3,48L332.2,199.9z"
          />
        </g>
      </g>
    </SvgIcon>
  );
});

export default Mobix;
