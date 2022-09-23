import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const TikTok = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon viewBox="0 0 2859 3333" {...props} ref={ref}>
    <path
      d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
      fill="currentColor"
    />
  </SvgIcon>
));

export default TikTok;
