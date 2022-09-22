import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Zcoin = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#23B852" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M18.725 19.148h3.39v2.964H11.93L24.573 9.46a1.468 1.468 0 00.32-1.574A1.454 1.454 0 0023.55 7H8.45A1.44 1.44 0 007 8.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 22.54a1.468 1.468 0 00-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0025 23.548v-10.68l-6.275 6.28z"
        />
      </g>
    </SvgIcon>
  );
});

export default Zcoin;
