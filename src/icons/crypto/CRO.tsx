import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const CRO = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path fill="#fff" d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Z" />
      <path
        fill="#002D74"
        d="M12 4.8 5.8 8.4v7.2l6.2 3.6 6.2-3.6V8.4L12 4.8Zm4.4 9.7L12 17l-4.4-2.5v-5L12 6.9l4.4 2.6v5Z"
      />
      <path
        fill="url(#a)"
        d="m12 19.2 6.2-3.6V8.4L12 4.8v2.1l4.4 2.6v5L12 17.1v2Z"
      />
      <path
        fill="url(#b)"
        d="M12 4.8 5.8 8.4v7.2l6.2 3.6V17l-4.4-2.5v-5L12 6.9V4.8Z"
      />
      <path
        fill="#002D74"
        d="m14.9 13.7-3 1.6-2.8-1.6v-3.4L12 8.6l2.9 1.7-1.2.7-1.7-1-1.7 1v2l1.7 1 1.7-1 1.2.7Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="15.1"
          x2="15.1"
          y1="19.2"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002D74" />
          <stop offset="1" stopColor="#002D74" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="8.9"
          x2="8.9"
          y1="4.8"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002D74" />
          <stop offset="1" stopColor="#002D74" stopOpacity="0" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
});

export default CRO;
