import moment, { Moment } from 'moment';
import isNil from '../isNil';

const dateFormatterMap = {
  time: 'HH:mm:ss',
  timeRange: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateWeek: 'YYYY-wo',
  dateMonth: 'YYYY-MM',
  dateQuarter: 'YYYY-QQ',
  dateYear: 'YYYY',
  dateRange: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateTimeRange: 'YYYY-MM-DD HH:mm:ss',
};

const convertMoment = (
  value: moment.Moment,
  dateFormatter: 'number' | 'string' | false,
  valueType: string = 'dateTime',
) => {
  if (moment.isMoment(value)) {
    if (dateFormatter === 'number') {
      return value.valueOf();
    }
    return value.format(dateFormatterMap[valueType] || 'YYYY-MM-DD HH:mm:ss');
  }
  return value;
};

/**
 * 根据不同的格式转化 moment
 * @param value
 * @param dateFormatter
 * @param valueType
 */
const conversionMoment = (
  value: moment.Moment | moment.Moment[],
  dateFormatter: 'number' | 'string' | false,
  valueType: string = 'dateTime',
) => {
  if (!dateFormatter) {
    return value;
  }
  if (!Array.isArray(value)) {
    return convertMoment(value, dateFormatter, valueType);
  }
  return value.map((item) => convertMoment(item, dateFormatter, valueType));
};

/**
 * 这里主要是来转化一下数据
 * 将 moment 转化为 string
 * 将 all 默认删除
 * @param value
 * @param dateFormatter
 * @param proColumnsMap
 */
const conversionSubmitValue = <T = any>(
  value: T,
  dateFormatter: 'number' | 'string' | false,
  valueTypeMap: {
    [key: string]: string;
  },
): T => {
  const tmpValue = {} as T;

  Object.keys(value).forEach((key) => {
    const valueType = valueTypeMap[key] || 'text';
    const itemValue = value[key];
    if (isNil(itemValue)) {
      return;
    }
    // 都没命中，原样返回
    tmpValue[key] = conversionMoment(itemValue, dateFormatter, valueType);
  });
  return tmpValue;
};

export default conversionSubmitValue;
