import { CardView } from 'components/Gifticon';
import { SurveyCardWrapper } from 'components/Survey';
import { useState } from 'react';
import useTemplateListQuery from 'hooks/queries/templates/useTemplateListQuery';
import { giftType } from 'types';

const CategoryBox = () => {
  const [page, setPage] = useState(1);
  const { data } = useTemplateListQuery(page);

  return (
    <SurveyCardWrapper currentPage={page} totalPages={data?.data?.total_pages} setPage={setPage}>
      {data?.data.results.map((gift: giftType) => (
        <CardView key={`gift_${gift.id}`} gift={gift} />
      ))}
    </SurveyCardWrapper>
  );
};

export default CategoryBox;
