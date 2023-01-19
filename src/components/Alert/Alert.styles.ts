import {AlertColor} from '@mui/material/Alert';
import {Theme} from '@mui/material/styles';
import {AlertSize} from 'components/Alert/Alert';
import {makeStyles} from 'styles';

const getStylesBySeverity = (theme?: Theme) => ({
  warning: {
    backgroundColor: theme?.palette.warningShades[200],
    borderColor: theme?.palette.warningShades[300],
    iconColor: theme?.palette.warningShades[600],
  },
  error: {
    backgroundColor: theme?.palette.dangerShades[50],
    borderColor: theme?.palette.dangerShades[75],
    iconColor: theme?.palette.dangerShades[600],
  },
  success: {
    backgroundColor: theme?.palette.successShades[300],
    borderColor: theme?.palette.successShades[400],
    iconColor: theme?.palette.successShades[600],
  },
  info: {
    backgroundColor: theme?.palette.neutralShades[75],
    borderColor: theme?.palette.neutralShades[150],
    iconColor: theme?.palette.neutralShades[600],
  },
});

const getStylesBySize = (theme: Theme) => ({
  small: {
    padding: theme.spacing(1.125, 2),
    iconFontSize: '1rem',
    titleFontSize: '0.875rem',
  },
  medium: {
    padding: theme.spacing(1.75, 3),
    iconFontSize: '1.25rem',
    titleFontSize: '1rem',
  },
});

export const useStyles = makeStyles<{
  severity: AlertColor;
  size: AlertSize;
  hasAction: boolean;
}>()((theme: Theme, {severity, size, hasAction}) => {
  const {backgroundColor, borderColor, iconColor} =
    getStylesBySeverity(theme)[severity];
  const {padding, iconFontSize, titleFontSize} = getStylesBySize(theme)[size];

  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      padding,
      borderRadius: theme.shape.borderRadius,
      borderWidth: 1,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      borderColor,
      backgroundColor,
      '& .MuiAlert-icon': {
        color: iconColor,
      },
    },
    message: {
      padding: 0,
      marginLeft: theme.spacing(2.25),
    },
    title: {
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.common.black,
      marginTop: 0,
      marginRight: theme.spacing(hasAction ? 2.25 : 0),
      fontSize: titleFontSize,
    },
    subtitle: {
      ...theme.typography.body2,
      lineHeight: '1.25rem',
      color: theme.palette.greyShades[600],
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
