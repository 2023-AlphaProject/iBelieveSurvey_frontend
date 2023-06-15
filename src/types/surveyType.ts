export interface surveyType {
  id: number;
  writer: number;
  title: string;
  thumbnail: string;
  category_name: string;
  is_idle: boolean;
  is_paid: boolean;
  is_ongoing: boolean;
  is_end: boolean;
  started_at: string;
  end_at: string;
  is_survey_hidden: boolean;
  participants: number;
  created_at: string;
  sinningPercentage: number;
}
