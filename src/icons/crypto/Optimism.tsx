import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Optimism = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path
        fill="#FF0420"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
      />
      <path
        fill="#fff"
        d="M8.499 15.182a2.883 2.883 0 0 1-1.756-.504 1.723 1.723 0 0 1-.675-1.458c.003-.163.018-.325.045-.486l.333-1.557C6.854 9.526 7.907 8.7 9.606 8.7a3.14 3.14 0 0 1 1.242.234c.35.137.65.375.864.684.216.318.326.696.315 1.08-.003.16-.018.32-.045.478-.09.534-.198 1.053-.324 1.557-.21.822-.573 1.437-1.089 1.845-.516.402-1.206.603-2.07.603Zm.126-1.296c.312.009.616-.097.855-.297.265-.24.445-.559.513-.91.138-.563.243-1.055.315-1.476.024-.127.036-.257.036-.387 0-.546-.285-.819-.855-.819a1.314 1.314 0 0 0-.864.297c-.26.242-.436.56-.505.91-.108.401-.216.893-.324 1.476a1.926 1.926 0 0 0-.036.378c0 .552.289.828.865.828Zm3.817 1.206a.19.19 0 0 1-.153-.063.216.216 0 0 1-.027-.162l1.242-5.851a.257.257 0 0 1 .098-.162.276.276 0 0 1 .172-.063h2.394a2.782 2.782 0 0 1 1.603.414 1.358 1.358 0 0 1 .612 1.197c0 .158-.019.315-.054.469a2.437 2.437 0 0 1-.91 1.53c-.45.33-1.067.495-1.854.495H14.35l-.414 1.972a.26.26 0 0 1-.098.162.275.275 0 0 1-.171.063h-1.225Zm3.187-3.439c.235.005.466-.067.657-.207a.971.971 0 0 0 .378-.594c.016-.089.025-.18.027-.27a.501.501 0 0 0-.153-.396.755.755 0 0 0-.523-.144h-1.08l-.342 1.611h1.036Z"
      />
    </SvgIcon>
  );
});

export default Optimism;