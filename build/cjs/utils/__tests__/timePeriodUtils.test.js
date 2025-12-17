"use strict";

var _vitest = require("vitest");
var _timePeriodUtils = require("../timePeriodUtils");
(0, _vitest.describe)('PERIOD_TYPES', () => {
  (0, _vitest.it)('should have the correct period type values', () => {
    (0, _vitest.expect)(_timePeriodUtils.PERIOD_TYPES.DAY).toBe('DAY');
    (0, _vitest.expect)(_timePeriodUtils.PERIOD_TYPES.WEEK).toBe('WEEK');
    (0, _vitest.expect)(_timePeriodUtils.PERIOD_TYPES.MONTH).toBe('MONTH');
    (0, _vitest.expect)(_timePeriodUtils.PERIOD_TYPES.YEAR).toBe('YEAR');
    (0, _vitest.expect)(_timePeriodUtils.PERIOD_TYPES.ANY).toBe('ANY');
  });
});
(0, _vitest.describe)('toDHIS2PeriodData', () => {
  (0, _vitest.describe)('month periods', () => {
    (0, _vitest.it)('should generate correct month periods for a single month', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-01', '2024-01', _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(result).toHaveLength(1);
      (0, _vitest.expect)(result[0].id).toBe('202401');
    });
    (0, _vitest.it)('should generate correct month periods for multiple months', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-01', '2024-03', _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(result).toHaveLength(3);
      (0, _vitest.expect)(result[0].id).toBe('202401');
      (0, _vitest.expect)(result[1].id).toBe('202402');
      (0, _vitest.expect)(result[2].id).toBe('202403');
    });
    (0, _vitest.it)('should generate correct month periods spanning years', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2023-11', '2024-02', _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(result).toHaveLength(4);
      (0, _vitest.expect)(result[0].id).toBe('202311');
      (0, _vitest.expect)(result[1].id).toBe('202312');
      (0, _vitest.expect)(result[2].id).toBe('202401');
      (0, _vitest.expect)(result[3].id).toBe('202402');
    });
    (0, _vitest.it)('should include start and end dates for each month period', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-01', '2024-01', _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(result[0].startDate).toBeDefined();
      (0, _vitest.expect)(result[0].endDate).toBeDefined();
    });
  });
  (0, _vitest.describe)('week periods', () => {
    (0, _vitest.it)('should generate correct week periods for a single week', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-W01', '2024-W01', _timePeriodUtils.PERIOD_TYPES.WEEK);
      (0, _vitest.expect)(result).toHaveLength(1);
      (0, _vitest.expect)(result[0].id).toBe('2024W1');
    });
    (0, _vitest.it)('should generate correct week periods for multiple weeks', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-W01', '2024-W03', _timePeriodUtils.PERIOD_TYPES.WEEK);
      (0, _vitest.expect)(result).toHaveLength(3);
      (0, _vitest.expect)(result[0].id).toBe('2024W1');
      (0, _vitest.expect)(result[1].id).toBe('2024W2');
      (0, _vitest.expect)(result[2].id).toBe('2024W3');
    });
    (0, _vitest.it)('should include start and end dates for each week period', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-W01', '2024-W01', _timePeriodUtils.PERIOD_TYPES.WEEK);
      (0, _vitest.expect)(result[0].startDate).toBeDefined();
      (0, _vitest.expect)(result[0].endDate).toBeDefined();
    });
  });
  (0, _vitest.describe)('invalid inputs', () => {
    (0, _vitest.it)('should return empty array for invalid period type', () => {
      const result = (0, _timePeriodUtils.toDHIS2PeriodData)('2024-01', '2024-03', 'invalid');
      (0, _vitest.expect)(result).toEqual([]);
    });
  });
});
(0, _vitest.describe)('convertServerToClientPeriod', () => {
  (0, _vitest.describe)('month periods', () => {
    (0, _vitest.it)('should convert server month format to client format', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('202401', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBe('2024-01');
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('202312', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBe('2023-12');
    });
    (0, _vitest.it)('should handle lowercase period type', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('202401', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBe('2024-01');
    });
    (0, _vitest.it)('should return original value for invalid month format', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('invalid', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBe('invalid');
    });
  });
  (0, _vitest.describe)('week periods', () => {
    (0, _vitest.it)('should convert server week format to client format', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('2024W01', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBe('2024-W01');
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('2024W52', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBe('2024-W52');
    });
    (0, _vitest.it)('should handle lowercase period type', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('2024W01', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBe('2024-W01');
    });
    (0, _vitest.it)('should return original value for invalid week format', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('invalid', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBe('invalid');
    });
  });
  (0, _vitest.describe)('unsupported period types', () => {
    (0, _vitest.it)('should return original value for unsupported period type', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('2024', _timePeriodUtils.PERIOD_TYPES.YEAR)).toBe('2024');
      (0, _vitest.expect)((0, _timePeriodUtils.convertServerToClientPeriod)('20240101', _timePeriodUtils.PERIOD_TYPES.DAY)).toBe('20240101');
    });
  });
});
(0, _vitest.describe)('comparePeriods', () => {
  (0, _vitest.describe)('month periods', () => {
    (0, _vitest.it)('should return negative when first period is earlier', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('202401', '202402', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBeLessThan(0);
    });
    (0, _vitest.it)('should return positive when first period is later', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('202402', '202401', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBeGreaterThan(0);
    });
    (0, _vitest.it)('should return zero when periods are equal', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('202401', '202401', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBe(0);
    });
    (0, _vitest.it)('should correctly compare periods across years', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('202312', '202401', _timePeriodUtils.PERIOD_TYPES.MONTH)).toBeLessThan(0);
    });
  });
  (0, _vitest.describe)('week periods', () => {
    (0, _vitest.it)('should return negative when first period is earlier', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('2024W01', '2024W02', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBeLessThan(0);
    });
    (0, _vitest.it)('should return positive when first period is later', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('2024W02', '2024W01', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBeGreaterThan(0);
    });
    (0, _vitest.it)('should return zero when periods are equal', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('2024W01', '2024W01', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBe(0);
    });
    (0, _vitest.it)('should correctly compare periods across years', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.comparePeriods)('2023W52', '2024W01', _timePeriodUtils.PERIOD_TYPES.WEEK)).toBeLessThan(0);
    });
  });
  (0, _vitest.describe)('unsupported period types', () => {
    (0, _vitest.it)('should fall back to string comparison for unsupported types', () => {
      const result = (0, _timePeriodUtils.comparePeriods)('2024', '2025', _timePeriodUtils.PERIOD_TYPES.YEAR);
      (0, _vitest.expect)(result).toBeLessThan(0);
    });
  });
});
(0, _vitest.describe)('sortPeriods', () => {
  (0, _vitest.describe)('month periods', () => {
    (0, _vitest.it)('should sort month periods chronologically', () => {
      const periods = ['202403', '202401', '202402'];
      const sorted = (0, _timePeriodUtils.sortPeriods)(periods, _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(sorted).toEqual(['202401', '202402', '202403']);
    });
    (0, _vitest.it)('should sort month periods across years', () => {
      const periods = ['202401', '202312', '202311'];
      const sorted = (0, _timePeriodUtils.sortPeriods)(periods, _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(sorted).toEqual(['202311', '202312', '202401']);
    });
    (0, _vitest.it)('should not mutate the original array', () => {
      const periods = ['202403', '202401', '202402'];
      (0, _timePeriodUtils.sortPeriods)(periods, _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(periods).toEqual(['202403', '202401', '202402']);
    });
    (0, _vitest.it)('should handle empty array', () => {
      const sorted = (0, _timePeriodUtils.sortPeriods)([], _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(sorted).toEqual([]);
    });
    (0, _vitest.it)('should handle single element array', () => {
      const sorted = (0, _timePeriodUtils.sortPeriods)(['202401'], _timePeriodUtils.PERIOD_TYPES.MONTH);
      (0, _vitest.expect)(sorted).toEqual(['202401']);
    });
  });
  (0, _vitest.describe)('week periods', () => {
    (0, _vitest.it)('should sort week periods chronologically', () => {
      const periods = ['2024W03', '2024W01', '2024W02'];
      const sorted = (0, _timePeriodUtils.sortPeriods)(periods, _timePeriodUtils.PERIOD_TYPES.WEEK);
      (0, _vitest.expect)(sorted).toEqual(['2024W01', '2024W02', '2024W03']);
    });
    (0, _vitest.it)('should sort week periods across years', () => {
      const periods = ['2024W01', '2023W52', '2023W51'];
      const sorted = (0, _timePeriodUtils.sortPeriods)(periods, _timePeriodUtils.PERIOD_TYPES.WEEK);
      (0, _vitest.expect)(sorted).toEqual(['2023W51', '2023W52', '2024W01']);
    });
  });
});
(0, _vitest.describe)('getLastNPeriods', () => {
  (0, _vitest.describe)('month periods', () => {
    (0, _vitest.it)('should return the last N months including the base period', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('202412', _timePeriodUtils.PERIOD_TYPES.MONTH, 3);
      (0, _vitest.expect)(result).toEqual(['202410', '202411', '202412']);
    });
    (0, _vitest.it)('should return 12 months for a full year', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('202412', _timePeriodUtils.PERIOD_TYPES.MONTH, 12);
      (0, _vitest.expect)(result).toHaveLength(12);
      (0, _vitest.expect)(result[0]).toBe('202401');
      (0, _vitest.expect)(result[11]).toBe('202412');
    });
    (0, _vitest.it)('should handle periods spanning years', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('202402', _timePeriodUtils.PERIOD_TYPES.MONTH, 4);
      (0, _vitest.expect)(result).toEqual(['202311', '202312', '202401', '202402']);
    });
    (0, _vitest.it)('should return single period when count is 1', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('202412', _timePeriodUtils.PERIOD_TYPES.MONTH, 1);
      (0, _vitest.expect)(result).toEqual(['202412']);
    });
    (0, _vitest.it)('should return empty array for invalid base period', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('invalid', _timePeriodUtils.PERIOD_TYPES.MONTH, 3);
      (0, _vitest.expect)(result).toEqual([]);
    });
    (0, _vitest.it)('should return empty array for count <= 0', () => {
      (0, _vitest.expect)((0, _timePeriodUtils.getLastNPeriods)('202412', _timePeriodUtils.PERIOD_TYPES.MONTH, 0)).toEqual([]);
      (0, _vitest.expect)((0, _timePeriodUtils.getLastNPeriods)('202412', _timePeriodUtils.PERIOD_TYPES.MONTH, -1)).toEqual([]);
    });
  });
  (0, _vitest.describe)('week periods', () => {
    (0, _vitest.it)('should return the last N weeks including the base period', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('2024W10', _timePeriodUtils.PERIOD_TYPES.WEEK, 3);
      (0, _vitest.expect)(result).toEqual(['2024W08', '2024W09', '2024W10']);
    });
    (0, _vitest.it)('should handle periods spanning years', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('2024W02', _timePeriodUtils.PERIOD_TYPES.WEEK, 4);
      (0, _vitest.expect)(result).toHaveLength(4);
      (0, _vitest.expect)(result[0]).toMatch(/^2023W/);
      (0, _vitest.expect)(result[1]).toMatch(/^2023W/);
      (0, _vitest.expect)(result[2]).toBe('2024W01');
      (0, _vitest.expect)(result[3]).toBe('2024W02');
    });
    (0, _vitest.it)('should return single period when count is 1', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('2024W10', _timePeriodUtils.PERIOD_TYPES.WEEK, 1);
      (0, _vitest.expect)(result).toEqual(['2024W10']);
    });
    (0, _vitest.it)('should return empty array for invalid base period', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('invalid', _timePeriodUtils.PERIOD_TYPES.WEEK, 3);
      (0, _vitest.expect)(result).toEqual([]);
    });
  });
  (0, _vitest.describe)('unsupported period types', () => {
    (0, _vitest.it)('should return empty array for unsupported period type', () => {
      const result = (0, _timePeriodUtils.getLastNPeriods)('2024', _timePeriodUtils.PERIOD_TYPES.YEAR, 3);
      (0, _vitest.expect)(result).toEqual([]);
    });
  });
});