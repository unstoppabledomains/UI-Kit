import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const Hedera = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 2500 2500" {...props} ref={iconRef || ref}>
      <g>
        <path d="M1250,0C559.64,0,0,559.64,0,1250S559.64,2500,1250,2500s1250-559.64,1250-1250S1940.36,0,1250,0" />
        <path
          fill="#fff"
          d="M1758.12,1790.62H1599.38V1453.13H900.62v337.49H741.87V696.25H900.62v329.37h698.76V696.25h158.75Zm-850-463.75h698.75V1152.5H908.12Z"
        />
      </g>
    </SvgIcon>
  );
});

export default Hedera;
