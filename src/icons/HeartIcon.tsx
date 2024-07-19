import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const HeartIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="16" height="16" viewBox="0 0 16 16" {...props} ref={ref}>
        <path
          d="M14.1673 6.625C14.1673 10.5781 8.51454 13.5 8.00065 13.5C7.48676 13.5 1.83398 10.5781 1.83398 6.625C1.83398 3.875 3.54695 2.5 5.25991 2.5C6.97287 2.5 8.00065 3.53125 8.00065 3.53125C8.00065 3.53125 9.02843 2.5 10.7414 2.5C12.4544 2.5 14.1673 3.875 14.1673 6.625Z"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  },
);

export default HeartIcon;
