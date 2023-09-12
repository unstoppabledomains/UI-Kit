import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Polygon = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <path
        d="m17.474 16.084 5.354-3.091a.922.922 0 0 0 .46-.796V6.013a.922.922 0 0 0-.46-.795l-5.354-3.092a.922.922 0 0 0-.92 0L11.2 5.218a.922.922 0 0 0-.459.795v11.05L6.986 19.23l-3.754-2.167v-4.336l3.754-2.168 2.477 1.43V9.081L7.446 7.916a.922.922 0 0 0-.919 0l-5.355 3.092a.922.922 0 0 0-.46.796v6.183c0 .326.177.632.46.795l5.355 3.092a.923.923 0 0 0 .918 0l5.355-3.091a.923.923 0 0 0 .46-.796V6.937l.067-.038 3.687-2.128 3.754 2.167v4.336l-3.754 2.167-2.473-1.427v2.908l2.013 1.163a.923.923 0 0 0 .919 0v-.001Z"
        fill={props.fill ?? '#8247E5'}
      />
    </SvgIcon>
  );
});

export default Polygon;

export const Polygon36x36 = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill={props.fill ?? '#8247E5'} />
      <path
        d="m15.4 14.86 3.32-2.16a.66.66 0 0 0 .28-.56V7.8c0-.23-.1-.44-.28-.56l-3.33-2.16a.52.52 0 0 0-.57 0L11.5 7.25a.66.66 0 0 0-.28.56v7.74l-2.33 1.51-2.33-1.51V12.5l2.33-1.52 1.54 1V9.96l-1.25-.82a.52.52 0 0 0-.57 0l-3.33 2.17a.66.66 0 0 0-.28.55v4.33c0 .23.1.44.28.56l3.33 2.16c.17.12.39.12.57 0l3.32-2.16a.67.67 0 0 0 .28-.56V8.46l.04-.03 2.29-1.5 2.33 1.53v3.03l-2.33 1.52-1.53-1v2.04l1.24.81c.18.11.4.11.57 0Z"
        fill="white"
      />
    </SvgIcon>
  );
});

export const PolygonGradient = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <path
        fill="url(#a)"
        d="M17.47 16.08 22.83 13a.92.92 0 0 0 .46-.8V6.02a.92.92 0 0 0-.46-.8l-5.36-3.08a.92.92 0 0 0-.92 0L11.2 5.22a.92.92 0 0 0-.46.8v11.04L7 19.23l-3.76-2.17v-4.33L7 10.56l2.47 1.43v-2.9L7.45 7.91a.92.92 0 0 0-.92 0L1.17 11a.92.92 0 0 0-.46.8v6.18c0 .32.18.63.46.8l5.36 3.08c.28.17.63.17.92 0l5.35-3.09a.92.92 0 0 0 .46-.8V6.95l.07-.04L17 4.77l3.76 2.17v4.33L17 13.44l-2.47-1.43v2.91l2.01 1.17c.29.16.64.16.92 0Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="2.63"
          x2="22.03"
          y1="18.83"
          y2="4.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A726C1" />
          <stop offset=".88" stopColor="#803BDF" />
          <stop offset="1" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
});
