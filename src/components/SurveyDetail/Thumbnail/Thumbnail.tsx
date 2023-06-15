import styled from 'styled-components';

interface Props {
  isEnd: boolean;
  endAt: string;
}

const Box = styled.div`
  width: 24rem;
  height: 24rem;
  position: relative;
`;

const IconBox = styled.div`
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: -1rem;
  right: 0.75rem;
`;

const Icon = styled.img`
  width: 4.5rem;
  height: 5.5rem;
  position: absolute;
  top: 0;
  box-shadow: 4px 0px 3px -2px rgba(0, 0, 0, 0.2);
`;

const Label = styled.div`
  color: white;
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  font-family: 'Pr-Bold';
`;

const Thumbnail = (props: Props) => {
  const { isEnd, endAt } = props;
  const date = new Date(endAt);
  const dDay = date.getDate() - new Date().getDate();

  return (
    <Box>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/starbucks.jpg`}
        alt="GIFTICON"
        style={{
          width: '24rem',
          height: '24rem',
          borderRadius: '1.2rem',
        }}
      />
      <IconBox>
        <Icon src={`${process.env.PUBLIC_URL}/assets/images/d-day-icon.svg`} alt="GIFTICON" />
        <Label> {isEnd === true ? '종료' : `D-${dDay}`}</Label>
      </IconBox>
    </Box>
  );
};

export default Thumbnail;
