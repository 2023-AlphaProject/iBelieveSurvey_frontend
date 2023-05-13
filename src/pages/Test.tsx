import { useCallback } from 'react';
import { Sidebar, Button, Input } from 'components/common';
import { useInput, useSnackBar } from 'hooks';
import CardView from 'components/Gifticon/CardView/CardView';
import dummyCards from 'components/Gifticon/CardView/dummyCards';

const Test = () => {
  const { handleSnackBar } = useSnackBar();

  const [testValue, onChangeTestValue] = useInput('');

  return <CardView card={dummyCards} />;
};

export default Test;
