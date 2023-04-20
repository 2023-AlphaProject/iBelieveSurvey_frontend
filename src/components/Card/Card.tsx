import { Flex, Box, Label } from 'components/Box';
import { useDate } from 'hooks/useDate';
import PersonIcon from '@mui/icons-material/Person';
import cardType from './types';

interface Props {
  card: cardType;
}

const Card = (props: Props) => {
  const { card } = props;
  return (
    <>
      <Box width="15rem" height="10rem" borderRadius="1.25rem" background="#fff8d6" />
      <Flex p={2} flexDirection="column" gap="5px">
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
            {card.status}
          </Label>
          <Label fontSize="0.7rem" color="#888888" m={2} mr={3}>
            {useDate(new Date())} ~ {useDate(new Date())}
          </Label>
          <Flex flexDirection="column">
            <PersonIcon sx={{ color: '#888888', fontSize: 20 }} />
            <Label fontSize="0.1px" color="#888888">
              {card.cnt}
            </Label>
          </Flex>
        </Flex>

        <Label width="14.5rem" fontSize="1rem" fontWeight={800}>
          {card.title}
        </Label>
        <Flex>
          {card.categorys.map((category) => (
            <Label
              key={category}
              fontSize="0.1rem"
              color="white"
              borderRadius={10}
              background="#949494"
              p={1}
              mr={1}
            >
              {category}
            </Label>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Card;
