import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const NotVerified = React.forwardRef<SVGSVGElement | null, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.56 14.79L20.7131 16.452L18.5012 14.2388L18.49 14.12L19.05 13.47L20.33 11.99L19.04 10.52L18.48 9.87L18.56 9.02L18.74 7.07L16 6.45L15.56 5.71L14.57 4.03L12.79 4.8L12 5.14L11.2 4.8L9.42 4.03L9.00388 4.73615L7.54657 3.27801L8.6 1.5L12 2.96L15.4 1.5L17.29 4.69L20.9 5.51L20.56 9.2L23 11.99L20.56 14.79ZM16.4622 17.4377L12.9125 13.8898L10.09 16.72L6.29 12.91L7.77 11.42L10.09 13.75L11.4287 12.4068L5.93421 6.91518L5.25 7.07L5.43 9.01L5.52 9.87L4.96 10.52L3.67 12L4.96 13.47L5.52 14.12L5.44 14.97L5.26 16.93L8 17.55L8.44 18.29L9.43 19.96L11.21 19.19L12 18.85L12.8 19.19L14.58 19.96L15.57 18.28L16.01 17.54L16.4622 17.4377ZM18.1337 19.1083L17.29 19.3L15.4 22.49L12 21.03L8.6 22.5L6.71 19.3L3.1 18.48L3.44 14.78L1 11.99L3.44 9.2L3.1 5.5L4.25826 5.24011L2 2.98303L3.47335 1.5L22 20.0274L20.5266 21.5L18.1337 19.1083ZM17.43 9.36L15.5296 11.2656L14.0457 9.7808L15.95 7.87L17.43 9.36Z"
        />
      </SvgIcon>
    );
  },
);

export default NotVerified;
