import {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

import {Polygon36x36} from '../Polygon';

import USDCoin from './USDCoin';

const PUSDC = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <g style={{position: 'relative'}} {...props} ref={iconRef || ref}>
      <USDCoin style={{width: '100%', height: '100%'}} />
      <Polygon36x36 style={{position: 'absolute', bottom: 0, right: 0}} />
    </g>
  );
});

export default PUSDC;
