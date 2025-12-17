export declare const PERIOD_TYPES: {
    readonly DAY: "DAY";
    readonly WEEK: "WEEK";
    readonly MONTH: "MONTH";
    readonly YEAR: "YEAR";
    readonly ANY: "ANY";
};
export type PeriodType = typeof PERIOD_TYPES[keyof typeof PERIOD_TYPES];
export interface Period {
    startDate: Date | undefined;
    endDate: Date | undefined;
    id: string;
}
/**
 * Converts a date range to an array of DHIS2 Period objects.
 * @param start - The start date string
 * @param end - The end date string
 * @param periodType - The period type ('week' or 'month')
 * @returns An array of Period objects
 */
export declare const toDHIS2PeriodData: (start: string, end: string, periodType: string) => Period[];
/**
 * Converts a basic ISO format period to an extended ISO format.
 * @param periodId - The period ID in basic format (e.g., "202001" for months, "2024W01" for weeks)
 * @param periodType - The type of period ('month' or 'week')
 * @returns The period ID in extended format (e.g., "2020-01" for months, "2024-W01" for weeks)
 * @example
 * convertServerToClientPeriod('202001', PERIOD_TYPES.MONTH) // returns '2020-01'
 * convertServerToClientPeriod('2024W01', PERIOD_TYPES.WEEK) // returns '2024-W01'
 */
export declare const convertServerToClientPeriod: (periodId: string, periodType: keyof typeof PERIOD_TYPES) => string;
/**
 * Compares two period strings for sorting.
 * @param a - The first period string to compare
 * @param b - The second period string to compare
 * @param periodType - The type of period ('month' or 'week')
 * @returns Negative if a < b, positive if a > b, 0 if equal
 */
export declare const comparePeriods: (a: string, b: string, periodType: keyof typeof PERIOD_TYPES) => number;
/**
 * Sorts period strings chronologically based on the period type.
 * @param periods - An array of period strings to sort
 * @param periodType - The type of period ('month' or 'week')
 * @returns A new array with the periods sorted chronologically
 */
export declare const sortPeriods: (periods: string[], periodType: keyof typeof PERIOD_TYPES) => string[];
/**
 * Gets the last N periods including the base period in server format.
 * @param basePeriod - The base period to count back from (e.g., "202412" for months, "2024W52" for weeks)
 * @param periodType - The type of period ('month' or 'week')
 * @param count - The number of periods to return (including the base period)
 * @returns An array of period strings in chronological order
 * @example
 * getLastNPeriods('202412', 'MONTH', 12) // returns ['202401', '202402', ..., '202412']
 */
export declare const getLastNPeriods: (basePeriod: string, periodType: keyof typeof PERIOD_TYPES, count: number) => string[];
