import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const StarsConstellation = React.forwardRef<SVGSVGElement | null, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon viewBox="0 0 38 38" {...props} ref={ref}>
        <path d="M30.668 14L32.7513 9.41666L37.3346 7.33332L32.7513 5.24999L30.668 0.666656L28.5846 5.24999L24.0013 7.33332L28.5846 9.41666L30.668 14Z" />
        <path d="M30.668 24L28.5846 28.5833L24.0013 30.6667L28.5846 32.75L30.668 37.3333L32.7513 32.75L37.3346 30.6667L32.7513 28.5833L30.668 24Z" />
        <path d="M18.168 14.8333L14.0013 5.66666L9.83463 14.8333L0.667969 19L9.83463 23.1667L14.0013 32.3333L18.168 23.1667L27.3346 19L18.168 14.8333ZM15.6513 20.65L14.0013 24.2833L12.3513 20.65L8.71797 19L12.3513 17.35L14.0013 13.7167L15.6513 17.35L19.2846 19L15.6513 20.65Z" />
      </SvgIcon>
    );
  },
);

export default StarsConstellation;
