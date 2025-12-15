"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDHIS2PeriodData = exports.sortPeriods = exports.getLastNPeriods = exports.convertServerToClientPeriod = exports.comparePeriods = exports.PERIOD_TYPES = void 0;
var _dateFns = require("date-fns");
const PERIOD_TYPES = exports.PERIOD_TYPES = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR',
  ANY: 'ANY'
};
// This page seems ai-generated, but it's actually a result of hard manual labour.

/**
 * Converts a date range to an array of DHIS2 Period objects.
 * @param start - The start date string
 * @param end - The end date string
 * @param periodType - The period type ('week' or 'month')
 * @returns An array of Period objects
 */
const toDHIS2PeriodData = (start, end, periodType) => {
  if (periodType === 'week') return getWeeks(start, end);
  if (periodType === 'month') return getMonths(start, end);
  console.error('Invalid period type:', periodType);
  return [];
};

/**
 * Generates an array of Period objects for each week in the given range.
 * @param start - The start date in ISO week format (e.g., "2024-W01")
 * @param end - The end date in ISO week format (e.g., "2024-W52")
 * @returns An array of Period objects for each week in the range
 */
exports.toDHIS2PeriodData = toDHIS2PeriodData;
const getWeeks = (start, end) => {
  try {
    // Parse ISO week format (e.g., "2024-W01")
    const startDate = (0, _dateFns.parse)(start, 'RRRR-\'W\'II', new Date());
    const endDate = (0, _dateFns.parse)(end, 'RRRR-\'W\'II', new Date());
    if (!(0, _dateFns.isValid)(startDate) || !(0, _dateFns.isValid)(endDate)) {
      console.error('Invalid date format provided for weeks:', {
        start,
        end
      });
      return [];
    }
    const yearDifference = (0, _dateFns.getISOWeekYear)(endDate) - (0, _dateFns.getISOWeekYear)(startDate);
    if (yearDifference > 100) {
      return [];
    }
    const weeks = [];
    let currentDate = (0, _dateFns.startOfISOWeek)(startDate);
    const endWeekStart = (0, _dateFns.startOfISOWeek)(endDate);
    while (!(0, _dateFns.isAfter)(currentDate, endWeekStart)) {
      const isoYear = (0, _dateFns.getISOWeekYear)(currentDate);
      const weekNumber = (0, _dateFns.getISOWeek)(currentDate);
      const weekString = `${isoYear}W${String(weekNumber)}`;
      const weekStart = (0, _dateFns.startOfISOWeek)(currentDate);
      const weekEnd = (0, _dateFns.endOfISOWeek)(currentDate);
      weeks.push({
        endDate: new Date((0, _dateFns.format)(weekEnd, 'yyyy-MM-dd')),
        startDate: new Date((0, _dateFns.format)(weekStart, 'yyyy-MM-dd')),
        id: weekString
      });
      currentDate = (0, _dateFns.addWeeks)(currentDate, 1);
    }
    return weeks;
  } catch (error) {
    console.error('Error parsing week dates:', error);
    return [];
  }
};

/**
 * Generates an array of Period objects for each month in the given range.
 * @param start - The start date in month format (e.g., "2024-01")
 * @param end - The end date in month format (e.g., "2024-12")
 * @returns An array of Period objects for each month in the range
 */
const getMonths = (start, end) => {
  try {
    // Parse month format (e.g., "2024-01")
    const startDate = (0, _dateFns.parse)(start, 'yyyy-MM', new Date());
    const endDate = (0, _dateFns.parse)(end, 'yyyy-MM', new Date());

    // Check if parsed dates are valid
    if (!(0, _dateFns.isValid)(startDate) || !(0, _dateFns.isValid)(endDate)) {
      console.error('Invalid date format provided for months:', {
        start,
        end
      });
      return [];
    }

    // Safety check for unreasonable date ranges
    const yearDifference = endDate.getFullYear() - startDate.getFullYear();
    if (yearDifference > 100) {
      return [];
    }
    const months = [];
    let currentDate = startDate;
    while ((0, _dateFns.isAfter)(endDate, currentDate) || (0, _dateFns.isSameYear)(currentDate, endDate) && (0, _dateFns.isSameMonth)(currentDate, endDate)) {
      const monthId = (0, _dateFns.format)(currentDate, 'yyyyMM');
      const monthStart = (0, _dateFns.startOfMonth)(currentDate);
      const monthEnd = (0, _dateFns.endOfMonth)(currentDate);
      months.push({
        id: monthId,
        endDate: new Date((0, _dateFns.format)(monthEnd, 'yyyy-MM-dd')),
        startDate: new Date((0, _dateFns.format)(monthStart, 'yyyy-MM-dd'))
      });
      currentDate = (0, _dateFns.addMonths)(currentDate, 1);
    }
    return months;
  } catch (error) {
    console.error('Error parsing month dates:', error);
    return [];
  }
};

/**
 * Converts a basic ISO format period to an extended ISO format.
 * @param periodId - The period ID in basic format (e.g., "202001" for months, "2024W01" for weeks)
 * @param periodType - The type of period ('month' or 'week')
 * @returns The period ID in extended format (e.g., "2020-01" for months, "2024-W01" for weeks)
 * @example
 * convertServerToClientPeriod('202001', PERIOD_TYPES.MONTH) // returns '2020-01'
 * convertServerToClientPeriod('2024W01', PERIOD_TYPES.WEEK) // returns '2024-W01'
 */
