import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Fantom = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <defs>
        <mask x="10" y="6" width="93.1" height="20" maskUnits="userSpaceOnUse">
          <path className="cls-1" d="M10 6h93.1v20H10Z" fill="#ffffff" />
        </mask>
      </defs>
      <g>
        <circle cx="16" cy="16" r="16" fill="#13b5ec" />
        <path
          d="m17.2 12.9 3.6-2.1V15Zm3.6 9L16 24.7l-4.8-2.8V17l4.8 2.8 4.8-2.8Zm-9.6-11.1 3.6 2.1-3.6 2.1Zm5.4 3.1 3.6 2.1-3.6 2.1Zm-1.2 4.2L11.8 16l3.6-2.1Zm4.8-8.3L16 12.2l-4.2-2.4L16 7.3ZM10 9.4v13.1l6 3.4 6-3.4V9.4L16 6Z"
          fill="#ffffff"
        />
      </g>
    </SvgIcon>
  );
});

export default Fantom;
