import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import TooltipType from './types';

const defaultProps = {
  text: 'text를 props로 전달하세요.',
  margin: '0',
};

const Icon = styled(HelpIcon)<TooltipType>`
  font-size: 1.6rem !important;
  margin: ${(props) => props.margin};
  cursor: pointer;
`;

const CustomTooltip = (props: TooltipType) => {
  const { text, margin } = props;
  return (
    <Tooltip title={text} arrow placement="top-start">
      <Icon margin={margin} />
    </Tooltip>
  );
};
CustomTooltip.defaultProps = defaultProps;
export default CustomTooltip;
