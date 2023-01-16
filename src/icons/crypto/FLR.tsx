import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const FLR = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 558 558" {...props} ref={iconRef || ref}>
      <g clipPath="url(#a)">
        <path
          d="M557.64 278.89C557.64 124.94 432.84.14 278.9.14S.14 124.94.14 278.89s124.8 278.75 278.75 278.75 278.75-124.8 278.75-278.75Z"
          fill="#E42058"
        />
        <path
          d="m353.35 254.89-132.31-.1c-36.07 0-66.07 28.52-67.01 65.19-.03.98.78 1.79 1.76 1.79l132.31.08v.02c36.07 0 66.07-28.52 67.01-65.19a1.76 1.76 0 0 0-1.76-1.79ZM420.41 154.45l-199.36-.1c-36.07 0-66.07 28.52-67.01 65.19-.03.98.78 1.79 1.76 1.79l199.36.08v.02c36.07 0 66.07-28.52 67.01-65.19a1.76 1.76 0 0 0-1.76-1.79ZM187.56 421.86a33.53 33.53 0 1 0 0-67.06 33.53 33.53 0 0 0 0 67.06Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h558v558H0z" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
});

export default FLR;
