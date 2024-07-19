import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const XLAYER = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        fill="#000"
        d="M11.7 9H7.3c-.2 0-.3.1-.3.3v4.4c0 .2.1.3.3.3h4.4c.2 0 .3-.1.3-.3V9.3c0-.2-.1-.3-.3-.3Zm-5-5H2.3c-.2 0-.3.1-.3.3v4.4c0 .2.1.3.3.3h4.4c.2 0 .3-.1.3-.3V4.3c0-.2-.1-.3-.3-.3Zm10 0h-4.4c-.2 0-.3.1-.3.3v4.4c0 .2.1.3.3.3h4.4c.2 0 .3-.1.3-.3V4.3c0-.2-.1-.3-.3-.3Zm-10 10H2.3c-.2 0-.3.1-.3.3v4.4c0 .2.1.3.3.3h4.4c.2 0 .3-.1.3-.3v-4.4c0-.2-.1-.3-.3-.3Zm10 0h-4.4c-.2 0-.3.1-.3.3v4.4c0 .2.1.3.3.3h4.4c.2 0 .3-.1.3-.3v-4.4c0-.2-.1-.3-.3-.3Z"
      />
      <path
        fill="#727272"
        d="M21.7 14H19v5h2.7c.2 0 .3-.1.3-.3v-4.4c0-.2-.1-.3-.3-.3Zm0-10H19v5h2.7c.2 0 .3-.1.3-.3V4.3c0-.2-.1-.3-.3-.3Z"
      />
    </SvgIcon>
  );
});

export default XLAYER;
