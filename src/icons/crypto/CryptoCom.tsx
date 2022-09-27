import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const CryptoCom = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 256 256" {...props} ref={iconRef || ref}>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(.66284 1.50865)"
          id="a"
          x1="28.953"
          x2="28.953"
          y1="17.588"
          y2="2.422"
        >
          <stop offset="0%" stopColor="#002D74" />
          <stop offset="100%" stopColor="#002D74" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="scale(8)" fillRule="evenodd" fill="none">
        <circle fill="#103F68" r="16" cy="16" cx="16" />
        <path
          d="m15.98 5.018 9.52 5.483v11L15.991 27l-.077-.019-9.414-5.48v-11l9.414-5.483Zm-.031 1.138L7.5 11.076v9.85l8.448 4.919 1.032-.597 7.52-4.325v-9.845l-7.52-4.35zm-7.14 10.61 2.501-1.87 2.211 1.412v2.54l1.673 1.612-.001.756-1.612 1.51H12.22l-3.41-5.96zm7.903 4.452-.003-.76 1.667-1.61v-2.54l2.187-1.43 2.496 1.889-3.393 5.942h-1.344zm-2.37-4.91-.814-2.131h4.838l-.798 2.131.236 2.382-1.867.004-1.845.003zm1.595-2.715-4.598-.002.855-3.82h7.464l.9 3.825z"
          fillRule="nonzero"
          fill="#fff"
        />
      </g>
    </SvgIcon>
  );
});

export default CryptoCom;
