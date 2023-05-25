export const useLoginWithKakao = () => {
  const REDIRECT_URL = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  const KakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return { KakaoLogin };
};
