import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const ChecklistIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm8.34 2.352a1 1 0 1 0-1.6-1.2L8.436 8.891l-.338-.225a1 1 0 1 0-1.11 1.664l1.125.75a1 1 0 0 0 1.355-.232l1.872-2.496ZM14.058 8a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-2.718 6.353a1 1 0 1 0-1.6-1.2l-1.304 1.74-.338-.226a1 1 0 0 0-1.11 1.664l1.125.75a1 1 0 0 0 1.355-.232l1.872-2.496ZM14 14a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
          clipRule="evenodd"
        />
      </SvgIcon>
    );
  },
);

export default ChecklistIcon;
