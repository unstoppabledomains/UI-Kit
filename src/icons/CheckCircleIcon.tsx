import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const CheckCircleIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.5 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm3.774 8.133a1 1 0 0 0-1.548-1.266l-3.8 4.645-1.219-1.22a1 1 0 0 0-1.414 1.415l2 2a1 1 0 0 0 1.481-.074l4.5-5.5Z"
          clipRule="evenodd"
        />
      </SvgIcon>
    );
  },
);

export default CheckCircleIcon;
