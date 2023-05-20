import { Flex, Box, Label } from 'components/Box';
import { useDate } from 'hooks/useDate';
import { COLORS } from 'constants/COLOR';
import PersonIcon from '@mui/icons-material/Person';
import cardType from './types';

interface Props {
  card: cardType;
}

const Card = (props: Props) => {
  const { card } = props;
  return (
    <Flex flexDirection="column" pb={3}>
      <Box width="14rem" height="10rem" borderRadius="1.25rem" background={COLORS.primaryVariant} />
      <Flex p={2} flexDirection="column" gap="8px">
        <Flex>
          <Label
            height="1.2rem"
            fontSize="0.15rem"
            color="white"
            borderRadius={10}
            background="#ffa869"
            p={1}
            mt={1}
            fontFamily="Pr-Bold"
          >
            {card.status}
          </Label>
          <Label fontSize="0.7rem" color="#888888" fontFamily="Pr-Regular" m={2} mr={3}>
            {useDate(new Date())} ~ {useDate(new Date())}
          </Label>
          <Flex flexDirection="column">
            <PersonIcon sx={{ color: '#888888', fontSize: 20 }} />
            <Label fontSize="0.1px" color="#888888">
              {card.cnt}
            </Label>
          </Flex>
        </Flex>

        <Label width="13.6rem" fontSize="0.9rem" fontFamily="Pr-Bold">
          {card.title}
        </Label>
        <Flex>
          {card.categorys.map((category) => (
            <Label
              key={category}
              fontSize="0.1rem"
              fontFamily="Pr-Regular"
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
    </Flex>
  );
};

export default Card;
