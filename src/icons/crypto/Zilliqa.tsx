import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Zilliqa = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle cx="16" cy="16" fill={props.fill ?? '#49c1bf'} r="16" />
        <g fill="#fff">
          <path
            d="M9 7.281l11.114 5.383 2.845-1.282L11.891 6z"
            fillOpacity=".304"
          />
          <path
            d="M20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z"
            fillOpacity=".646"
          />
          <path d="M9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.373v-2.874l-7.548-3.671 7.548-3.881v-2.865z" />
        </g>
      </g>
    </SvgIcon>
  );
});

export default Zilliqa;

export const Zilliqa36x36 = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill={props.fill ?? '#49C1BF'} />
      <path
        d="M7 5.89899L14.9612 9.67473L16.9994 8.77575L9.07062 5L7 5.89899Z"
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M14.9619 9.66608L17.0001 8.76709V10.777L14.9619 11.676V9.66608V9.66608Z"
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M7 5.90039V7.93274L12.5108 10.5526L7 13.2271V15.2306L14.9612 18.9999V16.9836L9.5542 14.4086L14.9612 11.686V9.67613L7 5.90039Z"
        fill="white"
      />
      <path
        d="M14.9619 18.985L17.0001 18.086V11.8059L14.9619 12.7145V18.985V18.985Z"
        fill="white"
        fillOpacity="0.6"
      />
    </SvgIcon>
  );
});
