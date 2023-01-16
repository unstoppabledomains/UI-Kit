import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

const YearnFinance = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none">
        <circle fill="#006AE3" cx="16" cy="16" r="16" />
        <g fill="#FFF">
          <path d="M15.21 22.36V9.754h1.372V22.36z" />
          <path d="M22.197 13.954l-4.24 1.124-.945-4.4 1.26-.284.498 2.084s1.145-1.878-.382-3.824c-.9-1-1.327-1.042-2.336-1.2-.888-.127-2.952.173-3.567 2.582-.26 1.552.033 2.7 2.033 4.203l-.112 1.673s-2.233-1.573-2.809-2.676c-.445-.873-1.21-2.597.17-4.997.742-1.2 2.206-2.351 4.785-2.23 1.296.054 4.463 1.64 3.972 5.342-.085.694-.445 1.618-.445 1.618l1.74-.387.378 1.372zm-2.421 9.864c-.776 1.179-2.27 2.29-4.843 2.103-1.297-.088-4.418-1.758-3.83-5.446.103-.69.488-1.603.488-1.603l-1.749.34-.342-1.379 4.27-1.012.83 4.424-1.27.252-.442-2.1s-1.194 1.845.279 3.833c.872 1.024 1.297 1.076 2.306 1.26.882.152 2.954-.096 3.633-2.487.3-1.543.036-2.7-1.921-4.258l.157-1.67s2.191 1.63 2.737 2.749c.418.888 1.136 2.633-.303 4.994z" />
        </g>
      </g>
    </SvgIcon>
  );
});

export default YearnFinance;
