import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const VeThorToken = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#2A5284" />
        <g fill="#FFF">
          <path
            fillOpacity=".704"
            d="M20.272 5.058h3.023l-5.682 7.584h5.099l-12.18 14.3 3.94-10.104h-4.45l4.487-11.78z"
          />
          <path d="M20.272 5.058h.182l-5.107 8.713h4.67l-9.485 13.17 3.94-10.103h-4.45l4.487-11.78z" />
        </g>
      </g>
    </SvgIcon>
  );
});

export default VeThorToken;
