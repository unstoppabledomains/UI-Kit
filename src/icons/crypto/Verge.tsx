import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Verge = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 283.5 283.5" {...props} ref={iconRef || ref}>
      <g>
        <polygon
          style={{fill: '#37BDE2'}}
          points="216.5,15.8 141.7,187.8 67,15.8 32.3,15.8 141.7,267.7 251.2,15.8"
        />
        <polygon
          style={{fill: '#37BDE2'}}
          points="141.7,108.4 180.9,15.8 102.5,15.8"
        />
      </g>
    </SvgIcon>
  );
});

export default Verge;
