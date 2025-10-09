import SvgIcon from '@mui/material/SvgIcon';
import type {SvgIconProps} from '@mui/material/SvgIcon';
import React from 'react';

const CopyIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} ref={ref}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M8.5 8v-.8c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C10.02 4 10.58 4 11.7 4h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.98 16 18.42 16 17.3 16h-.8m0-4.8v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C14.98 20 14.42 20 13.3 20H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4.5 18.48 4.5 17.92 4.5 16.8v-5.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.02 8 6.58 8 7.7 8h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108Z"
      />
    </SvgIcon>
  );
});

export default CopyIcon;
