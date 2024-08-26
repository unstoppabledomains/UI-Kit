import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const AfricaRare = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <circle cx="12" cy="12" r="11.5" fill="#F2A95D" stroke="#F9D88E" />
      <g fill="#FCF0BF" fillRule="evenodd" clipRule="evenodd">
        <path d="M10 4H7V3h3v1Zm5 2H6V5h9v1Zm2 2H3V7h14v1Zm4 2H4V9h17v1Zm-1 2H5v-1h15v1ZM9.5 13.5v-1h1v1h-1Zm2 7v-8h1v8h-1Zm2 0v-8h1v8h-1Zm2-1v-7h1v7h-1Zm2-4v-3h1v3h-1Zm0 3v-2h1v2h-1Zm2-1v-2h1v2h-1Z" />
      </g>
    </SvgIcon>
  );
});

export default AfricaRare;
