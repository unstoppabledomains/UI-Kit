import type {SvgIconProps} from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import type {ForwardedRef} from 'react';
import React from 'react';

const Rarible = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} viewBox="0 0 32 32" ref={ref}>
        <path
          d="M25.6 0H6.4C2.86538 0 0 2.86538 0 6.4V25.6C0 29.1346 2.86538 32 6.4 32H25.6C29.1346 32 32 29.1346 32 25.6V6.4C32 2.86538 29.1346 0 25.6 0Z"
          fill="#FEDA03"
        />
        <path
          d="M22.0807 15.8831C23.0887 15.6212 23.9855 14.8673 23.9855 13.3514C23.9855 10.8276 21.8426 10.2402 19.0966 10.2402H8.16016V21.6054H12.7633V17.7482H18.2236C19.0649 17.7482 19.557 18.0815 19.557 18.907V21.6054H24.1602V18.7641C24.1602 17.2165 23.2871 16.2402 22.0807 15.8831ZM18.303 14.6847H12.7633V13.5736H18.303C18.9062 13.5736 19.2712 13.653 19.2712 14.1292C19.2712 14.6054 18.9062 14.6847 18.303 14.6847Z"
          fill="black"
        />
      </SvgIcon>
    );
  },
);

export default Rarible;
