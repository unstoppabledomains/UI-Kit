import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';

const Polkadot = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  return (
    <SvgIcon viewBox="0 0 1326.1 1410.3" {...props} ref={iconRef || ref}>
      <ellipse fill="#E6007A" cx="663" cy="147.9" rx="254.3" ry="147.9" />
      <ellipse fill="#E6007A" cx="663" cy="1262.3" rx="254.3" ry="147.9" />
      <ellipse
        transform="matrix(0.5 -0.866 0.866 0.5 -279.1512 369.5916)"
        fill="#E6007A"
        cx="180.5"
        cy="426.5"
        rx="254.3"
        ry="148"
      />
      <ellipse
        transform="matrix(0.5 -0.866 0.866 0.5 -279.1552 1483.9517)"
        fill="#E6007A"
        cx="1145.6"
        cy="983.7"
        rx="254.3"
        ry="147.9"
      />
      <ellipse
        transform="matrix(0.866 -0.5 0.5 0.866 -467.6798 222.044)"
        fill="#E6007A"
        cx="180.5"
        cy="983.7"
        rx="148"
        ry="254.3"
      />
      <ellipse
        transform="matrix(0.866 -0.5 0.5 0.866 -59.8007 629.9254)"
        fill="#E6007A"
        cx="1145.6"
        cy="426.6"
        rx="147.9"
        ry="254.3"
      />
    </SvgIcon>
  );
});

export default Polkadot;
