import type {
  SimplePaletteColorOptions,
  ThemeOptions,
  Theme,
} from '@mui/material';
import {createTheme, responsiveFontSizes} from '@mui/material';
import type {CSSObject} from 'tss-react';

export const MAX_PAGE_CONTENT_WIDTH = 1020;
export const MAX_ARTICLE_CONTENT_WIDTH = 760;

type PrimaryShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type BlueGreyShades = {
  25: string;
  50: string;
  75: string;
  100: string;
  200: string;
  400: string;
  500: string;
  600: string;
};

type GreyShades = {
  25: string;
  50: string;
  75: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  900: string;
};

type SuccessShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  900: string;
};

type WarningShades = {
  100: string;
  200: string;
  300: string;
  600: string;
  700: string;
  900: string;
};

type DangerShades = {
  50: string;
  75: string;
  100: string;
  200: string;
  300: string;
  500: string;
  600: string;
  700: string;
  900: string;
};

type NeutralShades = {
  50: string;
  75: string;
  100: string;
  150: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
};

type BackgroundWithAlpha = (
  alpha: number,
) => React.CSSProperties['backgroundColor'];

type BackgroundsWithAlpha = {
  default: BackgroundWithAlpha;
};

interface ThemeExtends {
  containers: {
    main: {
      marginLeft: React.CSSProperties['margin'];
      marginRight: React.CSSProperties['margin'];
      paddingLeft: React.CSSProperties['padding'];
      paddingRight: React.CSSProperties['padding'];
      width: React.CSSProperties['width'];
      maxWidth: React.CSSProperties['width'];
      backgroundColor: React.CSSProperties['backgroundColor'];
    };
    box: {
      marginTop: React.CSSProperties['margin'];
      marginBottom: React.CSSProperties['margin'];
      paddingTop: React.CSSProperties['padding'];
      paddingLeft: React.CSSProperties['padding'];
      paddingRight: React.CSSProperties['padding'];
      borderRadius: React.CSSProperties['borderRadius'];
    };
    navigationBox: {
      backgroundColor: React.CSSProperties['backgroundColor'];
      border: React.CSSProperties['border'];
      borderRadius: React.CSSProperties['borderRadius'];
    };
    card: {
      backgroundColor: React.CSSProperties['backgroundColor'];
      borderRadius: React.CSSProperties['borderRadius'];
      padding: React.CSSProperties['padding'];
      boxShadow: React.CSSProperties['boxShadow'];
      boxSizing: React.CSSProperties['boxSizing'];
    };
    panel: {
      backgroundColor: React.CSSProperties['backgroundColor'];
      borderRadius: React.CSSProperties['borderRadius'];
      padding: React.CSSProperties['padding'];
      boxShadow: React.CSSProperties['boxShadow'];
      boxSizing: React.CSSProperties['boxSizing'];
    };
    modalContent: {
      minWidth: React.CSSProperties['width'];
      width: React.CSSProperties['width'];
    };
  };
  MuiDataGrid: {
    root: {
      fontSize: React.CSSProperties['fontSize'];
    };
    colCellTitle: {
      fontWeight: React.CSSProperties['fontWeight'];
    };
  };
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypographyStyle extends CSSObject {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-shadow
  interface Theme extends ThemeExtends {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-shadow
  interface ThemeOptions extends ThemeExtends {}
}

interface PaletteExtends {
  link: SimplePaletteColorOptions;
  iceBlue: SimplePaletteColorOptions;
  yellow: SimplePaletteColorOptions;
  cloudyBlue: SimplePaletteColorOptions;
  purple: SimplePaletteColorOptions;
  nightBlue: SimplePaletteColorOptions;
  white: string;
  hero: React.CSSProperties['background'];
  heroText: React.CSSProperties['background'];
  profileImageGradient: React.CSSProperties['background'];
  mobileNavGradient: React.CSSProperties['background'];
  pressedPaper: React.CSSProperties['backgroundColor'];
  primaryShades: PrimaryShades;
  blueGreyShades: BlueGreyShades;
  greyShades: GreyShades;
  successShades: SuccessShades;
  warningShades: WarningShades;
  dangerShades: DangerShades;
  neutralShades: NeutralShades;
  mode: 'light' | 'dark';
  backgroundWithAlpha: BackgroundsWithAlpha;
}

// Add custom colors to palette properties
declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends PaletteExtends {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends PaletteExtends {}
}

const THEME_SHAPE_BORDER_RADIUS = 8;

// more info on dark mode: https://mui.com/material-ui/customization/dark-mode/
const buildThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeightMedium: 600,
    h1: {
      fontWeight: 700,
      fontSize: '4.25rem',
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
  containers: {
    main: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 8 * 2,
      paddingRight: 8 * 2,
      width: '100%',
      backgroundColor: 'inherit',
      maxWidth: 1052,
    },
    box: {
      marginTop: 16,
      marginBottom: 16,
      paddingTop: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: THEME_SHAPE_BORDER_RADIUS * 0.75,
    },
    navigationBox: {
      backgroundColor: mode === 'dark' ? '#121212' : '#fff',
      border: '1px solid #e2e4ec',
      borderRadius: THEME_SHAPE_BORDER_RADIUS,
    },
    card: {
      backgroundColor: mode === 'dark' ? '#121212' : '#fff',
      borderRadius: THEME_SHAPE_BORDER_RADIUS * 4,
      padding: 16,
      boxShadow:
        '0 1px 2px rgba(0, 0, 0, 0.1), 0 64px 80px rgba(150, 143, 186, 0.16)',
      boxSizing: 'border-box',
    },
    panel: {
      backgroundColor: mode === 'dark' ? '#121212' : '#fff',
      borderRadius: THEME_SHAPE_BORDER_RADIUS,
      padding: 8,
      boxShadow: 'inset 0 0 0 1px #E2E4EC',
      boxSizing: 'border-box',
    },
    modalContent: {
      minWidth: 480,
      width: '100%',
    },
  },
  palette: {
    mode,
    error: {main: '#B72015'},
    link: {main: '#0D67FE'},
    iceBlue: {main: '#E6F6FF', dark: '#ceedff'},
    yellow: {main: '#ffefb7'},
    cloudyBlue: {main: 'rgba(190, 195, 220, 0.1)'},
    purple: {main: '#797ff2'},
    nightBlue: {main: '#061543'},
    primary: {
      light: '#D6E5FF',
      main: '#0D67FE',
      dark: '#0546B7',
    },
    secondary: {
      light: '#7bffff',
      main: '#00C9FF',
      dark: '#00b6cc',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#F9FAFF',
    },
    backgroundWithAlpha: {
      default: (alpha) =>
        mode === 'dark'
          ? `rgba(12,12,12,${alpha})`
          : `rgba(255,255,255,${alpha})`,
    },
    success: {
      light: '#E2F3EC',
      main: '#36AB61',
      dark: '#258F56',
    },
    white: '#ffffff',
    hero: 'linear-gradient(75deg, #0D3076, #082055, #004c69)',
    heroText: 'linear-gradient(30deg, #9F1FED, #645FF2, #38BDD1)',
    profileImageGradient:
      'linear-gradient(45deg, #BD47F7 0%, #5D59F8 52.08%, #38BDD1 100%)',
    mobileNavGradient:
      'linear-gradient(272deg, #F9FAFF 25%, rgba(249, 250, 255, 0) 100%)',
    pressedPaper: '#F3F4FB',
    primaryShades: {
      100: '#F0F5FF',
      200: '#D6E5FF',
      300: '#A9C8FF',
      400: '#80AEFE',
      500: '#0D67FE',
      600: '#0655DD',
      700: '#0546B7',
      800: '#043893',
      900: '#032E78',
    },
    blueGreyShades: {
      25: '#F9FAFF',
      50: '#F1F2F9',
      75: '#E4E5EA',
      100: '#D8DAE6',
      200: '#B7B7C3',
      400: '#6C6C7E',
      500: '#464652',
      600: '#35353D',
    },
    greyShades: {
      25: '#F9FAFF',
      50: '#F1F1F3',
      75: '#DBDCE1',
      100: '#CDCED5',
      200: '#BABAC4',
      300: '#9191A1',
      400: '#5E5E6E',
      500: '#94949E',
      600: '#62626A',
      700: '#2F2F37',
      900: '#000000',
    },
    successShades: {
      100: '#EDF7F3',
      200: '#E2F3EC',
      300: '#ECFEF6',
      400: '#D9EAE3',
      500: '#36AB61',
      600: '#0DA767',
      700: '#258F56',
      900: '#0E5F43',
    },
    warningShades: {
      100: '#FEF9E1',
      200: '#FEF5E7',
      300: '#EAE2D5',
      600: '#D18411',
      700: '#AE6E0E',
      900: '#663B07',
    },
    dangerShades: {
      50: '#FEF1F0',
      75: '#EADEDD',
      100: '#FAEDEB',
      200: '#F8CAC3',
      300: '#E6C6C4',
      500: '#EB3223',
      600: '#E72113',
      700: '#BD1B0F',
      900: '#591F19',
    },
    neutralShades: {
      50: '#F9FAFF',
      75: '#F0F0F1',
      100: '#F2F2F2',
      150: '#DCDDE1',
      200: '#DDDDDF',
      300: '#C8C8CB',
      400: '#AFAFB6',
      500: '#7A7A85',
      600: '#62626A',
      700: '#4A4A4F',
      800: '#323234',
    },
  },
  shape: {
    borderRadius: THEME_SHAPE_BORDER_RADIUS,
  },
  MuiDataGrid: {
    root: {
      fontSize: '0.8rem',
    },
    colCellTitle: {
      fontWeight: 'bold',
    },
  },
});

