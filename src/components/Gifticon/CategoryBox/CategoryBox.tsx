import { CardView } from 'components/Gifticon';
import { SurveyCardWrapper } from 'components/Survey';
import dummyCards from 'components/Gifticon/CardView/dummyCards';
import { useState } from 'react';

const CategoryBox = () => {
  const [page, setPage] = useState(1);

  return (
    <SurveyCardWrapper currentPage={page} totalPages={10} setPage={setPage}>
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
