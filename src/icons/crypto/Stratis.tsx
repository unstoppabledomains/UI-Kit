import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Stratis = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#1387C9" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M16.053 18.373l9.594-5.584-9.594-5.684-9.498 5.684 9.498 5.584zm-10.006-2.92a.76.76 0 00.376.657l9.627 5.608 9.785-5.788a.739.739 0 011.109.64v2.626a.743.743 0 01-.361.637l-10.157 6.063a.732.732 0 01-.746.003L5.26 19.773a.53.53 0 01-.189-.721.521.521 0 01.716-.19l10.263 6.033 9.847-5.878v-1.9l-9.473 5.603a.732.732 0 01-.742.003l-9.783-5.7A1.815 1.815 0 015 15.453V12.98a.631.631 0 01.947-.548l.608.357-.764.457a.521.521 0 01-.784-.364.529.529 0 01.25-.542l10.419-6.236a.732.732 0 01.75-.002l10.211 6.05a.744.744 0 01-.005 1.281L16.42 19.377a.732.732 0 01-.74-.001L5.42 13.343a.415.415 0 00.608-.239.423.423 0 00.02-.124v2.474z"
        />
      </g>
    </SvgIcon>
  );
});

export default Stratis;
