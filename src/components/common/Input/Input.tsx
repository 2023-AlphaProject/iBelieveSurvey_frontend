import { Box } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import { onChangeType } from 'hooks/useInput';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  font-family: 'Pr-Regular';
  font-size: 1rem;
  height: 3rem;
  border: none;
`;

const Limit = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translate(0%, -50%);
  color: ${(props) => props.theme.colors.gray};
  font-size: 0.9rem;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: onChangeType;
  limit: number;
}

const Input = ({ value, onChange, limit, ...rest }: InputProps) => {
  return (
    <Box
      position="relative"
      p="0 1.5rem"
      border="3px solid"
      borderRadius="2rem"
      borderColor={COLORS.primary}
    >
      <StyledInput value={value} onChange={onChange} {...rest} />
      <Limit>
        {value.length}/{limit}자
      </Limit>
    </Box>
  );
};

export default Input;
