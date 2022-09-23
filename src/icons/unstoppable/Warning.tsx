import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Warning = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        d="M8 3.99398L13.02 12.6673H2.98L8 3.99398ZM8 1.33398L0.666672 14.0007H15.3333L8 1.33398Z"
        fill="#9D7A01"
      />
      <path
        d="M8.66668 10.668H7.33334V12.0013H8.66668V10.668Z"
        fill="#9D7A01"
      />
      <path
        d="M8.66668 6.66797H7.33334V10.0013H8.66668V6.66797Z"
        fill="#9D7A01"
      />
    </SvgIcon>
  );
};

export default Warning;
