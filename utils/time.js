import dayjs from 'dayjs';

export const calculateDiff = (timeInMs) => {
  const timestampDayjs = dayjs(timeInMs);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
};

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
  // % 60 -> to show 90 seconds 1Min 30 seconds
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return padWithZeros(seconds, 2);
};

const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return padWithZeros(minutes, 2);
};

const getRemainingHours = (nowDayjs, timestampDayjs) => {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  return padWithZeros(hours, 2);
};

const getRemainingDays = (nowDayjs, timestampDayjs) => {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  return days.toString();
};

const padWithZeros = (number, length) => {
  const numberString = number.toString();
  if (numberString.length >= length) return numberString;
  return '0'.repeat(length - numberString.length) + numberString;
};
