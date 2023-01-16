import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const Fet = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path
        d="M0 0V24H24V0H0ZM8.39024 2.784H10.6341V5.088H8.39024V2.784ZM2.73171 2.784H5.07317V5.088H2.73171V2.784ZM4.97561 8.352V10.656H2.63415V8.352H4.97561ZM4.39024 21.024H3.41463V20.16H4.29268V21.024H4.39024ZM5.07317 16.416H2.73171V14.208H5.07317V16.416ZM10.0488 21.024H9.17073V20.16H10.0488V21.024ZM10.0488 15.648H9.17073V14.784H10.0488V15.648ZM10.7317 10.752H8.39024V8.448H10.7317V10.752ZM15.7073 21.024H14.8293V20.16H15.7073V21.024ZM15.7073 15.648H14.8293V14.784H15.7073V15.648ZM15.7073 9.984H14.8293V9.12H15.7073V9.984ZM16.4878 5.088H14.1463V2.784H16.4878V5.088ZM21.4634 21.024H20.5854V20.16H21.4634V21.024ZM21.4634 15.648H20.5854V14.784H21.4634V15.648ZM21.4634 9.984H20.5854V9.12H21.4634V9.984ZM21.4634 4.416H20.5854V3.552H21.4634V4.416Z"
        fill="#202944"
      />
    </SvgIcon>
  );
});

export default Fet;
