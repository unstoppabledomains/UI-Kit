import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const SendFileGreyedOut = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 48 48" {...props}>
    <path
      d="M36 30V36H12V30H8V36C8 38.2 9.8 40 12 40H36C38.2 40 40 38.2 40 36V30H36ZM14 18L16.82 20.82L22 15.66V32H26V15.66L31.18 20.82L34 18L24 8L14 18Z"
      fill="#AFAFB6"
    />
  </SvgIcon>
);

export default SendFileGreyedOut;
