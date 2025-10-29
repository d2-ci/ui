import { createFixedPeriodFromPeriodId } from '@dhis2/multi-calendar-dates';
// Map quantile values to their keys
const QUANTILE_MAP = {
  0.1: 'quantile_low',
  0.5: 'median',
  0.9: 'quantile_high'
};
const createPredictionPoint = period => ({
  period,
  periodLabel: createFixedPeriodFromPeriodId({
    periodId: period,
    calendar: 'gregory'
  }).displayName,
  quantiles: {}
});
export function buildPredictionSeries(predictionEntries, orgUnitsById, targetId) {
  const byOrgUnit = predictionEntries.reduce((acc, entry) => {
    var _acc$get, _orgUnitData$get;
    const quantileKey = QUANTILE_MAP[entry.quantile];
    if (!quantileKey) return acc;
    const orgUnitData = (_acc$get = acc.get(entry.orgUnit)) !== null && _acc$get !== void 0 ? _acc$get : acc.set(entry.orgUnit, new Map()).get(entry.orgUnit);
    const point = (_orgUnitData$get = orgUnitData.get(entry.period)) !== null && _orgUnitData$get !== void 0 ? _orgUnitData$get : orgUnitData.set(entry.period, createPredictionPoint(entry.period)).get(entry.period);
    point.quantiles[quantileKey] = entry.value;
    return acc;
  }, new Map());
  return Array.from(byOrgUnit.entries()).map(([orgUnitId, periodsMap]) => {
    var _orgUnitsById$get$dis, _orgUnitsById$get;
    return {
      targetId,
      orgUnitId,
      orgUnitName: (_orgUnitsById$get$dis = (_orgUnitsById$get = orgUnitsById.get(orgUnitId)) === null || _orgUnitsById$get === void 0 ? void 0 : _orgUnitsById$get.displayName) !== null && _orgUnitsById$get$dis !== void 0 ? _orgUnitsById$get$dis : orgUnitId,
      points: Array.from(periodsMap.values()).sort((a, b) => a.period.localeCompare(b.period))
    };
  });
}