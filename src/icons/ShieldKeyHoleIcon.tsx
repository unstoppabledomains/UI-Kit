import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const ShieldKeyHoleIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.025 2.279a3 3 0 0 1 1.95 0l6 2.062A3 3 0 0 1 21 7.178v4.735c0 2.807-1.149 4.83-2.813 6.405-1.572 1.488-3.632 2.6-5.555 3.636l-.157.085a1 1 0 0 1-.95 0l-.157-.085c-1.923-1.037-3.983-2.148-5.556-3.636C4.15 16.743 3 14.72 3 11.913V7.178a3 3 0 0 1 2.025-2.837l6-2.062ZM12 8a2.5 2.5 0 0 0-1 4.792V15a1 1 0 0 0 2 0v-2.208A2.5 2.5 0 0 0 12 8Z"
          clipRule="evenodd"
        />
      </SvgIcon>
    );
  },
);

export default ShieldKeyHoleIcon;
