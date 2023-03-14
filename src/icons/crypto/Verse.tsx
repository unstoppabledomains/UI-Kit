import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Verse = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 87 87" {...props} ref={iconRef || ref}>
      <circle cx="43" cy="43" r="37" fill="#fff" />
      <path
        fill="#0085FF"
        fillRule="evenodd"
        d="M43.2 86.38A43.2 43.2 0 1 0 0 43.2a43.2 43.2 0 0 0 43.2 43.2Zm0-15.2L16.7 25.48h23l4.6 7.96H30.67l17.22 29.64-4.69 8.1Zm6.82-11.78 19.65-33.92h-9.38L50 43.27l-3.61-6.23h-9.35L50.02 59.4Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
});

export default Verse;
