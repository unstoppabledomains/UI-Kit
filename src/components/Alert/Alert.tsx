import SuccessIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import WarningIcon from '@mui/icons-material/WarningAmberOutlined';
import MuiAlert from '@mui/material/Alert';
import type {AlertProps, AlertClasses} from '@mui/material/Alert';
import MuiAlertTitle from '@mui/material/AlertTitle';
import type {FC, ReactNode} from 'react';
import React from 'react';

import {useStyles} from './Alert.styles';

export type AlertSize = 'small' | 'medium';

type Props = AlertProps & {
  title?: ReactNode;
  size?: AlertSize;
  classes?: Partial<AlertClasses & {subtitle: string}>;
};

const Alert: FC<Props> = ({
  title,
  severity = 'info',
  size = 'small',
  variant = 'standard',
  children,
  ...props
}) => {
  const {classes, cx} = useStyles({
    severity,
    size,
    hasAction: !!props.action || !!props.onClose,
  });

  if (!title && !children) {
    throw new Error('Alert must have either title or children');
  }

  return (
    <MuiAlert
      {...props}
      classes={{
        icon: classes.icon,
        ...props.classes,
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
      {!!title && (
        <MuiAlertTitle classes={{root: classes.title}}>{title}</MuiAlertTitle>
      )}
      {!!children && (
        <div className={cx(classes.subtitle, props.classes?.subtitle)}>
          {children}
        </div>
      )}
    </MuiAlert>
  );
};

export default Alert;
