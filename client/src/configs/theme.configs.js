import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const themeModes = {
  dark: 'dark',
  light: 'light',
};

export const shades = {
  primary: {
    100: '#cccccc',
    200: '#999999',
    300: '#666666',
    400: '#333333',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  secondary: {
    100: '#f7ccd2',
    200: '#ef99a4',
    300: '#e66677',
    400: '#de3349',
    500: '#d6001c',
    600: '#ab0016',
    700: '#800011',
    800: '#56000b',
    900: '#2b0006',
  },
  neutral: {
    100: '#f5f5f5',
    200: '#ecebeb',
    300: '#e2e1e1',
    400: '#d9d7d7',
    500: '#cfcdcd',
    600: '#a6a4a4',
    700: '#7c7b7b',
    800: '#535252',
    900: '#292929',
  },
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette =
      mode === themeModes.dark
        ? {
            primary: {
              light: '#69696a',
              main: shades.neutral[700],
              dark: '#1e1e1f',
            },
            secondary: {
              light: '#fff5f8',
              main: shades.neutral[700],
              dark: shades.neutral[800],
            },
            background: {
              default: '#000000',
              paper: '#131313',
            },
          }
        : {
            primary: {
              main: shades.neutral[900],
            },
            secondary: {
              main: shades.neutral[600],
            },
            background: {
              default: colors.grey['100'],
            },
          };

    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;
