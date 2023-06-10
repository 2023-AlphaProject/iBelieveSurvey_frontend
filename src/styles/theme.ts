import { createTheme } from '@mui/material';
import { COLORS } from 'constants/COLOR';
import { DefaultTheme } from 'styled-components';

export const styledTheme: DefaultTheme = {
  colors: COLORS,
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
      light: COLORS.primaryVariant,
    },
    secondary: {
      main: COLORS.secondary,
      light: COLORS.secondaryVariant,
    },
  },
  typography: {
    fontFamily: 'Pr-Regular',
  },
});
