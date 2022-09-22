import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const FuseNetwork = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 1612 1620" {...props} ref={iconRef || ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1612" height="1620">
        <path
          fill="#0a2336"
          d="M779.5 27.5c238.42-3.087 439.25 81.246 602.5 253 146.08 163.535 214.08 355.535 204 576-17.3 225.45-111.47 410.95-282.5 556.5-158.66 127.77-340.33 186.77-545 177-225.453-17.3-410.953-111.47-556.5-282.5C58.502 1127.57 1.835 922.905 32 693.5 66.99 481.224 169.491 310.39 339.5 181c130.843-95.563 277.509-146.73 440-153.5Z"
        />
        <path
          fill="#b9fcb9"
          d="M1021.5 385.5a81690.762 81690.762 0 0 1-413-3 6548.41 6548.41 0 0 1 139-61.5c31.564-9.381 63.564-11.047 96-5a273.224 273.224 0 0 1 27 8 13407.723 13407.723 0 0 1 151 61.5Z"
        />
        <path
          fill="#bdfcb6"
          d="M608.5 382.5a81690.762 81690.762 0 0 0 413 3 6872.143 6872.143 0 0 1 151 61 794222.17 794222.17 0 0 1-694-6 5717.466 5717.466 0 0 1 130-58Z"
        />
        <path
          fill="#c0fcb4"
          d="M478.5 440.5a794222.17 794222.17 0 0 0 694 6 1117.315 1117.315 0 0 1 70 29 553348.674 553348.674 0 0 0-829-6 948.289 948.289 0 0 1 65-29Z"
        />
        <path
          fill="#c4fcb1"
          d="M413.5 469.5c276.335 1.793 552.668 3.793 829 6 24.32 14.312 35.16 35.645 32.5 64-1.17 9.008-4 17.342-8.5 25a389461.503 389461.503 0 0 0-903-8c-8.507 0-16.84.334-25 1-8.451-29.29.549-51.79 27-67.5a1496.79 1496.79 0 0 1 48-20.5Z"
        />
        <path
          fill="#c8fcae"
          d="M1266.5 564.5c-3.95 7.251-9.29 13.251-16 18a435044.854 435044.854 0 0 0-890-8c-4.181.001-8.181.334-12 1-5.391-4.776-8.725-10.776-10-18 8.16-.666 16.493-1 25-1 301.168 2.319 602.168 4.986 903 8Z"
        />
        <path
          fill="#cbfcac"
          d="M1250.5 582.5c-5.15 4.748-11.15 8.248-18 10.5a60112.554 60112.554 0 0 1-180 72.5 151060.664 151060.664 0 0 0-498-5c-4.181.001-8.181.334-12 1a57368.652 57368.652 0 0 1-174-70.5c-8.001-3.494-14.668-8.661-20-15.5 3.819-.666 7.819-.999 12-1 296.833 2.365 593.499 5.031 890 8Z"
        />
        <path
          fill="#cffca9"
          d="M542.5 661.5c3.819-.666 7.819-.999 12-1 166.166 1.395 332.166 3.061 498 5a5196.534 5196.534 0 0 1-75 31 238.217 238.217 0 0 0-22-1.5c-99.668-.688-199.335-1.522-299-2.5-12.505 0-24.838.333-37 1l-77-32Z"
        />
        <path
          fill="#d1fba6"
          d="M619.5 693.5c12.162-.667 24.495-1 37-1 99.665.978 199.332 1.812 299 2.5 7.511.171 14.845.671 22 1.5a291923.96 291923.96 0 0 0-81 33.5c-63.7 24.558-127.366 24.558-191 0a14447.774 14447.774 0 0 0-86-36.5Z"
        />
        <path
          fill="#d6fca3"
          d="M683.5 797.5a22157.882 22157.882 0 0 0-338-3c4.48-6.646 10.147-12.146 17-16.5l131-58.5a461639.97 461639.97 0 0 0 190 78Z"
        />
        <path
          fill="#d5fca3"
          d="M1274.5 803.5c-120.67-.951-241.34-2.285-362-4a74369.578 74369.578 0 0 1 213.5-86 12935.51 12935.51 0 0 1 118.5 48.5c15.49 9.801 25.49 23.635 30 41.5Z"
        />
        <path
          fill="#d9fca1"
          d="M683.5 797.5c76.104 27.165 152.437 27.832 229 2 120.66 1.715 241.33 3.049 362 4 1.47 4.242 2.13 8.742 2 13.5.22 6.179-.78 12.013-3 17.5a250934.422 250934.422 0 0 0-938-11v10c-2.158-14.366 1.175-27.366 10-39 112.603.14 225.269 1.14 338 3Z"
        />
        <path
          fill="#ddfc9e"
          d="M1273.5 834.5c-5.19 20.525-17.52 35.025-37 43.5a21149.901 21149.901 0 0 0-108 43.5 640.66 640.66 0 0 0-36-1.5 171232.714 171232.714 0 0 0-635-6.5 2018.202 2018.202 0 0 1-99-41.5c-13.175-9.512-20.841-22.345-23-38.5v-10c312.837 3.084 625.504 6.751 938 11Z"
        />
        <path
          fill="#e2fc9a"
          d="M457.5 913.5c211.475 1.772 423.141 3.939 635 6.5 12.17.169 24.17.669 36 1.5-79.93 32.59-159.931 65.09-240 97.5-58.327 20.6-116.661 20.6-175 0a40838.328 40838.328 0 0 0-256-105.5Z"
        />
        <path
          fill="#e7fc96"
          d="M1268.5 1055.5c-96.33 1.28-192.66 2.28-289 3 56.41-23.36 113.07-46.36 170-69 31.71 13.07 63.37 26.24 95 39.5 11.02 6.18 19.02 15.01 24 26.5ZM632.5 1062.5a63277.15 63277.15 0 0 1-279 3.5c-4.085.23-8.085.73-12 1.5 4.372-9.87 11.372-17.37 21-22.5 36.083-16.36 72.25-32.53 108.5-48.5a43010.571 43010.571 0 0 1 161.5 66Z"
        />
        <path
          fill="#ebfc93"
          d="M1268.5 1055.5c10.63 19.63 10.63 39.3 0 59-1.55-1.29-3.55-1.96-6-2-305.994 3.88-611.994 7.55-918 11-10.025-14.32-12.525-29.99-7.5-47 1.003-3.34 2.503-6.34 4.5-9a87.637 87.637 0 0 1 12-1.5c93.006-.96 186.006-2.13 279-3.5a6496.844 6496.844 0 0 1 59 23.5c74.521 25.07 148.854 24.41 223-2 21.663-8.61 43.33-17.11 65-25.5 96.34-.72 192.67-1.72 289-3Z"
        />
        <path
          fill="#effc91"
          d="M1268.5 1114.5c-4.95 9.8-11.95 17.96-21 24.5a1888.636 1888.636 0 0 1-75 33.5c-224.493 1.87-449.16 4.2-674 7-15.016 0-29.682.67-44 2-30.35-13.06-60.684-26.23-91-39.5-8.183-4.35-14.517-10.52-19-18.5 306.006-3.45 612.006-7.12 918-11 2.45.04 4.45.71 6 2Z"
        />
        <path
          fill="#f2fc8e"
          d="M1172.5 1172.5c-24 10.33-48 20.67-72 31-7.99-.67-16.16-1-24.5-1-183.831 2.32-367.665 4.49-551.5 6.5-1.558.21-2.891.71-4 1.5-22-9.67-44-19.33-66-29 14.318-1.33 28.984-2 44-2 224.84-2.8 449.507-5.13 674-7Z"
        />
        <path
          fill="#f5fc8b"
          d="M1100.5 1203.5c-64.97 28.15-129.974 56.32-195 84.5-59.077 21.18-119.077 24.18-180 9a415.195 415.195 0 0 1-22-7 20879.206 20879.206 0 0 1-183-79.5c1.109-.79 2.442-1.29 4-1.5 183.835-2.01 367.669-4.18 551.5-6.5 8.34 0 16.51.33 24.5 1Z"
        />
      </svg>
    </SvgIcon>
  );
});

export default FuseNetwork;
