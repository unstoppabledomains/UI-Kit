import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const Bitcoin = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon {...props} ref={iconRef || ref}>
      <g>
        <path
          d="M23.641 14.9045C22.0381 21.3339 15.5262 25.2467 9.09606 23.6434C2.66863 22.0405 -1.24415 15.5282 0.359423 9.0994C1.96159 2.66933 8.47349 -1.24375 14.9016 0.359122C21.3313 1.96199 25.2438 8.475 23.6408 14.9047L23.6409 14.9045H23.641Z"
          fill="#F7931A"
        />
        <path
          d="M17.3089 10.2734C17.5478 8.67633 16.3319 7.81782 14.6692 7.2451L15.2086 5.08167L13.8916 4.75351L13.3665 6.85999C13.0203 6.77364 12.6648 6.69228 12.3114 6.61162L12.8403 4.49124L11.5241 4.16309L10.9845 6.32582C10.698 6.26059 10.4166 6.19612 10.1435 6.12819L10.1451 6.12138L8.32897 5.66787L7.97864 7.07446C7.97864 7.07446 8.95571 7.29843 8.93512 7.31221C9.46841 7.44532 9.56485 7.79834 9.54884 8.07816L8.93442 10.5428C8.97114 10.5521 9.01877 10.5656 9.07133 10.5868C9.02739 10.5758 8.98064 10.5639 8.93213 10.5523L8.07092 14.005C8.00574 14.167 7.84032 14.4101 7.46747 14.3178C7.48067 14.3369 6.51029 14.0789 6.51029 14.0789L5.85645 15.5864L7.57024 16.0137C7.88907 16.0936 8.2015 16.1773 8.50918 16.2559L7.96421 18.4442L9.27964 18.7723L9.81932 16.6073C10.1787 16.7049 10.5274 16.7948 10.8688 16.8797L10.331 19.0345L11.648 19.3626L12.1929 17.1785C14.4386 17.6035 16.1271 17.4321 16.8379 15.4009C17.4106 13.7656 16.8094 12.8223 15.6279 12.2072C16.4884 12.0087 17.1366 11.4427 17.3094 10.2736L17.309 10.2733L17.3089 10.2734ZM14.3 14.4927C13.893 16.1281 11.1396 15.2441 10.2469 15.0224L10.97 12.1233C11.8627 12.3462 14.7254 12.7872 14.3001 14.4927H14.3ZM14.7073 10.2497C14.336 11.7373 12.0443 10.9815 11.3009 10.7962L11.9565 8.16697C12.7 8.35228 15.0941 8.69815 14.7074 10.2497H14.7073Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath>
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
});

export default Bitcoin;
