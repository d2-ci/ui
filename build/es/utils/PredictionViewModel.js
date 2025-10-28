import { createFixedPeriodFromPeriodId } from '@dhis2/multi-calendar-dates';
const QUANTILES = [['quantile_low', 0.1], ['median', 0.5], ['quantile_high', 0.9]];
export function computeQuantile(quantile, values) {
  if (!values || values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const index = quantile * (n - 1);
  const lowerIndex = Math.floor(index);
  const upperIndex = Math.ceil(index);
  if (lowerIndex === upperIndex) {
    return Math.round(sorted[lowerIndex]);
  }
  return Math.round(sorted[lowerIndex] + (sorted[upperIndex] - sorted[lowerIndex]) * (index - lowerIndex));
}
export function buildPredictionSeries(prediction, orgUnitsById, targetId) {
  const byOrgUnit = new Map();
  for (const forecast of prediction.forecasts) {
    var _orgUnitsById$get$dis, _orgUnitsById$get;
    const existing = byOrgUnit.get(forecast.orgUnit);
    const base = existing !== null && existing !== void 0 ? existing : {
      targetId,
      orgUnitId: forecast.orgUnit,
      orgUnitName: (_orgUnitsById$get$dis = (_orgUnitsById$get = orgUnitsById.get(forecast.orgUnit)) === null || _orgUnitsById$get === void 0 ? void 0 : _orgUnitsById$get.displayName) !== null && _orgUnitsById$get$dis !== void 0 ? _orgUnitsById$get$dis : forecast.orgUnit,
      points: []
    };
    const point = {
      period: forecast.period,
      periodLabel: createFixedPeriodFromPeriodId({
        periodId: forecast.period,
        calendar: 'gregory'
      }).displayName,
      quantiles: QUANTILES.reduce((acc, [key, q]) => {
        acc[key] = computeQuantile(q, forecast.values);
        return acc;
      }, {})
    };
    base.points.push(point);
    byOrgUnit.set(forecast.orgUnit, base);
  }
  return Array.from(byOrgUnit.values()).map(series => ({
    ...series,
    points: series.points.sort((a, b) => a.period.localeCompare(b.period))
  })).sort((a, b) => a.orgUnitName.localeCompare(b.orgUnitName));
}