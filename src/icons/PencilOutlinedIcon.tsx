import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const PencilOutlinedIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 18s-1.33 1.54-2.83 1.54-2.71-1.43-4.18-1.43A4 4 0 0 0 11 19.54m7.41-15.13.18.18a2 2 0 0 1 0 2.82l-12 12a2 2 0 0 1-1.42.59H3v-2.17a2 2 0 0 1 .59-1.42l12-12a2 2 0 0 1 2.82 0Z"
        />
      </SvgIcon>
    );
  },
);

export default PencilOutlinedIcon;