const convertServerToClientPeriod = (periodId, periodType) => {
  try {
    if (periodType.toUpperCase() === PERIOD_TYPES.MONTH) {
      const parsedMonth = (0, _dateFns.parse)(periodId, 'yyyyMM', new Date());
      if (!(0, _dateFns.isValid)(parsedMonth)) {
        console.error('Invalid month period id provided:', periodId);
        return periodId;
      }
      return (0, _dateFns.format)(parsedMonth, 'yyyy-MM');
    }
    if (periodType.toUpperCase() === PERIOD_TYPES.WEEK) {
      const parsedWeek = (0, _dateFns.parse)(periodId, 'RRRR\'W\'II', new Date());
      if (!(0, _dateFns.isValid)(parsedWeek)) {
        console.error('Invalid week period id provided:', periodId);
        return periodId;
      }
      return (0, _dateFns.format)(parsedWeek, 'RRRR-\'W\'II');
    }
    console.error('Unsupported period type provided:', periodType);
    return periodId;
  } catch (error) {
    console.error('Failed to convert period id to extended ISO8601 format:', error);
    return periodId;
  }
};

/**
 * Compares two period strings for sorting.
 * @param a - The first period string to compare
 * @param b - The second period string to compare
 * @param periodType - The type of period ('month' or 'week')
 * @returns Negative if a < b, positive if a > b, 0 if equal
 */
exports.convertServerToClientPeriod = convertServerToClientPeriod;
const comparePeriods = (a, b, periodType) => {
  if (periodType.toUpperCase() === PERIOD_TYPES.MONTH) {
    const dateA = (0, _dateFns.parse)(a, 'yyyyMM', new Date());
    const dateB = (0, _dateFns.parse)(b, 'yyyyMM', new Date());
    if (!(0, _dateFns.isValid)(dateA)) console.error('Invalid month period id provided:', a);
    if (!(0, _dateFns.isValid)(dateB)) console.error('Invalid month period id provided:', b);
    return dateA.getTime() - dateB.getTime();
  }
  if (periodType.toUpperCase() === PERIOD_TYPES.WEEK) {
    const dateA = (0, _dateFns.parse)(a, 'RRRR\'W\'II', new Date());
    const dateB = (0, _dateFns.parse)(b, 'RRRR\'W\'II', new Date());
    if (!(0, _dateFns.isValid)(dateA)) console.error('Invalid week period id provided:', a);
    if (!(0, _dateFns.isValid)(dateB)) console.error('Invalid week period id provided:', b);
    return dateA.getTime() - dateB.getTime();
  }
  console.error('Unsupported period type provided:', periodType);
  return a.localeCompare(b);
};

/**
 * Sorts period strings chronologically based on the period type.
 * @param periods - An array of period strings to sort
 * @param periodType - The type of period ('month' or 'week')
 * @returns A new array with the periods sorted chronologically
 */
exports.comparePeriods = comparePeriods;
const sortPeriods = (periods, periodType) => {
  return [...periods].sort((a, b) => comparePeriods(a, b, periodType));
};

/**
 * Gets the last N periods including the base period in server format.
 * @param basePeriod - The base period to count back from (e.g., "202412" for months, "2024W52" for weeks)
 * @param periodType - The type of period ('month' or 'week')
 * @param count - The number of periods to return (including the base period)
 * @returns An array of period strings in chronological order
 * @example
 * getLastNPeriods('202412', 'MONTH', 12) // returns ['202401', '202402', ..., '202412']
 */
exports.sortPeriods = sortPeriods;
const getLastNPeriods = (basePeriod, periodType, count) => {
  try {
    if (count <= 0) {
      console.error('Count must be greater than 0');
      return [];
    }
    if (periodType.toUpperCase() === PERIOD_TYPES.MONTH) {
      const baseDate = (0, _dateFns.parse)(basePeriod, 'yyyyMM', new Date());
      if (!(0, _dateFns.isValid)(baseDate)) {
        console.error('Invalid month period id provided:', basePeriod);
        return [];
      }
      const periods = [];
      const startDate = (0, _dateFns.subMonths)(baseDate, count - 1);
      let currentDate = startDate;
      for (let i = 0; i < count; i++) {
        periods.push((0, _dateFns.format)(currentDate, 'yyyyMM'));
        currentDate = (0, _dateFns.addMonths)(currentDate, 1);
      }
      return periods;
    }
    if (periodType.toUpperCase() === PERIOD_TYPES.WEEK) {
      const baseDate = (0, _dateFns.parse)(basePeriod, 'RRRR\'W\'II', new Date());
      if (!(0, _dateFns.isValid)(baseDate)) {
        console.error('Invalid week period id provided:', basePeriod);
        return [];
      }
      const periods = [];
      const startDate = (0, _dateFns.subWeeks)((0, _dateFns.startOfISOWeek)(baseDate), count - 1);
      let currentDate = startDate;
      for (let i = 0; i < count; i++) {
        const isoYear = (0, _dateFns.getISOWeekYear)(currentDate);
        const weekNumber = (0, _dateFns.getISOWeek)(currentDate);
        const weekString = `${isoYear}W${String(weekNumber).padStart(2, '0')}`;
        periods.push(weekString);
        currentDate = (0, _dateFns.addWeeks)(currentDate, 1);
      }
      return periods;
    }
    console.error('Unsupported period type provided:', periodType);
    return [];
  } catch (error) {
    console.error('Error generating last N periods:', error);
    return [];
  }
};
exports.getLastNPeriods = getLastNPeriods;