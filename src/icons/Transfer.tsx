import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import type {ForwardedRef} from 'react';
import React from 'react';

const Transfer = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path d="M15 5L13.59 6.41L15 7.83L17.17 10H8C5.24 10 3 12.24 3 15V19H5V15C5 13.35 6.35 12 8 12H17.17L15 14.17L13.59 15.58L15 17L21 11L15 5Z" />
      </SvgIcon>
    );
  },
);

export default Transfer;
