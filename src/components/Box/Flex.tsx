import styled from 'styled-components';
import { flexbox, gridGap } from 'styled-system';
import Box from './Box';
import { FlexProps } from './types';

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
  ${gridGap}
`;

export default Flex;
