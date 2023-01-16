import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Scala = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 267.052 207.024" {...props} ref={iconRef || ref}>
      <defs>
        <clipPath id="_clipPath_Pqln0aUdci1qfthfTDJl56fMtqwbKkur">
          <rect width="267.052" height="207.024" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_Pqln0aUdci1qfthfTDJl56fMtqwbKkur)">
        <rect
          x="0.021"
          y="0"
          width="267.032"
          height="42"
          transform="matrix(1,0,0,1,0,0)"
          fill="rgb(35,139,255)"
        />
        <path
          d=" M 55.159 207.024 L 133.521 128.641 L 211.898 207.024 L 267.052 207.024 L 133.541 73.508 L 133.521 73.508 L 133.521 73.508 L 0 207.024 L 55.159 207.024 L 55.159 207.024 Z "
          fill="rgb(32,42,52)"
        />
      </g>
    </SvgIcon>
  );
});

export default Scala;
