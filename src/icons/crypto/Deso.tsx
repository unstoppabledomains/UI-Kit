import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Deso = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 31.5 36.8" {...props} ref={iconRef || ref}>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="7.749"
        y1="29.6053"
        x2="18.7117"
        y2="3.1293"
        gradientTransform="matrix(1 0 0 -1 0 37.8898)"
      >
        <stop offset="0" style={{stopColor: '#0057FF'}} />
        <stop offset="1" style={{stopColor: '#00A3FF'}} />
      </linearGradient>
      <path
        style={{fill: 'url(#SVGID_1_)'}}
        d="M0,0v9.2l24.2,13.5L0,36.8h20c6.4,0,11.5-4.5,11.5-10.1v-8.3L0,0z"
      />
      <linearGradient
        id="SVGID_00000171704973816211991440000012006003443304955031_"
        gradientUnits="userSpaceOnUse"
        x1="13.2608"
        y1="28.0186"
        x2="33.6546"
        y2="33.4056"
        gradientTransform="matrix(1 0 0 -1 0 37.8898)"
      >
        <stop offset="0" style={{stopColor: '#0283FF'}} />
        <stop offset="1" style={{stopColor: '#01C2FF'}} />
      </linearGradient>
      <path
        style={{
          fill: 'url(#SVGID_00000171704973816211991440000012006003443304955031_)',
        }}
        d="M0,0l31.5,18.4v-8.3C31.5,4.5,26.3,0,20,0
	H0z"
      />
      <linearGradient
        id="SVGID_00000155107726104664021100000000571350717845774505_"
        gradientUnits="userSpaceOnUse"
        x1="5.8815"
        y1="4.4625"
        x2="34.4436"
        y2="42.3622"
        gradientTransform="matrix(1 0 0 -1 0 37.8898)"
      >
        <stop offset="0" style={{stopColor: '#0157FF'}} />
        <stop offset="1" style={{stopColor: '#00FFFF'}} />
      </linearGradient>
      <path
        style={{
          fill: 'url(#SVGID_00000155107726104664021100000000571350717845774505_)',
        }}
        d="M16.6,18.4L0,27.6v9.2l24.2-14.2L16.6,18.4
	z"
      />
    </SvgIcon>
  );
});

export default Deso;
