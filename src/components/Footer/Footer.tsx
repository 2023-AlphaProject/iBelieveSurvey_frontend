import * as React from 'react';
import styled from 'styled-components';
import Flex from 'components/Box/Flex';
import { Link } from 'react-router-dom';

const FooterBox = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 3rem;
  margin-top: 1rem;
  background-color: #e77853;
  color: #fff;
`;

const FooterMaxContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const FooterTop = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  border-bottom: 1px solid #fff;
`;

const FooterAddress = styled.div`
  text-align: center;
  font-size: 13px;
  @media (max-width: 820px) {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

const FooterInfo = styled(Flex)`
  width: 13rem;
  justify-content: space-between;
`;

const FooterTerms = styled.h1`
  font-size: 18px;
  font-weight: 800;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FooterBottom = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  font-size: 10px;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterMaxContainer>
        <FooterTop>
          <a href="/">
            <img
              src="/assets/images/logo-black.svg"
              alt="IBELEVESURVEY Logo"
              style={{ width: '7rem', marginRight: '2rem' }}
            />
          </a>
          <FooterInfo>
            <Link to="/">
              <FooterTerms>이용약관</FooterTerms>
            </Link>
            <Link to="/">
              <FooterTerms>개인정보처리방침</FooterTerms>
            </Link>
          </FooterInfo>
          <FooterAddress>
            아빌립서베이 | 국민대학교 | 서울특별시 성북구 정릉로 77 <br />
            사업자번호: 327-69-00498
          </FooterAddress>
        </FooterTop>
        <FooterBottom>copyright@IBelieveSurvey</FooterBottom>
      </FooterMaxContainer>
    </FooterBox>
  );
};

export default Footer;
