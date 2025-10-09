import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const SyncIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
      <path
        d="M5 4V7.25C5 7.66421 5.33579 8 5.75 8H8.75M19.0118 20V16.75C19.0118 16.3358 18.6761 16 18.2618 16H15.0118M4 12C4 16.4183 7.58172 20 12 20C14.6362 20 17.0303 18.7249 18.5 16.7578M20 12C20 7.58172 16.4183 4 12 4C9.36378 4 6.96969 5.27512 5.5 7.24224"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
});

export default SyncIcon;
