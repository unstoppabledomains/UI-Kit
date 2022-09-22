import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Compound = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#00D395" fillRule="nonzero" cx="16" cy="16" r="16" />
        <path
          d="M8.57 21.587a1.67 1.67 0 01-.82-1.429v-3.253c0-.387.322-.7.716-.698.126 0 .25.033.36.095l7.503 4.281c.439.25.71.71.71 1.207v3.37a.845.845 0 01-.855.84.883.883 0 01-.45-.123l-7.164-4.29zm11.184-6.176c.44.25.708.711.71 1.207v6.84c0 .202-.11.389-.291.487l-1.642.904a.29.29 0 01-.067.027v-3.798c0-.492-.263-.948-.696-1.2L11.18 16.02v-4.287c0-.387.322-.7.717-.698a.73.73 0 01.359.095l7.5 4.281zm3.285-5.052c.44.25.711.71.711 1.209v9.99a.564.564 0 01-.301.492l-1.557.823v-6.956c0-.491-.264-.946-.693-1.199l-6.736-3.953V6.7c0-.124.035-.245.096-.352a.725.725 0 01.977-.253l7.503 4.265z"
          fill="#FFF"
        />
      </g>
    </SvgIcon>
  );
});

export default Compound;
