import { theme, GlobalStyles } from 'styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import {
  Home,
  MyPage,
  Survey,
  SurveyDetail,
  SurveyResult,
  SurveyGiftResult,
  SurveySubmit,
  NewSurvey,
  NewSurveyForm,
  NewSurveyGift,
  NewSurveyGifticons,
  Test,
  NotFound,
  Tos,
  Privacy,
} from 'pages';
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
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/survey" element={<Survey />} />
                {/* <Route path="/survey/search?=:id" element={<Home />} /> */}
                <Route path="/survey/:id" element={<SurveyDetail />} />
                <Route path="/survey/:id/result" element={<SurveyResult />} />
                <Route path="/survey/:id/gift-result" element={<SurveyGiftResult />} />
                <Route path="/survey/:id/submit" element={<SurveySubmit />} />
                <Route path="/survey/new" element={<NewSurvey />} />
                <Route path="/survey/new/form" element={<NewSurveyForm />} />
                <Route path="/survey/new/gift" element={<NewSurveyGift />} />
                <Route path="/survey/new/gift/gifticons" element={<NewSurveyGifticons />} />
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
