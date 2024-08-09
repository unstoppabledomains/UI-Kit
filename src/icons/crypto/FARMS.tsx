import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const FARMS = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        fill="#231F1B"
        d="M12 2a10 10 0 0 0-7.47 16.65l-2.27 1.49v1.84l3.4-2.24a10 10 0 0 0 13.8-14.39l2.28-1.5V2l-3.4 2.27A9.98 9.98 0 0 0 12 2Zm9.56 1.75-2.67 1.79a6.76 6.76 0 0 0-2.87 5.52v1.22l-8.05 5.63-5.53 3.73v-1.41l2.67-1.76a6.76 6.76 0 0 0 2.86-5.53v-1.22l8.06-5.62 5.53-3.75v1.4Z"
      />
    </SvgIcon>
  );
});

export default FARMS;
