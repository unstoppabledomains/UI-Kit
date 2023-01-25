import SuccessIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import WarningIcon from '@mui/icons-material/WarningAmberOutlined';
import MuiAlert from '@mui/material/Alert';
import type {
  AlertProps as MuiAlertProps,
  AlertClasses as MuiAlertClasses,
} from '@mui/material/Alert';
import MuiAlertTitle from '@mui/material/AlertTitle';
import type {FC, ReactNode} from 'react';
import React from 'react';

import {useStyles} from './Alert.styles';

export type AlertClasses = Partial<
  MuiAlertClasses & {heading: string; body: string}
>;

export type AlertProps = MuiAlertProps & {
  heading?: ReactNode;
  size?: AlertSize;
  classes?: AlertClasses;
};

export type AlertSize = 'small' | 'medium' | 'large';

const Alert: FC<AlertProps> = ({
  heading,
  severity = 'info',
  size = 'small',
  variant = 'standard',
  children,
  ...props
}) => {
  const {classes, cx} = useStyles({
    severity,
    size,
    variant,
    hasAction: !!props.action || !!props.onClose,
  });

  if (!heading && !children) {
    throw new Error('Alert must have either heading or children');
  }

  return (
    <MuiAlert
      {...props}
      classes={{
        ...props.classes,
        icon: cx(classes.icon, props.classes?.icon),
        message: cx(classes.message, props.classes?.message),
        action: cx(
          classes.action,
          props.onClose ? classes.closeAction : '',
          props.classes?.action,
        ),
        root: cx(classes.root, props.className || props.classes?.root),
      }}
      iconMapping={{
        warning: <WarningIcon />,
        error: <ErrorIcon />,
        success: <SuccessIcon />,
        info: <InfoIcon />,
      }}
      severity={severity}
      variant={variant}
    >
      {!!heading && (
        <MuiAlertTitle className={cx(classes.heading, props.classes?.heading)}>
          {heading}
        </MuiAlertTitle>
      )}
      {!!children && (
        <div className={cx(classes.body, props.classes?.body)}>{children}</div>
      )}
    </MuiAlert>
  );
};

export default Alert;
