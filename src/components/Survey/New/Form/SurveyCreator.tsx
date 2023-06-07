import { SurveyCreatorComponent, SurveyCreator } from 'survey-creator-react';
import { localization } from 'survey-creator-core';
import 'survey-core/defaultV2.min.css';
import 'survey-creator-core/survey-creator-core.min.css';
import 'survey-creator-core/survey-creator-core.i18n.js';
import { Link } from 'react-router-dom';
import { Button } from 'components/common';

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: true,
};

const Surveycreator = () => {
  const creator = new SurveyCreator(creatorOptions);
  const koLocale = localization.getLocale('ko');
  koLocale.ed.addNewQuestion = '문항 추가하기';
  koLocale.ed.addNewTypeQuestion = '문항 {0}';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  creator.saveSurveyFunc = (saveNo: number, callback: any) => {
    localStorage.setItem('survey-json', creator.text);
    callback(saveNo, true);
  };

  localization.currentLocale = 'ko';
  return (
    <div>
      <SurveyCreatorComponent creator={creator} />
      <Link to="/survey/new/gift" state={{ json: creator.text }}>
        <Button>다음단계</Button>
      </Link>
    </div>
  );
};

export default Surveycreator;
