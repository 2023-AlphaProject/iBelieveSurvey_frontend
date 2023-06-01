import { CardView } from 'components/Gifticon';
import { SurveyCardWrapper } from 'components/Survey';
import dummyCards from 'components/Gifticon/CardView/dummyCards';

const CategoryBox = () => {
  return (
    <SurveyCardWrapper>
      <CardView card={dummyCards} />
      <CardView card={dummyCards} />
      <CardView card={dummyCards} />
      <CardView card={dummyCards} />
      <CardView card={dummyCards} />
      <CardView card={dummyCards} />
    </SurveyCardWrapper>
  );
};

export default CategoryBox;
