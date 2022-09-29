import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Nano = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle fill="#4A90E2" cx="16" cy="16" r="16" />
        <path
          d="M24.95 11c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 00-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166a1.597 1.597 0 011.452 1.518c0 .89-.693 1.583-1.584 1.583-.89 0-1.583-.726-1.583-1.583 0-1.122-.363-1.55-1.583-1.55s-1.583.428-1.583 1.583v.099c-.033.791-.726 1.45-1.55 1.45-.89 0-1.584-.725-1.584-1.582 0-.825.627-1.485 1.419-1.55h.132c1.385 0 1.583-.297 1.583-1.55a1.584 1.584 0 013.166 0c0 1.253.198 1.582 1.583 1.582h.132zm-9.565 6.267a1.583 1.583 0 110-3.166 1.583 1.583 0 010 3.166z"
          fill="#FFF"
        />
      </g>
    </SvgIcon>
  );
});

export default Nano;
