import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

import {makeStyles} from '../../styles';

const useStyles = makeStyles()(() => ({id: {}}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OpenSea = React.forwardRef((props: SvgIconProps, ref: any) => {
  const {classes} = useStyles();
  const uuid = classes.id;
  const ids = Array.from({length: 4}).map((_, i) => `open-sea-${uuid}-${i}`);

  return (
    <SvgIcon viewBox="0 0 56 56" {...props} ref={ref}>
      <path
        d="M4.66674 27.9993C4.66674 15.1127 15.1134 4.66602 28.0001 4.66602C40.8867 4.66602 51.3334 15.1127 51.3334 27.9993C51.3334 40.886 40.8867 51.3326 28.0001 51.3326C15.1134 51.3326 4.66674 40.886 4.66674 27.9993Z"
        fill="#3291E9"
      />
      <path
        d="M4.66674 27.9993C4.66674 15.1127 15.1134 4.66602 28.0001 4.66602C40.8867 4.66602 51.3334 15.1127 51.3334 27.9993C51.3334 40.886 40.8867 51.3326 28.0001 51.3326C15.1134 51.3326 4.66674 40.886 4.66674 27.9993Z"
        fill={`url(#${ids[0]})`}
      />
      <g opacity="0.5">
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.1416 10.3399C42.2364 11.2899 41.1206 12.2191 39.7803 13.112C35.2892 16.1039 31.7056 20.3782 31.6056 28.9181C31.4949 38.3768 35.7746 43.0863 40.8457 47.4127C37.1514 49.8889 32.7106 51.3326 27.9335 51.3326C15.0836 51.3326 4.66669 40.8859 4.66669 27.9993C4.66669 15.1127 15.0836 4.66602 27.9335 4.66602C33.7474 4.66602 39.0632 6.80451 43.1416 10.3399Z"
          fill="#3291E9"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.1416 10.3399C42.2364 11.2899 41.1206 12.2191 39.7803 13.112C35.2892 16.1039 31.7056 20.3782 31.6056 28.9181C31.4949 38.3768 35.7746 43.0863 40.8457 47.4127C37.1514 49.8889 32.7106 51.3326 27.9335 51.3326C15.0836 51.3326 4.66669 40.8859 4.66669 27.9993C4.66669 15.1127 15.0836 4.66602 27.9335 4.66602C33.7474 4.66602 39.0632 6.80451 43.1416 10.3399Z"
          fill={`url(#${ids[1]})`}
        />
      </g>
      <g opacity="0.5">
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.754 5.40206C33.1315 7.09405 32.0511 8.88259 30.4526 10.7283C26.9168 14.8106 24.5956 19.8871 26.7601 28.145C29.4967 38.5852 36.1073 41.5365 43.1542 44.6827C43.3917 44.7887 43.6297 44.895 43.8681 45.0018C39.7047 48.9275 34.0992 51.3326 27.9335 51.3326C15.0836 51.3326 4.66669 40.8859 4.66669 27.9993C4.66669 15.1127 15.0836 4.66602 27.9335 4.66602C29.9434 4.66602 31.8938 4.92158 33.754 5.40206Z"
          fill="#3291E9"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.754 5.40206C33.1315 7.09405 32.0511 8.88259 30.4526 10.7283C26.9168 14.8106 24.5956 19.8871 26.7601 28.145C29.4967 38.5852 36.1073 41.5365 43.1542 44.6827C43.3917 44.7887 43.6297 44.895 43.8681 45.0018C39.7047 48.9275 34.0992 51.3326 27.9335 51.3326C15.0836 51.3326 4.66669 40.8859 4.66669 27.9993C4.66669 15.1127 15.0836 4.66602 27.9335 4.66602C29.9434 4.66602 31.8938 4.92158 33.754 5.40206Z"
          fill={`url(#${ids[2]})`}
        />
      </g>
      <g opacity="0.3">
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.31331 19.3613C6.38759 19.6661 6.46982 19.9751 6.56021 20.2881C9.5538 30.6567 17.9009 33.1203 26.7988 35.7467C33.02 37.583 39.5106 39.4988 44.629 44.2514C40.4008 48.6192 34.4832 51.3333 27.9335 51.3333C15.0836 51.3333 4.66669 40.8866 4.66669 28C4.66669 24.9481 5.25091 22.0331 6.31331 19.3613Z"
          fill="#3291E9"
        />
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.31331 19.3613C6.38759 19.6661 6.46982 19.9751 6.56021 20.2881C9.5538 30.6567 17.9009 33.1203 26.7988 35.7467C33.02 37.583 39.5106 39.4988 44.629 44.2514C40.4008 48.6192 34.4832 51.3333 27.9335 51.3333C15.0836 51.3333 4.66669 40.8866 4.66669 28C4.66669 24.9481 5.25091 22.0331 6.31331 19.3613Z"
          fill={`url(#${ids[3]})`}
        />
      </g>
      <path
        d="M27.8997 44.9813C37.176 44.9813 44.6958 37.4399 44.6958 28.1371C44.6958 18.8344 37.176 11.293 27.8997 11.293C18.6234 11.293 11.1035 18.8344 11.1035 28.1371C11.1035 37.4399 18.6234 44.9813 27.8997 44.9813Z"
        fill="white"
      />
      <path
        d="M28.8058 19.7715V20.8258L27.6693 20.6726V19.7715C27.8393 19.8706 28.0273 19.9247 28.2331 19.9247C28.4389 19.9247 28.6357 19.8706 28.8058 19.7715Z"
        fill="#24D7D0"
      />
      <path
        d="M28.7687 30.9005V33.5138H27.6323V30.8915C27.9813 30.8734 28.366 30.8734 28.7687 30.9005Z"
        fill="#24D7D0"
      />
      <path
        d="M29.3322 18.789C29.3322 19.2125 29.1085 19.582 28.7685 19.7802C28.5985 19.8794 28.4105 19.9334 28.2047 19.9334C27.9989 19.9334 27.802 19.8794 27.641 19.7802C27.3009 19.582 27.0772 19.2125 27.0772 18.789C27.0772 18.1582 27.5873 17.6445 28.2137 17.6445C28.8401 17.6445 29.3322 18.1582 29.3322 18.789Z"
        fill="#14869F"
      />
      <path
        d="M25.3426 25.0607V30.0169C25.3426 30.089 25.2889 30.1431 25.2173 30.1431H20.6446C20.5552 30.1431 20.4925 30.053 20.5283 29.9628L22.8549 23.9613C22.8818 23.8892 22.9623 23.8622 23.0249 23.8892L25.271 24.9435C25.3157 24.9615 25.3426 25.0156 25.3426 25.0607Z"
        fill="#1EB6D1"
      />
      <path
        d="M29.9958 26.5746C29.7005 27.2684 29.2799 27.9172 28.8057 28.512C28.4567 28.9446 28.0719 29.3501 27.6692 29.7196C27.1961 30.1626 26.7152 30.5591 26.2481 30.9018C26.1878 30.9462 26.0918 30.9192 26.1301 30.8549C26.3538 30.3773 26.7923 29.0707 26.7117 26.2501C26.6223 23.1953 25.5574 21.2128 25.1457 20.564C25.0831 20.4739 25.1636 20.3567 25.271 20.3657L27.6692 20.6811L28.8057 20.8343L30.4522 21.0506C30.4714 21.0506 30.4817 21.0675 30.4874 21.0859C30.574 21.3656 31.2243 23.6793 29.9958 26.5746Z"
        fill="#6BD9FC"
      />
      <path
        d="M33.6021 27.3846C33.6021 31.4216 32.1793 31.8091 31.8213 32.0975C31.7676 32.1336 31.6961 32.1336 31.6513 32.0885C31.4097 31.8542 30.7744 31.1603 29.3695 30.9621C29.1815 30.935 28.9936 30.917 28.8057 30.899C28.412 30.8719 28.0272 30.8719 27.6693 30.881C27.0608 30.908 26.5596 30.9801 26.2643 31.0251C26.1864 31.0383 26.1917 30.9333 26.2552 30.8864C26.4044 30.7761 26.5536 30.6602 26.7028 30.5385C26.7565 30.4935 26.8102 30.4574 26.8639 30.4124C27.1323 30.1961 27.4008 29.9618 27.6693 29.7095C27.7229 29.6645 27.7766 29.6104 27.8214 29.5654C27.8661 29.5203 27.9109 29.4752 27.9645 29.4302C27.9843 29.4102 28.0041 29.3931 28.0223 29.3757C28.0514 29.3479 28.076 29.3191 28.1033 29.2894C28.1305 29.2597 28.1578 29.2266 28.1861 29.1979C28.2256 29.1577 28.2651 29.1162 28.3046 29.0697C28.3493 29.0247 28.3851 28.9796 28.4299 28.9345C28.4746 28.8895 28.5194 28.8354 28.5552 28.7904C28.6357 28.7002 28.7162 28.6011 28.7968 28.502C28.8326 28.4479 28.8773 28.4029 28.9131 28.3488C28.9489 28.2947 28.9936 28.2497 29.0294 28.1956C29.0652 28.1415 29.101 28.0965 29.1368 28.0424C29.1726 27.9883 29.2084 27.9433 29.2442 27.8892C29.2621 27.8622 29.2889 27.8261 29.3068 27.7991C29.3337 27.7631 29.3516 27.727 29.3784 27.691C29.4321 27.6099 29.4858 27.5288 29.5305 27.4477C29.5484 27.4116 29.5753 27.3756 29.5932 27.3395C29.6302 27.265 29.6788 27.1964 29.7149 27.1215C29.7161 27.119 29.7173 27.1166 29.7185 27.1142C29.79 26.9881 29.8527 26.8529 29.9153 26.7267C29.9422 26.6727 29.969 26.6186 29.9869 26.5645C31.2313 23.6318 30.5479 21.2957 30.4674 21.0579C30.4644 21.0493 30.4702 21.0407 30.4766 21.0472C30.4776 21.0481 30.4793 21.0497 30.4805 21.0503C30.7748 21.202 33.6021 23.696 33.6021 27.3846Z"
        fill="#1EB6D1"
      />
      <path
        d="M38.7205 31.2788C38.7205 31.3869 38.6579 31.4951 38.5505 31.5492C37.2899 32.1587 36.5039 33.4092 36.0412 34.7308C35.8321 35.3282 35.5636 35.8969 35.2431 36.4308C35.0341 36.7788 34.6333 36.9988 34.2642 36.8298L33.6915 36.5775C33.262 36.3883 32.7966 36.3883 32.3671 36.5775L31.7944 36.8298C31.3649 37.0191 30.8995 37.0191 30.47 36.8298L29.8973 36.5775C29.4678 36.3883 29.0025 36.3883 28.573 36.5775L28.0003 36.8298C27.5708 37.0191 27.1054 37.0191 26.6759 36.8298L26.1032 36.5775C25.6737 36.3883 25.2083 36.3883 24.7788 36.5775L24.2061 36.8298C23.7766 37.0191 23.3023 37.0191 22.8817 36.8298L22.309 36.5775C21.8795 36.3883 21.4052 36.3883 20.9847 36.5775L20.4567 36.8118C20.2062 36.9221 19.923 36.7971 19.7747 36.5671C18.8585 35.1467 18.3448 33.4719 18.3448 31.6753C18.3448 31.5492 18.3448 31.423 18.3538 31.2968C18.3538 31.2247 18.4164 31.1707 18.4791 31.1707H23.3292C23.4007 31.1707 23.4544 31.2247 23.4544 31.2968V31.9186C23.4544 32.7927 24.1614 33.5046 25.0294 33.5046H31.9197C32.6804 33.5046 33.3067 32.9639 33.4588 32.252C33.4678 32.198 33.5215 32.1529 33.5841 32.1529C35.1154 32.1529 36.627 31.8072 38.0061 31.1417L38.282 31.0085C38.3808 30.9588 38.4964 30.9733 38.5822 31.0343C38.661 31.0903 38.7205 31.1822 38.7205 31.2788Z"
        fill="#14869F"
      />
      <defs>
        <linearGradient
          id={ids[0]}
          x1="-168.221"
          y1="-30.9667"
          x2="-176.798"
          y2="21.8817"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.048" stopColor="#1F66A9" />
          <stop offset="0.685348" stopColor="#3291E9" />
        </linearGradient>
        <linearGradient
          id={ids[1]}
          x1="41.9541"
          y1="2.17009"
          x2="-15.9066"
          y2="1.49281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9A332" stopOpacity="0" />
          <stop offset="0.0001" stopColor="#23DC7D" stopOpacity="0" />
          <stop offset="1" stopColor="#23DC7D" />
        </linearGradient>
        <linearGradient
          id={ids[2]}
          x1="24.2912"
          y1="-19.0371"
          x2="-31.6789"
          y2="-4.36627"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9A332" stopOpacity="0" />
          <stop offset="0.0001" stopColor="#23DC7D" stopOpacity="0" />
          <stop offset="1" stopColor="#23DC7D" />
        </linearGradient>
        <linearGradient
          id={ids[3]}
          x1="-16.5653"
          y1="98.5069"
          x2="57.6594"
          y2="108.595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#23DC7D" />
          <stop offset="1" stopColor="#23DC7D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
});

export default OpenSea;
