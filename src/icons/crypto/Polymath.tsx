import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Polymath = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle cx="16" cy="16" fill="#4c5a95" r="16" />
        <path
          d="M27 11.263l-.044-.707-.218.593-1.226 1.03-1.404.209-.42-.389 1.231-1.633 1.26-.366-1.364.028-1.983 1.382-1.859-.128L18.363 10l-1.542.299-4.811 3.846-2.318.717-.954.931-1.706.023-.845 1.51L5 17.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-1.999.084-.945.712.707 2.071 1.249 1.177-.537-.069-2.639-.342-1.021 1.538-.375z"
          fill="#fff"
        />
      </g>
    </SvgIcon>
  );
});

export default Polymath;
