import { CardView } from 'components/Gifticon';
import { SurveyCardWrapper } from 'components/Survey';
import dummyCards from 'components/Gifticon/CardView/dummyCards';

const CategoryBox = () => {
  return (
    <SurveyCardWrapper currentPage={1} totalPages={10}>
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
