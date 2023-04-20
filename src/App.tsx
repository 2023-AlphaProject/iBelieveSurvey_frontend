import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import { Home, Test, NotFound } from 'pages';
import { Modal } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import 'styles/fonts.css';

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <RecoilRoot>
        <Modal />
        <GlobalStyles />
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </SnackbarProvider>
  );
};

export default App;
