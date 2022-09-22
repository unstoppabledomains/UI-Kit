import type {SvgIconProps} from '@mui/material';
import {SvgIcon} from '@mui/material';
import React from 'react';
import {makeStyles} from 'styles';

const useStyles = makeStyles()(() => ({
  root: {
    borderRadius: '50%',
  },
}));

const TheDogeNFT = React.forwardRef<
  SVGSVGElement,
  {
    iconRef?: React.ForwardedRef<SVGSVGElement>;
  } & SvgIconProps
>(({iconRef, ...props}, ref) => {
  const {classes} = useStyles();

  return (
    <SvgIcon {...props} className={classes.root} ref={iconRef || ref}>
      <image
        href="https://storage.googleapis.com/unstoppable-client-assets/images/icons/DOG/icon.jpeg"
        x="-12px"
        y="-7px"
        height="50px"
        width="50px"
      />
    </SvgIcon>
  );
});

export default TheDogeNFT;
