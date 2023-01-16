import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const AxieInfinity = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props} ref={iconRef || ref}>
      <g>
        <g>
          <g>
            <path
              fill="#0055D5"
              fillRule="evenodd"
              d="M500,0c276.1,0,500,223.9,500,500s-223.9,500-500,500S0,776.1,0,500S223.9,0,500,0L500,0z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              fillRule="evenodd"
              d="M272,330.8c0,0-53.8-43-57.5,63.2c-3.7,82.3-3.6,242.1,34.5,317.6
				c16.1,28.4,37.6,19.7,77.6-8.6c34.8-25.7,160.7-141.7,214-192.6S702,313.5,724.5,412.7c8.9,41.7,19.9,77.1,11.5,169.6
				c-2.6,28.5-14.8,50.1-70.4,11.5c-42-27-81.9-56-81.9-56s-7.7-13.8-25.9,8.6c-14.3,17.9-21.5,22.3,1.4,35.9
				c23,13.6,139.3,93.8,183.9,106.3c36.8,10.7,57.8,10.5,58.9-61.8c-0.2-57.4-3.5-221.7-24.4-291.7c-15.8-43.6-39-63.4-89.1-14.4
				S480.4,522.9,394,592.3c-57.3,43-81.8,81.8-103.4,10.1c-15.2-54.3-34.9-223.3,27.3-191.1c38.9,18.6,58.3,18.5,43.1,30.2
				c-15.2,11.6-58.9,51.7-58.9,51.7s-13.5,10.9-7.2,34.5c6.3,16.5,6.3,24.7,40.2-7.2s58.9-56,58.9-56s5.4-8.5,21.5,7.2
				s18.7,20.1,18.7,20.1s4.3,11.7,21.5-8.6c17.3-20.3,28.4-32.7-4.3-51.7C418.8,412.3,272,330.8,272,330.8L272,330.8z"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
});

export default AxieInfinity;
