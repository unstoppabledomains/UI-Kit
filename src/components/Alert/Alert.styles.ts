import {AlertColor} from '@mui/material/Alert';
import {Theme} from '@mui/material/styles';
import {AlertSize} from 'components/Alert/Alert';
import {makeStyles} from 'styles';

const getStylesBySeverityAndVariant = (theme?: Theme) => ({
  warning: {
    standard: {
      backgroundColor: theme?.palette.warningShades[200],
      borderColor: theme?.palette.warningShades[300],
      iconColor: theme?.palette.warningShades[600],
    },
    filled: {
      backgroundColor: theme?.palette.warningShades[600],
      borderColor: theme?.palette.warningShades[600],
      iconColor: theme?.palette.white,
    },
    outlined: {
      backgroundColor: theme?.palette.white,
      borderColor: theme?.palette.warningShades[600],
      iconColor: theme?.palette.warningShades[600],
    },
  },
  error: {
    standard: {
      backgroundColor: theme?.palette.dangerShades[50],
      borderColor: theme?.palette.dangerShades[75],
      iconColor: theme?.palette.dangerShades[600],
    },
    filled: {
      backgroundColor: theme?.palette.dangerShades[600],
      borderColor: theme?.palette.dangerShades[600],
      iconColor: theme?.palette.white,
    },
    outlined: {
      backgroundColor: theme?.palette.white,
      borderColor: theme?.palette.dangerShades[600],
      iconColor: theme?.palette.dangerShades[600],
    },
  },
  success: {
    standard: {
      backgroundColor: theme?.palette.successShades[300],
      borderColor: theme?.palette.successShades[400],
      iconColor: theme?.palette.successShades[600],
    },
    filled: {
      backgroundColor: theme?.palette.successShades[600],
      borderColor: theme?.palette.successShades[600],
      iconColor: theme?.palette.white,
    },
    outlined: {
      backgroundColor: theme?.palette.white,
      borderColor: theme?.palette.successShades[600],
      iconColor: theme?.palette.successShades[600],
    },
  },
  info: {
    standard: {
      backgroundColor: theme?.palette.neutralShades[75],
      borderColor: theme?.palette.neutralShades[150],
      iconColor: theme?.palette.neutralShades[600],
    },
    filled: {
      backgroundColor: theme?.palette.primary.main,
      borderColor: '#0A5FEA',
      iconColor: theme?.palette.white,
    },
    outlined: {
      backgroundColor: theme?.palette.white,
      borderColor: theme?.palette.neutralShades[600],
      iconColor: theme?.palette.neutralShades[600],
    },
  },
});

const getStylesBySize = (theme: Theme) => ({
  small: {
    padding: theme.spacing(1.125, 2),
    iconFontSize: '1rem',
    headingFontSize: '0.875rem',
    borderRadius: theme.shape.borderRadius,
  },
  medium: {
    padding: theme.spacing(1.75, 3),
    iconFontSize: '1.25rem',
    headingFontSize: '1rem',
    borderRadius: theme.shape.borderRadius,
  },
  large: {
    padding: theme.spacing(1.5, 0),
    iconFontSize: '1.25rem',
    headingFontSize: '1rem',
    borderRadius: 0,
    borderLeft: 'none',
    borderRight: 'none',
  },
});

export const useStyles = makeStyles<{
  severity: AlertColor;
  variant: 'standard' | 'filled' | 'outlined';
  size: AlertSize;
  hasAction: boolean;
}>()((theme: Theme, {severity, variant, size, hasAction}) => {
  const {backgroundColor, borderColor, iconColor} =
    getStylesBySeverityAndVariant(theme)[severity][variant];
  const {padding, iconFontSize, headingFontSize, borderRadius, ...rest} =
    getStylesBySize(theme)[size];

  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...(size === 'large' && {justifyContent: 'center'}),
      width: '100%',
      padding,
      borderRadius,
      borderWidth: 1,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      borderColor,
      backgroundColor,
      ...rest,
      '& .MuiAlert-icon': {
        color: iconColor,
      },
    },
    message: {
      padding: 0,
      marginLeft: theme.spacing(2.25),
    },
    heading: {
      ...theme.typography.body2,
      lineHeight: theme.spacing(size === 'small' ? 2.5 : 3),
      fontWeight: theme.typography.fontWeightMedium,
      color:
        variant === 'filled'
          ? theme.palette.white
          : theme.palette.greyShades[900],
      marginTop: 0,
      marginRight: theme.spacing(hasAction ? 2.25 : 0),
      fontSize: headingFontSize,
    },
    body: {
      ...theme.typography.body2,
      lineHeight: '1.25rem',
      color: theme.palette.greyShades[variant === 'filled' ? 50 : 600],
      marginRight: theme.spacing(hasAction ? 2.25 : 0),
    },
    icon: {
      padding: 0,
      opacity: 1,
      fontSize: 16,
      marginRight: 0,
      '.MuiSvgIcon-root': {
        fontSize: iconFontSize,
      },
    },
    action: {
      padding: 0,
      marginRight: theme.spacing(0),
      marginLeft: size === 'large' ? 0 : 'auto',
      '.MuiSvgIcon-root': {
        fontSize: iconFontSize,
      },
    },
    closeAction: {
      marginRight: theme.spacing(-1),
      marginTop: theme.spacing(-0.5),
      marginBottom: theme.spacing(-0.5),
    },
  };
});
