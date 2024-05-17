import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const ShieldIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.025 2.278a3 3 0 0 1 1.95 0l6 2.063A3 3 0 0 1 21 7.178v4.735c0 2.806-1.149 4.83-2.813 6.404-1.572 1.489-3.632 2.6-5.555 3.637l-.157.084a1 1 0 0 1-.95 0l-.157-.084c-1.923-1.037-3.983-2.148-5.556-3.637C4.15 16.742 3 14.72 3 11.913V7.178A3 3 0 0 1 5.025 4.34l6-2.063ZM12 8a2.5 2.5 0 0 0-1 4.792V15a1 1 0 1 0 2 0v-2.208A2.5 2.5 0 0 0 12 8Z"
          clipRule="evenodd"
        />
      </SvgIcon>
    );
  },
);

export default ShieldIcon;
