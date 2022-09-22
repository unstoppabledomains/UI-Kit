import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sell = React.forwardRef((props: SvgIconProps, ref: any) => {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d="M21.41 11.41L12.58 2.58C12.21 2.21 11.7 2 11.17 2H4C2.9 2 2 2.9 2 4V11.17C2 11.7 2.21 12.21 2.59 12.58L11.42 21.41C12.2 22.19 13.47 22.19 14.25 21.41L21.42 14.24C22.2 13.46 22.2 12.2 21.41 11.41ZM12.83 20L4 11.17V4H11.17L20 12.83L12.83 20Z" />
      <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
    </SvgIcon>
  );
});

export default Sell;
