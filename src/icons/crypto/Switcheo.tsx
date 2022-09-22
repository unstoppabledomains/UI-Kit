import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Switcheo = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 491.23 491.23" {...props} ref={iconRef || ref}>
      <circle cx="245.62" cy="245.62" fill="#212a3f" r="245.62" />
      <path
        d="m216 409.57 163.01-226.5-42.18-.48h-2.84l-224.61-1.42-.47 39.33 196.65 1.42-134.57 187.18z"
        fill="#88c773"
      />
      <path
        d="m185.2 269.31 134.57-187.17-45.01-.48-162.53 226.51 42.17.47h2.84l224.61 1.42.47-39.33z"
        fill="#fff"
      />
    </SvgIcon>
  );
});

export default Switcheo;
