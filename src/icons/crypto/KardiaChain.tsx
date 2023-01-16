import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const KardiaChain = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 200 200" {...props} ref={iconRef || ref}>
      <g>
        <path fill="#A71927" d="M89.3,62.8l2.5,25.4l9.6-28.9L89.3,62.8z" />
        <path fill="#D71B2A" d="M73.7,47.2l15.6,15.6l12.1-3.5L73.7,47.2z" />
        <path
          fill="#61395F"
          d="M85.8,86.4l6,1.8l-2.5-25.4L73.7,47.2L85.8,86.4z"
        />
        <path
          fill="#614268"
          d="M60.9,49.9l14.3,47.5l-14.4,24.7L40,75.5L60.9,49.9z"
        />
        <path fill="#DA1728" d="M116,58.4l13.8,21.2l-25.1,12.3L116,58.4z" />
        <path fill="#E42735" d="M145.4,50.7l-15.6,28.9L116,58.4L145.4,50.7z" />
        <path fill="#C41A24" d="M159.8,82.4L130,79.6l15.6-28.9L159.8,82.4z" />
        <path
          fill="#A61D1E"
          d="M143.2,105c-0.7-1-13.3-25.4-13.3-25.4l30,2.7L143.2,105z"
        />
        <path fill="#C71C26" d="M104.7,91.9l38.5,13.1L130,79.6L104.7,91.9z" />
        <path fill="#D71B2A" d="M106.1,116.5l2.3,37.5L88.8,99.9L106.1,116.5z" />
        <path fill="#C71C26" d="M133.9,115.8l-28,0.7L88.6,99.9L133.9,115.8z" />
        <path fill="#A51C1C" d="M108.4,154l-2.3-37.5l28-0.7L108.4,154z" />
        <path fill="#576B98" d="M40,75.5l35.2,21.9L60.9,49.9L40,75.5z" />
        <path fill="#721919" d="M94.6,156.6l-34-34.4L75,97.5L94.6,156.6z" />
        <path fill="#9C2131" d="M75.2,97.4l-14.4,24.7l24.1,4.8L75.2,97.4z" />
      </g>
    </SvgIcon>
  );
});

export default KardiaChain;
