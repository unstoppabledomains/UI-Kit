import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const MANA = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const ids = Array.from({length: 1}).map((_, i) => `mana-${uuid}-${i}`);

  return (
    <SvgIcon viewBox="0 0 32 32" {...props} ref={iconRef || ref}>
      <defs>
        <filter id={ids[0]}>
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="#FF2D55" fillRule="nonzero" cx="16" cy="16" r="16" />
        <g>
          <path
            d="M12.793 11.534l-7.045 8.454A10.912 10.912 0 015 16C5 9.923 9.923 5 16 5c6.078 0 11 4.923 11 11 0 3.36-1.507 6.369-3.883 8.387H8.883A11.511 11.511 0 017.2 22.6h12.562v-4.763l3.965 4.763H24.8l-5.043-6.05-1.392 1.672-5.571-6.688zM19.758 9.4a2.751 2.751 0 000 5.5 2.751 2.751 0 000-5.5zm-6.963-1.991a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751zM9.989 25.212h12.023A10.97 10.97 0 0116 27a10.97 10.97 0 01-6.011-1.788zm7.843-6.346l-2.426 2.909H6.639a11.056 11.056 0 01-.891-1.787h7.046V12.82l5.038 6.045z"
            fill="#FFFFFF"
            fillRule="nonzero"
          />
        </g>
      </g>
    </SvgIcon>
  );
});

export default MANA;
