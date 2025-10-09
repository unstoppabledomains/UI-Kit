import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const Nimiq = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const paths = [
    {
      d: 'M63.3,25.4L50,2.6C49,1,47.2,0,45.3,0H18.7c-1.9,0-3.7,1-4.6,2.6L0.7,25.4c-1,1.6-1,3.6,0,5.3l13.3,22.7c1,1.6,2.7,2.6,4.6,2.6h26.7c1.9,0,3.7-1,4.7-2.6l13.3-22.8C64.2,29,64.2,27,63.3,25.4z',
    },
  ];
  const ids = Array.from({length: paths.length}).map(
    (_, i) => `nimiq-${uuid}-${i}`,
  );

  return (
    <SvgIcon viewBox="0 0 64 56" {...props} ref={iconRef || ref}>
      {paths.map(({d}, i) => (
        <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} />
      ))}

      <radialGradient
        id={ids[0]}
        cx="46.0028"
        cy="6.3804"
        r="59.47"
        gradientTransform="matrix(1 0 0 -1 0 58.0009)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#EC991C" />
        <stop offset="1" stopColor="#E9B213" />
      </radialGradient>
    </SvgIcon>
  );
});

export default Nimiq;
