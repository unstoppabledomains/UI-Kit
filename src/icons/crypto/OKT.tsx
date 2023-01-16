import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const OKT = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props} ref={iconRef || ref}>
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m260 120 l0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z" />
      </g>
    </SvgIcon>
  );
});

export default OKT;
