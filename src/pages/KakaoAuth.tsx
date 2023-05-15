import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* import SyncLoader from "react-spinners/SyncLoader.js";
import { getMyFridge } from "../../axios/refrigerator-service";
import LoginErrorModal from "../../components/Modal/LoginErrorModal";
import {useSetRecoilState} from "recoil";
import {IDState} from "../../atom.jsx"; */

const KakaoAuth = () => {
  const navigate = useNavigate();
  // const setUserID = useSetRecoilState(IDState);
  const [showModal, setShowModal] = useState(false);
  const confirmEvent = () => {
    setShowModal(false);
    navigate('/');
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    console.log(`${process.env.REACT_APP_KAKAO_REDIRECT_URL}?code=${code}`);
    axios
      .get(`${process.env.REACT_APP_KAKAO_REDIRECT_URL}?code=${code}`)
      .then((res) => {
        console.log(res);
        /* if (res.status === 200) {
          // 카카오계정 연결에 성공한 경우, 회원 정보 유무 확인
          getMyFridge(res.data.toString()).then((data) => {
            if (!data) {
              navigate('/init', { state: { kakaoId: res.data } });
            } else {
              setUserID({ ref: data.id, kakao: data.kakaoId, link: data.link });
              navigate(`/refrigerator/${data.kakaoId}`);
            }
          });
        } */
      })
      .catch(() => setShowModal(true));
  }, []);
  return (
    <>asd</>
    /* <Container>
      <SyncLoader color="#DD7592" margin={4} size={12} />
      <>카카오 계정을 연결하고 있어요.</>
      {showModal && <LoginErrorModal onConfirmClick={() => confirmEvent()} />}
    </Container> */
  );
};

export default KakaoAuth;
