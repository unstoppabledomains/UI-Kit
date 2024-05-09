import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const WETH = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path
        fill="#000"
        d="M6.78 19.25c-1.25.1-2.4.26-3.39.48-.98.2-1.79.47-2.37.75-.58.3-.92.6-1 .92-.08.33.1.65.52.95.43.3 1.1.58 1.97.82.87.24 1.93.44 3.1.58a37.02 37.02 0 0 0 7.67.12l-6.5-4.62Z"
      />
      <path
        fill="#EC1C79"
        d="M21.01 10.94A10 10 0 0 1 11 20.92 10 10 0 0 1 .96 10.94 10 10 0 0 1 10.99.96 10 10 0 0 1 21 10.94Z"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M21.97 10.94c0 6.04-4.92 10.94-10.98 10.94C4.92 21.88 0 16.98 0 10.94 0 4.9 4.92 0 10.99 0c6.06 0 10.98 4.9 10.98 10.94ZM11 20.92a10 10 0 0 0 10-9.98A10 10 0 0 0 11 .96 10 10 0 0 0 .96 10.94a10 10 0 0 0 10.03 9.98Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M23.04 12.96a10 10 0 0 1-10.03 9.98A10 10 0 0 1 3 12.96a10 10 0 0 1 10-9.99 10 10 0 0 1 10.03 9.99Z"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M24 12.96c0 6.04-4.92 10.93-10.99 10.93-6.06 0-10.98-4.9-10.98-10.93C2.03 6.9 6.95 2.02 13 2.02c6.08 0 11 4.9 11 10.94Zm-10.99 9.98a10 10 0 0 0 10.03-9.98 10 10 0 0 0-10.03-9.99A10 10 0 0 0 3 12.96a10 10 0 0 0 10 9.98Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="m2.03 13.17-1.6-.75.45-.96 1.6.75-.45.96Zm.53-2.55L.43 9.77l.4-.99 2.13.85-.4.99Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="M20.83 15.08v-1.5h-1.37v1.5h-1.24v-3.93h1.24v1.43h1.37v-1.43h1.25v3.93h-1.25Zm-4.45-2.92v2.92h-1.24v-2.92h-1.28v-1.01h3.79v1h-1.27Zm-6.3-1.01h3.35v.94h-2.1v.55h1.8v.9h-1.8v.6h2.14v.94h-3.39v-3.93Zm-2.72 3.93-.5-2.4h-.03l-.5 2.4H4.96l-.9-3.93h1.29l.45 2.23h.02l.44-2.23h1.23l.46 2.23h.03l.41-2.23h1.24l-.9 3.93H7.36Z"
      />
    </SvgIcon>
  );
});

export default WETH;
