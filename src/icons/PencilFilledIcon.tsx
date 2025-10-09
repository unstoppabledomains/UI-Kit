import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const PencilFilledIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
        <path
          fill="currentColor"
          d="M19.121 3.707a3 3 0 0 0-4.242 0l-12 12A3 3 0 0 0 2 17.828V20a1 1 0 0 0 1 1h2.171a3 3 0 0 0 2.122-.88l12-12a3 3 0 0 0 0-4.241l-.172-.172Zm2.55 15.042a7.156 7.156 0 0 1-.93.826c-.581.431-1.504.97-2.575.97-1.005 0-1.877-.464-2.503-.797l-.066-.035c-.723-.384-1.168-.598-1.61-.598-1.057 0-1.732.558-2.26 1.116a1 1 0 1 1-1.454-1.373c.654-.692 1.824-1.743 3.714-1.743.986 0 1.85.46 2.468.789l.08.043c.717.38 1.172.598 1.631.598.429 0 .923-.234 1.384-.576.25-.187.482-.395.695-.624a1.01 1.01 0 0 1 1.408-.102c.477.412.419 1.076.018 1.506Z"
        />
      </SvgIcon>
    );
  },
);

export default PencilFilledIcon;
