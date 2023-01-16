import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import type {ForwardedRef} from 'react';
import React from 'react';

import {makeStyles} from '../styles';

const useStyles = makeStyles()(() => ({id: {}}));

const Edge = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    const {classes} = useStyles();
    const paths = [
      {
        d: 'M20.0508 16.8855C19.7841 17.025 19.5091 17.1479 19.2273 17.2535C18.3304 17.5891 17.3803 17.7601 16.4226 17.7582C12.7258 17.7582 9.50545 15.2152 9.50545 11.952C9.51018 11.5143 9.63164 11.0858 9.85728 10.7107C10.0829 10.3356 10.4046 10.0276 10.789 9.81836C7.44529 9.95898 6.58591 13.4434 6.58591 15.4848C6.58591 21.2566 11.9054 21.8418 13.0515 21.8418C13.6695 21.8418 14.6015 21.6621 15.1609 21.4855L15.2633 21.4512C17.4158 20.707 19.2508 19.2522 20.4664 17.3262C20.5036 17.2675 20.5202 17.1981 20.5136 17.129C20.507 17.0598 20.4775 16.9948 20.4299 16.9443C20.3822 16.8937 20.319 16.8605 20.2504 16.8499C20.1817 16.8393 20.1115 16.8518 20.0508 16.8855Z',
      },
      {
        opacity: '0.35',
        d: 'M20.0508 16.8855C19.7841 17.025 19.5091 17.1479 19.2273 17.2535C18.3304 17.5891 17.3803 17.7601 16.4226 17.7582C12.7258 17.7582 9.50545 15.2152 9.50545 11.952C9.51018 11.5143 9.63164 11.0858 9.85728 10.7107C10.0829 10.3356 10.4046 10.0276 10.789 9.81836C7.44529 9.95898 6.58591 13.4434 6.58591 15.4848C6.58591 21.2566 11.9054 21.8418 13.0515 21.8418C13.6695 21.8418 14.6015 21.6621 15.1609 21.4855L15.2633 21.4512C17.4158 20.707 19.2508 19.2522 20.4664 17.3262C20.5036 17.2675 20.5202 17.1981 20.5136 17.129C20.507 17.0598 20.4775 16.9948 20.4299 16.9443C20.3822 16.8937 20.319 16.8605 20.2504 16.8499C20.1817 16.8393 20.1115 16.8518 20.0508 16.8855Z',
      },
      {
        d: 'M10.2586 20.8617C9.56177 20.4292 8.95788 19.8625 8.48204 19.1945C7.93968 18.4515 7.56647 17.5987 7.38857 16.6962C7.21067 15.7936 7.23239 14.863 7.45221 13.9697C7.67204 13.0765 8.08464 12.2421 8.66107 11.5251C9.23751 10.8082 9.96382 10.226 10.7891 9.81953C11.0328 9.70469 11.4492 9.49687 12.0031 9.50703C12.3934 9.50987 12.7777 9.60305 13.1259 9.77925C13.4741 9.95546 13.7767 10.2099 14.0102 10.5227C14.3256 10.9439 14.4996 11.4542 14.507 11.9805C14.507 11.9641 16.418 5.76172 8.25704 5.76172C4.82735 5.76172 2.00704 9.01641 2.00704 11.8719C1.99351 13.3824 2.3167 14.8769 2.95313 16.2469C3.99323 18.4661 5.81208 20.226 8.0643 21.1926C10.3165 22.1591 12.8452 22.2649 15.1703 21.4898C14.3562 21.7465 13.4961 21.8236 12.6494 21.7157C11.8026 21.6078 10.9893 21.3175 10.2656 20.8648L10.2586 20.8617Z',
      },
      {
        opacity: '0.41',
        d: 'M10.2586 20.8617C9.56177 20.4292 8.95788 19.8625 8.48204 19.1945C7.93968 18.4515 7.56647 17.5987 7.38857 16.6962C7.21067 15.7936 7.23239 14.863 7.45221 13.9697C7.67204 13.0765 8.08464 12.2421 8.66107 11.5251C9.23751 10.8082 9.96382 10.226 10.7891 9.81953C11.0328 9.70469 11.4492 9.49687 12.0031 9.50703C12.3934 9.50987 12.7777 9.60305 13.1259 9.77925C13.4741 9.95546 13.7767 10.2099 14.0102 10.5227C14.3256 10.9439 14.4996 11.4542 14.507 11.9805C14.507 11.9641 16.418 5.76172 8.25704 5.76172C4.82735 5.76172 2.00704 9.01641 2.00704 11.8719C1.99351 13.3824 2.3167 14.8769 2.95313 16.2469C3.99323 18.4661 5.81208 20.226 8.0643 21.1926C10.3165 22.1591 12.8452 22.2649 15.1703 21.4898C14.3562 21.7465 13.4961 21.8236 12.6494 21.7157C11.8026 21.6078 10.9893 21.3175 10.2656 20.8648L10.2586 20.8617Z',
      },
      {
        d: 'M13.8993 13.6297C13.836 13.7117 13.6414 13.825 13.6414 14.0719C13.6414 14.2758 13.7743 14.4719 14.0102 14.6367C15.1336 15.418 17.2516 15.3148 17.2571 15.3148C18.0895 15.3128 18.9062 15.0876 19.6219 14.6625C20.3439 14.2409 20.9432 13.6379 21.3602 12.9132C21.7772 12.1885 21.9975 11.3674 21.9993 10.5313C22.0196 8.78047 21.3743 7.61641 21.1133 7.10078C19.4578 3.8625 15.8844 2 11.9985 2C9.3705 1.99974 6.84804 3.03398 4.97666 4.87904C3.10529 6.7241 2.03543 9.23166 1.99847 11.8594C2.03597 9.00469 4.87347 6.69922 8.24847 6.69922C8.52191 6.69922 10.0813 6.72578 11.5297 7.48594C12.8063 8.15625 13.475 8.96562 13.9399 9.76797C14.4227 10.6016 14.5086 11.6547 14.5086 12.0742C14.5086 12.4937 14.2946 13.1156 13.8993 13.6297Z',
      },
      {
        d: 'M13.8993 13.6297C13.836 13.7117 13.6414 13.825 13.6414 14.0719C13.6414 14.2758 13.7743 14.4719 14.0102 14.6367C15.1336 15.418 17.2516 15.3148 17.2571 15.3148C18.0895 15.3128 18.9062 15.0876 19.6219 14.6625C20.3439 14.2409 20.9432 13.6379 21.3602 12.9132C21.7772 12.1885 21.9975 11.3674 21.9993 10.5313C22.0196 8.78047 21.3743 7.61641 21.1133 7.10078C19.4578 3.8625 15.8844 2 11.9985 2C9.3705 1.99974 6.84804 3.03398 4.97666 4.87904C3.10529 6.7241 2.03543 9.23166 1.99847 11.8594C2.03597 9.00469 4.87347 6.69922 8.24847 6.69922C8.52191 6.69922 10.0813 6.72578 11.5297 7.48594C12.8063 8.15625 13.475 8.96562 13.9399 9.76797C14.4227 10.6016 14.5086 11.6547 14.5086 12.0742C14.5086 12.4937 14.2946 13.1156 13.8993 13.6297Z',
      },
    ];
    const uuid = classes.id;
    const ids = Array.from({length: paths.length}).map(
      (_, i) => `edge-${uuid}-${i}`,
    );

    return (
      <SvgIcon {...props} ref={ref}>
        {paths.map(({d, opacity}, i) => (
          <path key={ids[i]} d={d} fill={`url(#${ids[i]})`} opacity={opacity} />
        ))}

        <defs>
          <linearGradient
            id={ids[0]}
            x1="6.58591"
            y1="15.8316"
            x2="20.5187"
            y2="15.8316"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0C59A4" />
            <stop offset="1" stopColor="#114A8B" />
          </linearGradient>
          <radialGradient
            id={ids[1]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(14.2812 15.9414) scale(7.45156 7.07898)"
          >
            <stop offset="0.72" stopOpacity="0" />
            <stop offset="0.95" stopOpacity="0.53" />
            <stop offset="1" />
          </radialGradient>
          <linearGradient
            id={ids[2]}
            x1="13.9313"
            y1="9.78906"
            x2="5.22891"
            y2="19.268"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B9DE2" />
            <stop offset="0.16" stopColor="#1595DF" />
            <stop offset="0.67" stopColor="#0680D7" />
            <stop offset="1" stopColor="#0078D4" />
          </linearGradient>
          <radialGradient
            id={ids[3]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(7.51364 17.5483) rotate(-81.3844) scale(11.2052 9.05265)"
          >
            <stop offset="0.76" stopOpacity="0" />
            <stop offset="0.95" stopOpacity="0.5" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id={ids[4]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(4.01898 5.70131) rotate(92.2906) scale(15.8275 33.7093)"
          >
            <stop stopColor="#35C1F1" />
            <stop offset="0.11" stopColor="#34C1ED" />
            <stop offset="0.23" stopColor="#2FC2DF" />
            <stop offset="0.31" stopColor="#2BC3D2" />
            <stop offset="0.67" stopColor="#36C752" />
          </radialGradient>
          <radialGradient
            id={ids[5]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.7541 8.04735) rotate(73.7398) scale(7.60469 6.18413)"
          >
            <stop stopColor="#66EB6E" />
            <stop offset="1" stopColor="#66EB6E" stopOpacity="0" />
          </radialGradient>
        </defs>
      </SvgIcon>
    );
  },
);

export default Edge;
