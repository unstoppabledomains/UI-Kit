import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const XLA = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill="#248BFF" />
      <path
        d="M12 10.5L5.5 17H8.5L12 13.5L15.5 17H18.5L12 10.5Z"
        fill="#E6F5FF"
      />
      <rect x="6" y="7" width="12" height="2" fill="#E6F5FF" />
    </SvgIcon>
  );
});

export default XLA;
