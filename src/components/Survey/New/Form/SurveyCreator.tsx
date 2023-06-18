import { SurveyCreatorComponent, SurveyCreator } from 'survey-creator-react';
import { localization, SurveyQuestionEditorDefinition } from 'survey-creator-core';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/common';
import { Flex } from 'components/Box';
import { surveyJSON } from 'constants/SURVEY_DEFAULT_JSON';
import 'survey-core/defaultV2.min.css';
import 'survey-creator-core/survey-creator-core.min.css';
import 'survey-creator-core/survey-creator-core.i18n.js';
import { useUpdateSurvey } from 'hooks/queries/surveys';

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: true,
  showSurveyTitle: false,
  showJSONEditorTab: false,
  showSidebar: false,
  questionTypes: [
    'boolean',
    'rating',
    'file',
    'image',
    'comment',
    'imagepicker',
    'text',
    'checkbox',
    'radiogroup',
    'dropdown',
    'signaturepad',
  ],
};

const Surveycreator = () => {
  const { state } = useLocation();
  const { mutate: updateSurvey } = useUpdateSurvey(state.id || sessionStorage.getItem('surveyId'));

  const creator = new SurveyCreator(creatorOptions);
  const koLocale = localization.getLocale('ko');
  localization.currentLocale = 'ko';

  koLocale.survey.duplicate = '복제';
  koLocale.ed.addNewQuestion = '문항 추가하기';
  koLocale.ed.addNewTypeQuestion = '문항 {0}';
  koLocale.ed.designer = '문항 작성';
  koLocale.ed.testSurvey = '미리보기';
  koLocale.ed.surveyPlaceHolder =
    '문항이 없습니다. 왼쪽에서 질문을 드래그하거나 아래 버튼을 클릭하세요.';
  koLocale.pe.isRequired = '필수 여부';
  koLocale.pe.visible = '표시 여부';
  koLocale.qt.comment = '서술형';

  SurveyQuestionEditorDefinition.definition = {};
  creator.toolbox.forceCompact = true;
  creator.JSON = surveyJSON;

  // // 프로퍼티 사이드바 안보이게 처리
  // const whiteList = ['name', 't'];

  // creator.onShowingProperty.add(function (_, options) {
  //   // eslint-disable-next-line no-param-reassign
  //   // options.canShow = whiteList.indexOf(options.property.name) > -1;
  // });

  // const handleTemp = () => {

  // };

  const handleSubmit = () => {
    updateSurvey({ data: creator.JSON });
  };

  return (
    <Flex flexDirection="column" gap="1rem" mt="-2rem">
      <SurveyCreatorComponent creator={creator} />
      <Flex justifyContent="flex-end" gap="1rem">
        {/* <Button type="button" variant="basic" onClick={handleTemp}>
          임시저장
        </Button> */}
        <Button onClick={handleSubmit}>다음단계</Button>
      </Flex>
    </Flex>
  );
};

export default Surveycreator;
