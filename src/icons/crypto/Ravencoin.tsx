import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Ravencoin = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#384182" />
        <path
          fill="#FFF"
          d="M9.5 27l3.618-16.789 2.03 12.6L9.5 27zm3.688-16.885l5.497 12.709-3.443-.06-2.054-12.65zm.082-.096l7.2 1.023-1.668 11.782-5.532-12.805zm5.66 12.624l1.623-11.493 1.062 1.348-2.685 10.145zm1.517-11.71l-7.026-.999 6.326-2.082.7 3.081zm-7.06-1.107l4.306-2.985 2.054.903-6.36 2.082zm-.106-.036l.83-1.589 3.512-1.408-4.342 2.997zm.83-1.66l.396-1.24 2.894-.097-3.29 1.336zm.373-1.337l.933-.999 2.008.903-2.941.096zm.992-1.059l1.4-.686 1.81 2.118-3.21-1.432zm1.599-.602l2.089.915-.374 1.131-1.715-2.046zm1.785 2.082l.385-1.155.467 1.589-.852-.434zM16.923 5h1.529l.757.842a.048.048 0 01-.054.076L16.923 5zm2.416.963l3.11.868a.072.072 0 010 .14l-2.643.725-.467-1.733z"
        />
      </g>
    </SvgIcon>
  );
});

export default Ravencoin;
