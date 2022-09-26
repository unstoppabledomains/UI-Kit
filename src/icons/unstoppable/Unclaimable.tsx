import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import type {ForwardedRef} from 'react';
import React from 'react';

const Unclaimable = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path d="M7.94063 5.12L6.49062 3.66C8.07062 2.61 9.96062 2 12.0006 2C17.5206 2 22.0006 6.48 22.0006 12C22.0006 14.04 21.3906 15.93 20.3406 17.51L18.8806 16.05C19.5906 14.86 20.0006 13.48 20.0006 12C20.0006 7.59 16.4106 4 12.0006 4C10.5206 4 9.14063 4.41 7.94063 5.12ZM17.6606 9.53L16.2506 8.12L13.6006 10.77L15.0106 12.18L17.6606 9.53ZM19.7806 22.61L17.5106 20.34C15.9306 21.39 14.0406 22 12.0006 22C6.48062 22 2.00063 17.52 2.00063 12C2.00063 9.96 2.61063 8.07 3.66062 6.49L1.39062 4.22L2.80062 2.81L21.1806 21.19L19.7806 22.61ZM16.0606 18.88L12.1806 15L10.5906 16.59L6.35063 12.35L7.76063 10.94L10.5906 13.77L10.7706 13.59L5.12063 7.94C4.41063 9.14 4.00063 10.52 4.00063 12C4.00063 16.41 7.59062 20 12.0006 20C13.4806 20 14.8606 19.59 16.0606 18.88Z" />
      </SvgIcon>
    );
  },
);

export default Unclaimable;