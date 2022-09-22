import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Firo = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FEFEFE"
      />
      <path
        d="M7.04432 17.2563C7.32177 17.2563 7.58382 17.1021 7.70713 16.8555L9.47206 13.5029H6.74374C6.32755 13.5029 5.99615 13.1638 5.99615 12.7553V11.2524C5.99615 10.8362 6.33526 10.5048 6.74374 10.5048H11.0597L14.4123 4.15414C14.5434 3.90751 14.7977 3.75337 15.0751 3.75337H20.7245C18.5356 1.44123 15.4451 0 12.0077 0C5.37958 0 0 5.37187 0 12.0077C0 13.8882 0.4316 15.6763 1.21002 17.264H7.04432V17.2563Z"
        fill="#9B1C2E"
      />
      <path
        d="M16.9557 6.74379C16.6782 6.74379 16.4162 6.89793 16.2929 7.14456L14.5279 10.4972H17.2562C17.6724 10.4972 18.0038 10.8363 18.0038 11.2448V12.7476C18.0038 13.1638 17.6647 13.4952 17.2562 13.4952H12.9403L9.58765 19.8459C9.45663 20.0925 9.20229 20.2467 8.92484 20.2467H3.27551C5.46434 22.5588 8.5549 24.0001 11.9923 24.0001C18.6204 24.0001 24 18.6282 24 11.9923C24 10.1118 23.5684 8.32375 22.79 6.73608H16.9557V6.74379Z"
        fill="#9B1C2E"
      />
    </SvgIcon>
  );
});

export default Firo;
