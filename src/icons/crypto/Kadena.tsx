import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Kadena = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path fill="#0E1821" d="M0 0h24v24H0z" />
      <path
        fill="#4A9079"
        d="M4.5 17V7l3-2v14.5l-3-2.5ZM8 10l6-5h6l-9.5 7.5 9.5 7h-6l-6-5 2.5-2L8 10Z"
      />
    </SvgIcon>
  );
});

export default Kadena;
