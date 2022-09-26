import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Fabric = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#315FF3"
      />
      <path
        d="M19.5889 6.01747H14.9184L14.2239 9.31237H17.2668L16.8557 11.3296H13.7998L13.6725 11.9473H16.7302L16.319 13.9646H13.2542L11.9939 20H6.73933L7.99625 13.9646H5L5.41127 11.9473H8.41621L8.54467 11.3296H5.53676L5.94783 9.31216H8.96503L9.54961 6.50437C9.86918 4.99708 11.08 4 12.5423 4H20L19.5889 6.01749L19.5889 6.01747Z"
        fill="white"
      />
    </SvgIcon>
  );
});

export default Fabric;
