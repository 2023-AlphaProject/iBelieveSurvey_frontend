import React from 'react';
import { Story } from '@storybook/react';
import Tooltip from './Tooltip';
import TooltipType from './types';

export default {
  title: 'Components/Common/Tooltip',
  component: Tooltip,
};

const Template: Story<TooltipType> = (props) => {
  const { text, margin } = props;
  return <Tooltip text={text} margin={margin} />;
};

export const Default = Template.bind({});

Default.args = {
  text: 'text를 props로 전달하세요',
  margin: '0',
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'margin이 5rem인 Tooltip component',
  margin: '5rem',
};
