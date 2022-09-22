import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import type {ForwardedRef} from 'react';
import React from 'react';

const CollectingBadgesIcon = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon
        width="320"
        height="168"
        viewBox="0 0 320 168"
        {...props}
        ref={ref}
      >
        <rect x="72.5" y="24.5" width="175" height="63" rx="3.5" fill="white" />
        <rect
          x="72.5"
          y="24.5"
          width="175"
          height="63"
          rx="3.5"
          stroke="#DDDDDF"
        />
        <rect x="60.5" y="32.5" width="199" height="79" rx="3.5" fill="white" />
        <rect
          x="60.5"
          y="32.5"
          width="199"
          height="79"
          rx="3.5"
          stroke="#DDDDDF"
        />
        <g filter="url(#filter0_dd_10598_218194)">
          <rect x="48" y="40" width="224" height="72" rx="4" fill="white" />
          <path
            d="M89.8333 74.334C91.214 74.334 92.3333 73.2147 92.3333 71.834C92.3333 70.4533 91.214 69.334 89.8333 69.334C88.4525 69.334 87.3333 70.4533 87.3333 71.834C87.3333 73.2147 88.4525 74.334 89.8333 74.334Z"
            fill="#DDDDDF"
          />
          <path
            d="M78.1666 74.334C79.5473 74.334 80.6666 73.2147 80.6666 71.834C80.6666 70.4533 79.5473 69.334 78.1666 69.334C76.7859 69.334 75.6666 70.4533 75.6666 71.834C75.6666 73.2147 76.7859 74.334 78.1666 74.334Z"
            fill="#DDDDDF"
          />
          <path
            d="M83.9999 86.0007C87.7999 86.0007 91.0333 83.234 92.3333 79.334H75.6666C76.9666 83.234 80.1999 86.0007 83.9999 86.0007Z"
            fill="#DDDDDF"
          />
          <path
            d="M83.9833 59.334C74.7833 59.334 67.3333 66.8007 67.3333 76.0007C67.3333 85.2007 74.7833 92.6673 83.9833 92.6673C93.1999 92.6673 100.667 85.2007 100.667 76.0007C100.667 66.8007 93.1999 59.334 83.9833 59.334ZM83.9999 89.334C76.6333 89.334 70.6666 83.3673 70.6666 76.0007C70.6666 68.634 76.6333 62.6673 83.9999 62.6673C91.3666 62.6673 97.3333 68.634 97.3333 76.0007C97.3333 83.3673 91.3666 89.334 83.9999 89.334Z"
            fill="#DDDDDF"
          />
          <rect
            x="120"
            y="66"
            width="136"
            height="20"
            rx="10"
            fill="url(#paint0_linear_10598_218194)"
          />
          <rect
            x="48.5"
            y="40.5"
            width="223"
            height="71"
            rx="3.5"
            stroke="#DDDDDF"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_10598_218194"
            x="0"
            y="0"
            width="320"
            height="168"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="24" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10598_218194"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_10598_218194"
              result="effect2_dropShadow_10598_218194"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_10598_218194"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_10598_218194"
            x1="120"
            y1="76"
            x2="256"
            y2="76"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DDDDDF" />
            <stop offset="1" stopColor="#DDDDDF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </SvgIcon>
    );
  },
);

export default CollectingBadgesIcon;