// global components styles overrides
const addThemeOverrides = (theme: Theme) => {
  /* eslint-disable no-param-reassign */
  theme.components = {
    MuiTabs: {
      defaultProps: {
        textColor: 'primary',
        indicatorColor: 'primary',
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          margin: 8,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
        },
        h5: {
          fontWeight: 700,
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
          },
        },
        h6: {
          [theme.breakpoints.up('xs')]: {
            fontSize: '1.125rem',
            lineHeight: 1.5,
          },
        },
        body1: {
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
          },
        },
        body2: {
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.825rem',
          },
        },
        subtitle2: {
          lineHeight: 1.45,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: theme.typography.fontWeightBold,
          fontSize: theme.typography.body1.fontSize,
          wordBreak: 'normal',
        },
        outlinedInherit: {
          borderColor: theme.palette.neutralShades[300],
          color: theme.palette.greyShades[900],
        },
        sizeLarge: {
          padding: theme.spacing(0.625, 2),
          minHeight: 40,
        },
        sizeSmall: {
          fontSize: theme.typography.body2.fontSize,
          paddingBottom: theme.spacing(0.85),
          paddingTop: theme.spacing(0.85),
          minHeight: 40,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.fontSize,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.fontSize,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1.5),
          },
        },
        paperScrollPaper: {
          [theme.breakpoints.down('md')]: {
            width: `calc(100% - ${theme.spacing(3)})`,
          },
        },
        paperFullWidth: {
          [theme.breakpoints.down('md')]: {
            width: `calc(100% - ${theme.spacing(3)})`,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          background: theme.palette.dangerShades[100],
          color: theme.palette.dangerShades[900],
          border: '1px solid rgba(0 0 0 / 8%)',
          '& .MuiAlert-icon': {
            color: theme.palette.dangerShades[700],
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: theme.typography.body1.fontSize,
          marginBottom: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          fontSize: theme.typography.body1.fontSize,
          marginRight: theme.spacing(4),
          [theme.breakpoints.up('xs')]: {
            minWidth: 'auto',
          },
          [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.body2.fontSize,
          },
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          color: theme.palette.common.black,
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          wordBreak: 'normal',
        },
      },
    },
  };

  if (theme.palette.mode === 'light' && theme.components) {
    theme.components.MuiCard = {
      styleOverrides: {
        root: {
          '&.MuiPaper-elevation0': {
            border: 'solid 1px #DDDDDF',
          },
        },
      },
    };
  }

  if (theme.palette.mode === 'dark' && theme.components) {
    theme.components.MuiPaper = {
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.neutralShades[700]}`,
        },
      },
    };
  }

  /* eslint-disable @typescript-eslint/ban-ts-comment */

  // @ts-ignore
  theme.containers.main[theme.breakpoints.down('md')] = {
    marginTop: theme.spacing(2),
  };

  // @ts-ignore
  theme.containers.modalContent[theme.breakpoints.down('md')] = {
    minWidth: 0,
  };

  /* eslint-enable no-param-reassign, @typescript-eslint/ban-ts-comment */

  return responsiveFontSizes(theme);
};

export const lightTheme = addThemeOverrides(
  createTheme(buildThemeOptions('light')),
);
export const darkTheme = addThemeOverrides(
  createTheme(buildThemeOptions('dark')),
);

export default lightTheme;
