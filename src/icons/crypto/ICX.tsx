import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const ICX = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" fill="#1fc5c9" r="16" />
        <path
          d="M11.296 22.472l2.164-2.164a5 5 0 006.848-6.848l2.164-2.164a8 8 0 01-11.176 11.176zm-1.768-1.768A8 8 0 0120.704 9.528l-2.164 2.164a5 5 0 00-6.848 6.848zM24 10a2 2 0 110-4 2 2 0 010 4zM8 26a2 2 0 110-4 2 2 0 010 4z"
          fill="#fff"
        />
      </g>
    </SvgIcon>
  );
});

export default ICX;
