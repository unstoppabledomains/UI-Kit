import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Balancer = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle fill="#1E1E1E" cx="16" cy="16" r="16" />
        <g fill="#FFF">
          <path d="M16.092 23.196C10.518 23.196 6 21.586 6 19.428c0-1.126 1.23-2.14 3.2-2.856 1.538.987 4.117 1.493 7.042 1.493 2.856 0 5.38-.617 6.93-1.562 1.859.707 3.013 1.694 3.013 2.782 0 2.161-4.518 3.911-10.093 3.911z" />
          <path d="M16.152 17.58c-4.226 0-7.652-1.325-7.652-2.96 0-.906 1.056-1.718 2.712-2.259 1.182.617 2.953 1.011 4.94 1.011 1.987 0 3.758-.394 4.94-1.01 1.659.543 2.712 1.352 2.712 2.258.003 1.635-3.424 2.96-7.652 2.96z" />
          <path d="M16.124 12.88c-3.267 0-5.916-1.094-5.916-2.44 0-1.345 2.65-2.44 5.916-2.44 3.266 0 5.916 1.095 5.916 2.44 0 1.346-2.65 2.44-5.916 2.44z" />
        </g>
      </g>
    </SvgIcon>
  );
});

export default Balancer;
