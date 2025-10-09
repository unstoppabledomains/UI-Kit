import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const CrownVipIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          d="M12.788 3.446A.935.935 0 0 0 12 3.001a.935.935 0 0 0-.788.445L7.886 8.71 2.95 6.106a.907.907 0 0 0-1.002.102 1.03 1.03 0 0 0-.35.997l2.055 10.408C3.928 19.003 5.09 20 6.435 20h11.13c1.346 0 2.507-.997 2.782-2.389l2.054-10.407a1.03 1.03 0 0 0-.35-.997.907.907 0 0 0-1.001-.102l-4.936 2.605-3.326-5.265Z"
        />
      </SvgIcon>
    );
  },
);

export default CrownVipIcon;
