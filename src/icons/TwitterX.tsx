import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';
import type {ForwardedRef} from 'react';
import React from 'react';

const TwitterX = React.forwardRef(
  (props: SvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          transform="translate(2, 2)"
          d="M0.048762 0.743164L7.77054 11.0679L0 19.4624H1.74884L8.55193 12.1129L14.0486 19.4624H20L11.8438 8.55687L19.0765 0.743164H17.3277L11.0624 7.51188L6.00012 0.743164H0.048762ZM2.62056 2.03136H5.35462L17.4278 18.174H14.6937L2.62056 2.03136Z"
        />
      </SvgIcon>
    );
  },
);

export default TwitterX;
