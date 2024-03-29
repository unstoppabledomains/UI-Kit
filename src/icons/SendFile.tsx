import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import type {ForwardedRef} from 'react';
import React from 'react';

const SendFile = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM7 9L8.41 10.41L11 7.83V16H13V7.83L15.59 10.41L17 9L12 4L7 9Z" />
      </SvgIcon>
    );
  },
);

export default SendFile;
