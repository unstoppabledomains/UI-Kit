import {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

import {Polygon36x36} from '../Polygon';

import USDCoin from './USDCoin';

const PUSDC = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
    style?: React.CSSProperties;
  } & SvgIconProps
>(({iconRef, style = {}, ...props}, ref) => {
  return (
    <g style={{position: 'relative', ...style}} {...props} ref={iconRef || ref}>
      <USDCoin style={{width: '100%', height: '100%'}} />
      <Polygon36x36
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '40%',
          height: '40%',
        }}
      />
    </g>
  );
});

export default PUSDC;
