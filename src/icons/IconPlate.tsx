import type {Theme} from '@mui/material/styles';
import React from 'react';

import {makeStyles} from '../styles';

export type IconPlateVariant = 'default' | 'info' | 'error' | 'success';

const useStyles = makeStyles<{size: number; variant: IconPlateVariant}>()(
  (theme: Theme, {size, variant}) => {
    const variantToColor = () => {
      switch (variant) {
        case 'info':
          return theme.palette.primary.main;
        case 'error':
          return theme.palette.error.main;
        case 'success':
          return theme.palette.success.dark;
        default:
          return theme.palette.neutralShades[500];
      }
    };

    const variantToShadowColor = () => {
      switch (variant) {
        case 'info':
          return theme.palette.primary.main;
        case 'error':
          return theme.palette.dangerShades[900];
        case 'success':
          return theme.palette.successShades[900];
        default:
          return theme.palette.greyShades[900];
      }
    };
    const color = variantToColor();
    const shadowColor = variantToShadowColor();

    return {
      box: {
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.shape.borderRadius,
        backgroundSize: `${size / 6.4}px ${size / 6.4}px`,
        backgroundColor: 'white',
        backgroundImage: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.06) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)`,
        backgroundPosition: `-${0.0625 * size}px`,
        boxShadow:
          '0px 2px 3.3333334922790527px -1.6666667461395264px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',

        '&:before': {
          content: "''",
          width: '100%',
          height: '100%',
          position: 'absolute',
          boxShadow: `inset 0 0 0 1px ${shadowColor}33`,
          borderRadius: theme.shape.borderRadius,
        },
      },
      ellipse1: {
        position: 'absolute',
        width: size / 2,
        height: size / 2,
        right: 0.22,
        bottom: 0,
        background: color,
        opacity: 0.12,
        filter: `blur(${size / 4}px)`,
        zIndex: 3,
      },
      ellipse2: {
        position: 'absolute',
        width: size / 2,
        height: size / 2,
        left: 0,
        top: 0,
        background: color,
        opacity: 0.32,
        filter: `blur(${size / 4}px)`,
        zIndex: 2,
      },

      ellipse3: {
        position: 'absolute',
        width: size,
        height: size,
        left: `calc(50% - ${size}px / 2)`,
        top: `calc(50% - ${size}px / 2)`,
        background: '#ffffff',
        filter: `blur(${size * 0.08333}px)`,
        zIndex: 1,
      },
      icon: {
        display: 'flex',
        zIndex: 4,
        '& > svg': {
          fontSize: size * 0.75,
          '& > path': {
            color,
          },
        },
      },
    };
  },
);

type Props = {
  children: JSX.Element;
  size?: number; // width & height; default 32px
  variant?: IconPlateVariant;
  className?: string;
};

const IconPlate = ({
  children,
  variant = 'default',
  size = 32,
  className,
}: Props) => {
  const {classes, cx} = useStyles({size, variant});

  return (
    <div className={cx(classes.box, className)}>
      <div className={classes.ellipse1} />
      <div className={classes.ellipse2} />
      <div className={classes.ellipse3} />
      <div className={classes.icon}>{children}</div>
    </div>
  );
};

export default IconPlate;
