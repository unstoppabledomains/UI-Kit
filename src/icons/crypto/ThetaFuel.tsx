import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const ThetaFuel = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const ids = Array.from({length: 2}).map((_, i) => `${uuid}${i}`);

  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props} ref={iconRef || ref}>
      <g>
        <g>
          <g>
            <linearGradient
              id={ids[0]}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="500"
              x2="1000"
              y2="500"
              gradientTransform="matrix(1 0 0 -1 0 1000)"
            >
              <stop offset="0" stopColor="#FFA50D" />
              <stop offset="1" stopColor="#FE5413" />
            </linearGradient>
            <path
              fill={`url(#${ids[0]})`}
              d="M500,0c276.1,0,500,223.9,500,500s-223.9,500-500,500S0,776.1,0,500S223.9,0,500,0L500,0z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M692,347c-6.3,7.5-5.9,24.1-16,19c0,0-70.3-26.9-27-106c11.7-18.3,23.8-19.5,22-64
				c10.8,16.4,46.2,49.3,49,101C722.8,331.5,702.2,336.1,692,347L692,347z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M636,470c17.3-5.8,45.3-15,47-74c26.7,40.9,117.3,98.3,74,274c-17.6,68.5-83.2,101.8-145,127
				c-38.6,16.4-78,43.8-94,85c0,0-292.1-36.9-283-327c7.3-150.5,148.3-208,208-318c31.8-69.4,21-139,21-139s186,115.7,102,294
				C538.7,455,603.9,476.3,636,470L636,470z"
            />
          </g>
          <g>
            <linearGradient
              id={ids[1]}
              gradientUnits="userSpaceOnUse"
              x1="349"
              y1="622"
              x2="652"
              y2="622"
            >
              <stop offset="0" stopColor="#FFA50D" />
              <stop offset="1" stopColor="#FE5413" />
            </linearGradient>
            <polygon
              fill={`url(#${ids[1]})`}
              points="349,522 349,619 452,619 452,722 549,722 549,619 652,619 652,522"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
});

export default ThetaFuel;
