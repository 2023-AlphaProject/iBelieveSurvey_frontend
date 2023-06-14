import { BrowserRouter } from 'react-router-dom';
import { muiTheme, styledTheme, GlobalStyles } from 'styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <SnackbarProvider maxSnack={3}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={styledTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </SnackbarProvider>
  ),
];
