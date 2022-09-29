import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Nexo = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#1A4199" />
        <g fill="#FFF">
          <path
            d="M10.676 7.125l10.732 6.191v6.319L5 10.159l5.265-3.034a.42.42 0 01.42 0"
            opacity=".7"
          />
          <path opacity=".9" d="M21.408 7l-5.467 3.16 5.467 3.156z" />
          <path d="M21.408 7l5.264 3.036a.42.42 0 01.22.367v12.389l-5.484-3.157V7z" />
          <path
            d="M26.881 22.792l-5.264 3.033a.44.44 0 01-.42 0l-10.732-6.19v-6.328l16.416 9.485z"
            opacity=".9"
          />
          <path
            d="M5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036V13.307L5 10.16z"
            opacity=".6"
          />
          <path opacity=".7" d="M10.476 25.95l5.465-3.158-5.465-3.157z" />
        </g>
      </g>
    </SvgIcon>
  );
});

export default Nexo;
