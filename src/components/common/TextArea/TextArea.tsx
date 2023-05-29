import { Box } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const StyledTextArea = styled(TextareaAutosize)`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Pr-Regular';
  font-size: 1rem;
  padding-bottom: 1.4rem;
`;

const Limit = styled.span`
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  color: ${(props) => props.theme.colors.gray};
  font-size: 0.9rem;
`;

interface TextAreaProps {
  value: string;
  setValue: any;
  limit: number;
  placeholder?: string;
}

const TextArea = ({ value, setValue, limit, placeholder }: TextAreaProps) => {
  return (
    <Box
      position="relative"
      p="1rem 1.5rem"
      border="3px solid"
      borderRadius="1.5rem"
      borderColor={COLORS.primary}
    >
      <StyledTextArea
        value={value}
        onChange={(e) => setValue(e.target.value.substring(0, limit))}
        minRows={10}
        placeholder={placeholder}
      />
      <Limit>
        {value.length}/{limit}자
      </Limit>
    </Box>
  );
};

TextArea.defaultProps = {
  placeholder: '',
};

export default TextArea;
