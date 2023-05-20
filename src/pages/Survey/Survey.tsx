import { Link } from 'react-router-dom';
import { Sidebar, Button } from 'components/common';

const Survey = () => {
  return (
    <>
      <Link to="/survey/new">
        <Button>설문 작성</Button>
      </Link>
      <Link to="/survey/1">
        <Button>설문 상세</Button>
      </Link>
      <Sidebar
        title="카테고리 선택"
        categorys={[
          '인구통계',
          '라이프스타일',
          '기술',
          '건강과 웰빙',
          '정치 및 사회문제',
          '소비자 행동',
          '직장과 경력',
          '교육',
          '여행 및 관광',
          '엔터테인먼트',
        ]}
      />
    </>
  );
};

export default Survey;
