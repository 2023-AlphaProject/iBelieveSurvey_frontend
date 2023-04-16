import styled from 'styled-components';

const ErrorImg = styled.img`
  width: 100%;
`;

const NotFound = () => {
  return (
    <div className="mainbox">
      <ErrorImg src="/assets/images/Error-404.png" alt="404 Not Found Error Imgae" />
    </div>
  );
};

export default NotFound;
