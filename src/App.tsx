import { muiTheme, styledTheme, GlobalStyles } from 'styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import {
  Home,
  KakaoAuth,
  SignUp,
  MyPage,
  Survey,
  SurveySearch,
  SurveyDetail,
  SurveyResult,
  SurveyGiftResult,
  SurveySubmit,
  NewSurvey,
  NewSurveyForm,
  NewSurveyPayment,
  NewSurveyGiftItem,
  NewSurveyGifts,
  NotFound,
  Tos,
  Privacy,
} from 'pages';
import { LoadingComponent, Modal } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import 'styles/fonts.css';
import { queryClient } from 'config/quertClients';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingComponent />}>
        <SnackbarProvider maxSnack={3}>
          <MuiThemeProvider theme={muiTheme}>
            <StyledThemeProvider theme={styledTheme}>
              <RecoilRoot>
                <Modal />
                <GlobalStyles />
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<Layout />}>
                      <Route path="/user/kakao/callback" element={<KakaoAuth />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/mypage" element={<MyPage />} />
                      <Route path="/tos" element={<Tos />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/survey" element={<Survey />} />
                      <Route path="/survey/search/:searchParams" element={<SurveySearch />} />
                      <Route path="/survey/:id" element={<SurveyDetail />} />
                      <Route path="/survey/:id/result" element={<SurveyResult />} />
                      <Route path="/survey/:id/gift-result" element={<SurveyGiftResult />} />
                      <Route path="/survey/:id/submit" element={<SurveySubmit />} />
                      <Route path="/survey/new" element={<NewSurvey />} />
                      <Route path="/survey/new/form" element={<NewSurveyForm />} />
                      <Route path="/survey/new/payment" element={<NewSurveyPayment />} />
                      <Route path="/survey/new/gift" element={<NewSurveyGifts />} />
                      <Route path="/survey/new/gift/:id" element={<NewSurveyGiftItem />} />
                      <Route path="*" element={<NotFound />} />
                    </Route>
                  </Routes>
                </Router>
              </RecoilRoot>
            </StyledThemeProvider>
          </MuiThemeProvider>
        </SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
