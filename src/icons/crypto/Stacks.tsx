import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Stacks = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <path
        fill="#5546FF"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm5.232-12.341v-1.274h-3.128L16.3 7.064h-1.66l-2.644 4.006L9.36 7.064H7.7l2.196 3.32H6.768v1.283h10.463v-.008Zm-.967 5.868-2.223-3.365h3.19v-1.265H6.768v1.274h3.19l-2.223 3.356h1.651l2.61-3.953 2.609 3.953h1.66Z"
      />
    </SvgIcon>
  );
});

export default Stacks;
