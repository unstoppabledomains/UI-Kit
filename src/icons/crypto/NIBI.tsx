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
        d="M18 0H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6Z"
      />
      <path
        fill={`url(#${ids[1]})`}
        fillRule="evenodd"
        d="M6.325 6.857 12.162 3 18 6.857v7.971L6.325 6.859ZM6 9.171l12 7.972L12.162 21 6 17.143V9.17Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="m12.078 3.254.132-.165L12.078 3l-.132.09.132.164ZM6.53 7.003l-.132-.165L6.16 7l.237.166.135-.163Zm11.094 0h.222v-.104l-.09-.061-.132.165Zm0 7.747-.135.164.357.25v-.414h-.222Zm0 2.25.131.165L18 17l-.244-.166-.132.166ZM6.222 9.252l.132-.165L6 8.847v.405h.223Zm5.855 11.496-.128.168.131.084.128-.087-.131-.165ZM6.223 17H6v.107l.096.06.127-.168Zm5.723-13.91L6.399 6.837l.264.33L12.21 3.42l-.264-.33Zm5.81 3.748L12.21 3.089l-.264.33 5.547 3.75.263-.331Zm.091 7.912V7.003h-.445v7.747h.445ZM6.397 7.166l11.093 7.748.27-.327L6.665 6.84l-.27.326Zm11.36 9.668L6.354 9.087l-.265.33 11.402 7.747.264-.33Zm-5.548 4.08 5.547-3.75-.263-.33-5.547 3.749.263.33Zm-6.113-3.746 5.854 3.748.255-.336L6.35 16.83l-.254.337ZM6 9.252V17h.445V9.252H6Z"
      />
      <defs>
        <linearGradient
          id={ids[0]}
          x1={7.673}
          x2={17.573}
          y1={0.023}
          y2={27.398}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F0F0" />
          <stop offset={0.432} stopColor="#A5BEF4" stopOpacity={0.8} />
          <stop offset={1} stopColor="#9D91F4" stopOpacity={0.8} />
        </linearGradient>
        <linearGradient
          id={ids[1]}
          x1={20.174}
          x2={2.312}
          y1={29.026}
          y2={0.121}
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
