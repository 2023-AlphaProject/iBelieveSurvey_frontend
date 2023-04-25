import { theme, GlobalStyles } from 'styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import { Home, Test, NotFound, Tos, Privacy } from 'pages';
import { Modal } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components';
import 'styles/fonts.css';

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Modal />
          <GlobalStyles />
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/tos" element={<Tos />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
