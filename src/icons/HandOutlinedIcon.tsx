import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const HandOutlinedIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.6 8.13-.73-4 .65-.54a2.59 2.59 0 0 1 4.11 1.21m3.51 9.62c1-.8 2.46-.67 3.3.29a2.3 2.3 0 0 1-.3 3.31l-1.78 1.43a7.03 7.03 0 0 1-9.73-.9 6.79 6.79 0 0 1 .86-9.66l6.24-5.16c.97-.8 2.43-.68 3.24.28.82.96.7 2.4-.28 3.2l-3.73 3.08.6-.49c.97-.8 2.42-.68 3.24.28.82.96.69 2.4-.29 3.2l-.58.49"
        />
      </SvgIcon>
    );
  },
);

export default HandOutlinedIcon;
