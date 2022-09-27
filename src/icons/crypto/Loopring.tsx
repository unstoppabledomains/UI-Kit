import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Loopring = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 30 23.9" {...props} ref={iconRef || ref}>
      <path
        d="M17.4,11.6H30v.1l-19.7,12,9.8-7.8ZM10,0V23.9l-10-8Z"
        fill="#1c60ff"
      />
    </SvgIcon>
  );
});

export default Loopring;
