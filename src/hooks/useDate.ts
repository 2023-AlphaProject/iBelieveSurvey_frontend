import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

export const useDate = (value: Date) => {
  const date = moment(value);
  return date.format('YYYY. MM. DD.');
};
