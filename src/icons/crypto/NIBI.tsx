import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const NIBI = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props} ref={iconRef || ref}>
      <rect
        x="0.845703"
        y="0.845215"
        width="160"
        height="160.003"
        rx="40"
        fill="url(#paint0_linear_408_5)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.3593 44.2744L81.7222 16.8452L119.085 44.2744V100.961L44.3593 44.2744ZM42.2822 60.7317L119.084 117.419L81.7208 144.848L42.2822 117.419V60.7317Z"
        fill="url(#paint1_linear_408_5)"
      />
      <path
        d="M81.7222 16.8452L82.6098 15.6361L81.7222 14.9844L80.8345 15.6361L81.7222 16.8452ZM44.3593 44.2744L43.4717 43.0652L41.8514 44.2547L43.4528 45.4694L44.3593 44.2744ZM119.085 44.2744H120.585V43.5147L119.973 43.0652L119.085 44.2744ZM119.085 100.961L118.178 102.156L120.585 103.982V100.961H119.085ZM119.084 117.419L119.971 118.628L121.614 117.422L119.974 116.212L119.084 117.419ZM42.2822 60.7317L43.173 59.5248L40.7822 57.7602V60.7317H42.2822ZM81.7208 144.848L80.8643 146.079L81.7444 146.691L82.6085 146.057L81.7208 144.848ZM42.2822 117.419H40.7822V118.202L41.4258 118.65L42.2822 117.419ZM80.8345 15.6361L43.4717 43.0652L45.247 45.4835L82.6098 18.0544L80.8345 15.6361ZM119.973 43.0652L82.6098 15.6361L80.8345 18.0544L118.197 45.4835L119.973 43.0652ZM120.585 100.961V44.2744H117.585V100.961H120.585ZM43.4528 45.4694L118.178 102.156L119.992 99.7662L45.2659 43.0793L43.4528 45.4694ZM119.974 116.212L43.173 59.5248L41.3914 61.9385L118.193 118.625L119.974 116.212ZM82.6085 146.057L119.971 118.628L118.196 116.209L80.8331 143.639L82.6085 146.057ZM41.4258 118.65L80.8643 146.079L82.5773 143.616L43.1387 116.187L41.4258 118.65ZM40.7822 60.7317V117.419H43.7822V60.7317H40.7822Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_408_5"
          x1="52"
          y1="1"
          x2="118"
          y2="183.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F0F0" />
          <stop offset="0.432292" stopColor="#A5BEF4" stopOpacity="0.8" />
          <stop offset="1" stopColor="#9D91F4" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_5"
          x1="133.001"
          y1="201.922"
          x2="0.45925"
          y2="8.88018"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEF3CC" />
          <stop offset="0.234375" stopColor="#D2BBC4" />
          <stop offset="0.473958" stopColor="#B689D3" />
          <stop offset="0.697917" stopColor="#9493FF" />
          <stop offset="1" stopColor="#4C1CB2" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
});

export default NIBI;
