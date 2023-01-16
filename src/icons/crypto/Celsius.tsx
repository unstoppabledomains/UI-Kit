import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const Celsius = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 57.7 57.7" {...props} ref={iconRef || ref}>
      <g>
        <g>
          <circle fill="#262761" cx="43.3" cy="22.5" r="1.4" />
          <path
            fill="#262761"
            d="M28.9,0C12.9,0,0,12.9,0,28.9s12.9,28.9,28.9,28.9s28.9-12.9,28.9-28.9S44.8,0,28.9,0z M42,40.9
			c-3.4,3.8-8.3,5.9-13.3,5.9h0c-5.1,0-10-2.2-13.4-6c-3.5-3.9-5-8.8-4.5-14c0.9-8.3,7.5-14.9,15.8-15.9c0.7-0.1,1.4-0.1,2.1-0.1
			c4,0,7.8,1.3,11,3.8c0.2,0.1,0.3,0.4,0.3,0.6c0,0.3-0.1,0.5-0.3,0.7l-1.9,1.7c-0.2,0.2-0.5,0.3-0.8,0.3c-0.2,0-0.5-0.1-0.6-0.2
			c-2.3-1.6-5-2.4-7.7-2.4c-3.9,0-7.6,1.7-10.1,4.6c-2.6,2.9-3.8,6.7-3.3,10.6c0.7,6.2,5.7,11.2,11.9,11.9c0.5,0.1,1,0.1,1.6,0.1
			c3.6,0,7-1.4,9.6-4c0.2-0.2,0.5-0.3,0.8-0.3c0.2,0,0.4,0.1,0.6,0.2l2.1,1.4c0.2,0.1,0.3,0.3,0.4,0.6C42.2,40.5,42.1,40.7,42,40.9z
			 M43.3,26.9c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4c2.4,0,4.4,2,4.4,4.4S45.7,26.9,43.3,26.9z"
          />
        </g>
      </g>
    </SvgIcon>
  );
});

export default Celsius;
