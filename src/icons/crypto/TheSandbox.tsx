import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const TheSandbox = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle fill="#04ADEF" cx="16" cy="16" r="16" />
        <path
          d="M10.75 7.067L9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8L21.25 7h-10.5z"
          fill="#FFF"
        />
      </g>
    </SvgIcon>
  );
});

export default TheSandbox;
