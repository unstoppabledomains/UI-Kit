import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const BinanceUSD = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 336.41 337.42" {...props} ref={iconRef || ref}>
      <g>
        <g>
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z"
          />
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z"
          />
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z"
          />
          <path
            fill="#f0b90b"
            stroke="#f0b90b"
            d="M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z"
          />
        </g>
      </g>
    </SvgIcon>
  );
});

export default BinanceUSD;
