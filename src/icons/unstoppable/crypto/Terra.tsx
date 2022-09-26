import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Terra = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 2000 2000" {...props} ref={iconRef || ref}>
      <circle fill="#172852" cx="1000" cy="1000" r="1000" />
      <g>
        <path
          fill="#FFD83D"
          d="M805.5,446.9c117.1-43.8,248.9-43.9,368.2-7.9c155.3,48.2,286.4,165.4,354.9,312.5
		c18.9,41.9,37,85.6,38.8,132.2c-87.3-50.6-183-83.4-278.9-113.3c-153.4-55.3-314-93.7-459.2-169.7c-33.8-20.2-76.9-40.9-86.1-83
		C739.5,481.3,778,461,805.5,446.9"
        />
        <path
          fill="#FFD83D"
          d="M452,800.9c33.9-92,89.5-177.4,165-240.7c19.2,157.9,86.4,310.5,197.4,425.3
		c133.1,138.3,322.7,223.2,515.6,220c76.6,2.4,151.5-15.3,226.2-29.6c-73.5,265.6-364.6,441.9-634.3,399.5
		c-162.8-20.8-313.1-117.2-403.8-253.3C415.8,1171.7,390,972,452,800.9z"
        />
      </g>
      <path
        fill="#FF6F03"
        d="M1288.5,770.4c95.9,29.9,191.6,62.7,278.9,113.3l5.9,3.1c8.1,60.9,14,123,3.2,184
	c-43.9-18.6-79.5-51.3-116.7-80.2C1388.2,931,1315.1,862.8,1288.5,770.4"
      />
    </SvgIcon>
  );
});

export default Terra;