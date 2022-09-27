import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const GoogleColored = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M21.6 12.2273C21.6 11.5182 21.5364 10.8364 21.4182 10.1818H12V14.05H17.3818C17.15 15.3 16.4455 16.3591 15.3864 17.0682V19.5773H18.6182C20.5091 17.8364 21.6 15.2727 21.6 12.2273Z"
      fill="#4285F4"
    />
    <path
      d="M12 22C14.7 22 16.9637 21.1045 18.6182 19.5772L15.3864 17.0681C14.4909 17.6681 13.3455 18.0227 12 18.0227C9.39548 18.0227 7.19093 16.2636 6.40457 13.9H3.06366V16.4909C4.70911 19.7591 8.09093 22 12 22Z"
      fill="#34A853"
    />
    <path
      d="M6.40455 13.9C6.20455 13.3 6.09091 12.6591 6.09091 12C6.09091 11.3409 6.20455 10.7 6.40455 10.1V7.50909H3.06364C2.38636 8.85909 2 10.3864 2 12C2 13.6136 2.38636 15.1409 3.06364 16.4909L6.40455 13.9Z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.97727C13.4682 5.97727 14.7864 6.48182 15.8228 7.47273L18.6909 4.60455C16.9591 2.99091 14.6955 2 12 2C8.09093 2 4.70911 4.24091 3.06366 7.50909L6.40457 10.1C7.19093 7.73636 9.39548 5.97727 12 5.97727Z"
      fill="#EA4335"
    />
  </SvgIcon>
);

export default GoogleColored;
