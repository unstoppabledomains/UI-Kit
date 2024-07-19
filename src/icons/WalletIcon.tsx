import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const WalletIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm0 4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2h-1.6a3 3 0 0 0-2.1.9l-.2.2a3 3 0 0 1-2.2.9h-1.8a3 3 0 0 1-2.2-.9l-.2-.2a3 3 0 0 0-2.1-.9H5V8Z"
          clipRule="evenodd"
        />
      </SvgIcon>
    );
  },
);

export default WalletIcon;
