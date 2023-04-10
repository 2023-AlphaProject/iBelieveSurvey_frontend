import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import { Home, Test } from 'pages';
import Modal from 'components/common/Modal/Modal';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Modal />
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
