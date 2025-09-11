function sortDhis2WeeklyAndMonthlyTime(a, b) {
  const parseDate = dateStr => {
    if (dateStr.includes('W')) {
      const [year, week] = dateStr.split('W').map(Number);
      const firstDayOfYear = new Date(year, 0, 1);
      const daysOffset = (week - 1) * 7;
      const data = new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + daysOffset));
      return data;
    } else {
      const year = Number(dateStr.slice(0, 4));
      const month = Number(dateStr.slice(4, 6)) - 1;
      return new Date(year, month);
    }
  };
  return parseDate(a).getTime() - parseDate(b).getTime();
}
export function joinRealAndPredictedData(predictedData, realData) {
  var _predictedData$midran;
  // number of periods in plot
  // some code below was commented out to always view full extent
  // previously rolled the window based on the split period

  // const nPeriods = 52 * 3
  // const predictionEnd = predictedData.periods[predictedData.periods.length - 1]
  const realPeriodsFiltered = realData.map(item => item.pe).sort(sortDhis2WeeklyAndMonthlyTime);
  const realDataFiltered = realPeriodsFiltered.map(period => {
    var _realData$find$value, _realData$find;
    return (_realData$find$value = (_realData$find = realData.find(item => item.pe === period)) === null || _realData$find === void 0 ? void 0 : _realData$find.value) !== null && _realData$find$value !== void 0 ? _realData$find$value : null;
  });

  // turn prediction arrays into period dicts
  const createLookup = (keys, values) => {
    if (!values) {
      return new Map();
    }
    const lookup = new Map();
    for (let i = 0; i < keys.length; i++) {
      lookup.set(keys[i], values[i]);
    }
    return lookup;
  };
  const averageLookup = createLookup(predictedData.periods, predictedData.averages.slice());
  const rangeLookup = createLookup(predictedData.periods, predictedData.ranges.slice());
  const midRangeLookup = createLookup(predictedData.periods, (_predictedData$midran = predictedData.midranges) === null || _predictedData$midran === void 0 ? void 0 : _predictedData$midran.slice());

  // join prediction arrays into longer period arrays
  /*
  const mergePeriodValues = (
      periods: string[],
      periodValues: Map<string, any>,
  ): any[] => {
      const result = new Array(periods.length).fill(null)
      console.log('periodvalues', periodValues)
      for (let i = 0; i < periods.length; i++) {
          const period = periods[i]
          if (periodValues.has(period)) {
              console.log('perval get', periodValues.get(period))
              result[i] = periodValues.get(period)
          }
      }
       return result
  }
  */
  const mergePeriodValues = (periods, periodValues) => {
    return periods.map(period => {
      var _periodValues$get;
      return (_periodValues$get = periodValues.get(period)) !== null && _periodValues$get !== void 0 ? _periodValues$get : null;
    });
  };
  const joinedAverages = mergePeriodValues(realPeriodsFiltered, averageLookup);
  const joinedRanges = mergePeriodValues(realPeriodsFiltered, rangeLookup);
  const joinedMidRanges = mergePeriodValues(realPeriodsFiltered, midRangeLookup);
  return {
    periods: realPeriodsFiltered,
    ranges: joinedRanges,
    averages: joinedAverages,
    realValues: realDataFiltered,
    midranges: joinedMidRanges
  };
}
export const evaluationResultToViewData = (data, realValues, modelName) => {
  const quantiles = Array.from(new Set(data.map(item => item.quantile))).sort();
  const lowQuantile = quantiles[0];
  const midLowQuantile = quantiles[1];
  const midHighQuantile = quantiles[quantiles.length - 2];
  const highQuantile = quantiles[quantiles.length - 1];
  const quantileFunc = item => {
    if (item.quantile === lowQuantile) {
      return 'quantile_low';
    } else if (item.quantile === highQuantile) {
      return 'quantile_high';
    } else if (item.quantile === 0.5) {
      return 'median';
    } else if (item.quantile === midLowQuantile) {
      return 'quantile_mid_low';
    } else if (item.quantile === midHighQuantile) {
      return 'quantile_mid_high';
    } else {
      return 'unknown';
    }
  };
  const modelNames = Array.from(new Set(data.map(item => item.modelName || modelName)));

  // loop trough each unique split period (each row / line of plots)
  return Array.from(new Set(data.map(item => item.splitPeriod))).map(splitPeriod => {
    return {
      // splitPeriod = cound hold several plots with same splitPeriod
      splitPoint: splitPeriod,
      // loop through each unique orgUnit
      evaluation: Array.from(new Set(data.map(item => item.orgUnit))).map(orgUnit => {
        return {
          orgUnitName: orgUnit,
          orgUnitId: orgUnit,
          models: modelNames.map(mn => {
            const highChartData = createHighChartsData(
            // pass in data for one orgUnit, for one splitPeriod, for one modelName
            data.filter(o => o.orgUnit === orgUnit && o.splitPeriod === splitPeriod && ((o === null || o === void 0 ? void 0 : o.modelName) || modelName) === mn), quantileFunc);
            const joinedRealAndPredictedData = joinRealAndPredictedData(highChartData, realValues.filter(item => item.ou === orgUnit));
            return {
              modelName: mn,
              data: joinedRealAndPredictedData
            };
          })
        };
      })
    };
  });
};
export function createHighChartsData(plotData, quantileFunc) {
  // requires that all periods are included in the respone
  const periods = Array.from(new Set(plotData.map(item => item.period))).sort(sortDhis2WeeklyAndMonthlyTime);
  const ranges = [];
  const averages = [];
  const midranges = [];
  periods.forEach(period => {
    var _plotData$find, _plotData$find2, _plotData$find3, _plotData$find4, _plotData$find5;
    const quantileLow = ((_plotData$find = plotData.find(item => item.period === period && quantileFunc(item) === 'quantile_low')) === null || _plotData$find === void 0 ? void 0 : _plotData$find.value) || 0;
    const quantileHigh = ((_plotData$find2 = plotData.find(item => item.period === period && quantileFunc(item) === 'quantile_high')) === null || _plotData$find2 === void 0 ? void 0 : _plotData$find2.value) || 0;
    const median = ((_plotData$find3 = plotData.find(item => item.period === period && quantileFunc(item) === 'median')) === null || _plotData$find3 === void 0 ? void 0 : _plotData$find3.value) || 0;
    const quantileMidHigh = ((_plotData$find4 = plotData.find(item => item.period === period && quantileFunc(item) === 'quantile_mid_high')) === null || _plotData$find4 === void 0 ? void 0 : _plotData$find4.value) || 0;
    const quantileMidLow = ((_plotData$find5 = plotData.find(item => item.period === period && quantileFunc(item) === 'quantile_mid_low')) === null || _plotData$find5 === void 0 ? void 0 : _plotData$find5.value) || 0;
    ranges.push([quantileLow, quantileHigh]);
    averages.push([median]);
    midranges.push([quantileMidLow, quantileMidHigh]);
  });
  const dataElement = {
    periods,
    ranges,
    averages,
    midranges
  };
  return dataElement;
}
export function getSplitPeriod(data) {
  return Array.from(new Set(data.map(item => item.splitPeriod)));
}