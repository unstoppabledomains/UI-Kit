import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';
import {makeStyles} from 'styles';

const useStyles = makeStyles()(() => ({id: {}}));

const NIBI = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;

  const ids = Array.from({length: 2}).map((_, i) => `nibi-${uuid}-${i}`);

  return (
    <SvgIcon viewBox="0 0 24 24" {...props} ref={iconRef || ref}>
      <path
        fill={`url(#${ids[0]})`}
        d="M18.013.126H6.088A5.963 5.963 0 0 0 .125 6.089v11.926a5.963 5.963 0 0 0 5.963 5.962h11.925a5.963 5.963 0 0 0 5.963-5.962V6.089A5.963 5.963 0 0 0 18.013.126Z"
      />
      <path
        fill={`url(#${ids[1]})`}
        fillRule="evenodd"
        d="m6.614 6.6 5.57-4.09 5.57 4.09v8.45L6.614 6.6Zm-.31 2.453 11.45 8.45-5.57 4.089-5.88-4.089v-8.45Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="m12.181 2.51.132-.18-.132-.097-.132.098.132.18ZM6.611 6.6l-.132-.18-.241.177.238.18.135-.177Zm11.14 0h.223v-.114l-.091-.067-.132.18Zm0 8.45-.136.178.36.272v-.45h-.224Zm0 2.453.132.18.245-.18-.245-.18-.133.18ZM6.3 9.053l.134-.18-.357-.263v.443h.224Zm5.88 12.539-.128.183.131.092.13-.095-.133-.18ZM6.3 17.503h-.223v.117l.096.067.128-.184ZM12.05 2.331l-5.57 4.088.265.36 5.57-4.088-.265-.36Zm5.834 4.088-5.57-4.088-.264.36 5.57 4.089.264-.36Zm.091 8.63V6.6h-.447v8.45h.447ZM6.476 6.779l11.14 8.45.27-.356-11.14-8.45-.27.356Zm11.407 10.545L6.435 8.873l-.266.36 11.449 8.45.265-.36Zm-5.57 4.45 5.57-4.09-.265-.36-5.57 4.089.265.36Zm-6.139-4.086 5.88 4.088.255-.367-5.88-4.088-.255.367Zm-.096-8.634v8.45h.447v-8.45h-.447Z"
      />
      <defs>
        <linearGradient
          id={ids[0]}
          x1={7.75}
          x2={17.589}
          y1={0.149}
          y2={27.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F0F0" />
          <stop offset={0.432} stopColor="#A5BEF4" stopOpacity={0.8} />
          <stop offset={1} stopColor="#9D91F4" stopOpacity={0.8} />
        </linearGradient>
        <linearGradient
          id={ids[1]}
          x1={19.828}
          x2={0.07}
          y1={30.1}
          y2={1.323}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEF3CC" />
          <stop offset={0.234} stopColor="#D2BBC4" />
          <stop offset={0.474} stopColor="#B689D3" />
          <stop offset={0.698} stopColor="#9493FF" />
          <stop offset={1} stopColor="#4C1CB2" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
});

export default NIBI;
