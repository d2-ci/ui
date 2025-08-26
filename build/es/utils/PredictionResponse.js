//these functions are used to get the prediction response from the server to display them in the view, add orgUnits names and so on

export const getUniqePeriods = values => {
  return [...new Set(values.map(v => v.period))];
};
export const getUniqeOrgUnits = values => {
  return [...new Set(values.map(v => v.orgUnit))];
};
export const getUniqeQuantiles = values => {
  return [...new Set(values.map(v => v.dataElement))];
};
export const findOrgUnitName = (orgUnitId, values) => {
  var _values$find;
  return (_values$find = values.find(ou => ou.orgUnit === orgUnitId)) === null || _values$find === void 0 ? void 0 : _values$find.displayName;
};