import { BrowserRouter } from 'react-router-dom';
import { theme, GlobalStyles } from 'styles';
import { ThemeProvider } from 'styled-components';
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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </SnackbarProvider>
  ),
];
