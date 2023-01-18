import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Kava = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 2000 2210" {...props} ref={iconRef || ref}>
      <path
        fill="#FF564F"
        opacity="0.2"
        enableBackground="new"
        d="M198.5,1841.3L321.6,2210l845-1105L321.6,0L192.5,360.7l561.3,744.1L198.5,1841.3z"
      />
      <path
        fill="#F08179"
        d="M1999.7,2209.8h-401l-845.2-1105L1598.7,0h401l-833.3,1104.8L1999.7,2209.8z"
      />
      <path fill="#FF564F" d="M0,0h321.4v2209.8H0V0z" />
      <g>
        <path
          fill="#FF564F"
          d="M2000,2209.8h-401l-845.2-1105L1599,0h401l-833.3,1104.8L2000,2209.8z"
        />
      </g>
      <g>
        <path
          fill="#FF564F"
          d="M2000,2209.8h-401l-845.2-1105L1599,0h401l-833.3,1104.8L2000,2209.8z"
        />
      </g>
      <g>
        <path
          fill="#FF564F"
          d="M2000,2209.8h-401l-845.2-1105L1599,0h401l-833.3,1104.8L2000,2209.8z"
        />
      </g>
      <g>
        <path
          fill="#FF564F"
          d="M2000,2209.8h-401l-845.2-1105L1599,0h401l-833.3,1104.8L2000,2209.8z"
        />
      </g>
    </SvgIcon>
  );
});

export default Kava;
