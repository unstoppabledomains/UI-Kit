import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const EOS = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#000" fillRule="nonzero" />
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".64"
          d="M10.886 11.61L16 27.667l-7.588-4.754 2.474-11.303L16 4.624v4.9L8.412 22.913h15.183L16.007 9.524v-4.9l5.113 6.986 2.475 11.303-7.588 4.754L21.12 11.61"
        />
      </g>
    </SvgIcon>
  );
});

export default EOS;
