import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Box from './Box';
import { FlexProps } from './types';

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
  gap: ${(props) => props.gap};
  cursor: ${(props) => props.cursor};
`;

export default Flex;
