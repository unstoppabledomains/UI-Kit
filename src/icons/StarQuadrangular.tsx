import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const StarQuadrangular = React.forwardRef<SVGSVGElement | null, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon viewBox="0 0 24 24" {...props} ref={ref}>
        <path d="M14.5 9.5L12 4L9.5 9.5L4 12L9.5 14.5L12 20L14.5 14.5L20 12L14.5 9.5Z" />
      </SvgIcon>
    );
  },
);

export default StarQuadrangular;
