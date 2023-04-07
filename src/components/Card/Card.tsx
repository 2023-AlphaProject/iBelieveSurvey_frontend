import { Flex, Box, Label } from 'components/Box';
import PersonIcon from '@mui/icons-material/Person';

const Card = () => {
  return (
    <Flex width="15rem" flexDirection="column" gridGap={1}>
      <Box height="10rem" borderRadius="1.25rem" background="#fff8d6" />
      <Flex>
        <Label
          height="1.2rem"
          fontSize="0.15rem"
          color="white"
          borderRadius={10}
          background="#ffa869"
          p={1}
          mt={1}
        >
          진행중
        </Label>
        <Label fontSize="0.7rem" color="#888888" m={2} mr={4}>
          2023.04.01 ~ 2023.06.23
        </Label>
        <Flex flexDirection="column">
          <PersonIcon sx={{ color: '#888888', fontSize: 20 }} />
          <Label fontSize="0.1px" color="#888888">
            435
          </Label>
        </Flex>
      </Flex>

      <Label fontSize="1rem" fontWeight={800}>
        알파프로젝트 알파프로젝트 알파프로젝트에 대해 알아보자
      </Label>
      <Label
        width="3rem"
        height="1.1rem"
        fontSize="0.1rem"
        color="white"
        borderRadius={10}
        background="#949494"
        p={1}
      >
        인구통계
      </Label>
    </Flex>
  );
};

export default Card;
