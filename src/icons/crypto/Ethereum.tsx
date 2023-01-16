import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import type {SVGProps} from 'react';
import React from 'react';

const Ethereum = React.forwardRef<
  SVGSVGElement,
  {
    invert?: boolean;
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({invert, iconRef, ...props}, ref) => {
  const color = '#5F80E9';
  const pathProps: SVGProps<SVGPathElement> = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    fill: invert ? props.fill ?? color : 'white',
  };
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0Z"
        fill={invert ? 'transparent' : props.fill ?? color}
      />
      <path
        opacity="0.6"
        {...pathProps}
        d="M12 21L6.75 13L12 16.429L17.25 13L12 21Z"
      />
      <path opacity="0.5" {...pathProps} d="M12 21V16.429L17.25 13L12 21Z" />
      <path
        opacity="0.6"
        {...pathProps}
        d="M12 3L17.25 12.143L12 15.57L6.75 12.142L12 3Z"
      />
      <path
        opacity="0.5"
        {...pathProps}
        d="M12 3L17.25 12.143L12 15.57V9.57V3Z"
      />
      <path opacity="0.2" {...pathProps} d="M12 3L17.25 12.143L12 9.57V3Z" />
      <path
        opacity="0.6"
        {...pathProps}
        d="M17.25 12.1433L12 15.5703L6.75 12.1423L12 9.57031L17.25 12.1433Z"
      />
    </SvgIcon>
  );
});

export default Ethereum;

export const Ethereum36x36 = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill={props.fill ?? '#5F80E9'} />
      <path
        opacity="0.6"
        d="M12 19.3335L7.76666 12.8149L12 15.6089L16.2333 12.8149L12 19.3335Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M12.0001 19.3335V15.6089L16.2334 12.8149L12.0001 19.3335Z"
        fill="white"
      />
      <path
        opacity="0.6"
        d="M12 4.66675L16.2333 12.1166L12 14.909L7.76666 12.1158L12 4.66675Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M12.0001 4.66675L16.2334 12.1166L12.0001 14.909V10.0201V4.66675Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M12.0001 4.66675L16.2334 12.1166L12.0001 10.0201V4.66675Z"
        fill="white"
      />
      <path
        opacity="0.6"
        d="M16.2333 12.1166L12 14.9089L7.76666 12.1158L12 10.02L16.2333 12.1166Z"
        fill="white"
      />
    </SvgIcon>
  );
});

export const Ethereum64x64 = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const fill = props.fill ?? '#5F80E9';
  const style = {fontSize: 64, ...(props.sx as SvgIconProps['style'])};
  return (
    <SvgIcon {...props} ref={iconRef || ref} style={style}>
      <path
        d="M12.0004 22.5L5.90039 13.1666L12.0004 17.1672L18.1004 13.1666L12.0004 22.5Z"
        fill={fill}
      />
      <path
        d="M12.0004 1.5L18.1004 12.1669L12.0004 16.165L5.90039 12.1657L12.0004 1.5Z"
        fill={fill}
      />
    </SvgIcon>
  );
});
