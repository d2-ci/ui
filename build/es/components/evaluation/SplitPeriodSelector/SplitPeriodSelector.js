function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import React from 'react';
import { getPeriodNameFromId } from '../../../utils/Time';
const SplitPeriodSelector = ({
  splitPeriods,
  setSelectedSplitPeriod,
  selectedSplitPeriod,
  ...singleSelectFieldProps
}) => {
  const selectedInAvailable = splitPeriods.includes(selectedSplitPeriod);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SingleSelectField, _extends({}, singleSelectFieldProps, {
    selected: selectedInAvailable ? selectedSplitPeriod : undefined,
    onChange: e => setSelectedSplitPeriod(e.selected)
  }), splitPeriods.map((splitPeriod, i) => /*#__PURE__*/React.createElement(SingleSelectOption, {
    key: i,
    label: getPeriodNameFromId(splitPeriod),
    value: splitPeriod
  })))));
};
export default SplitPeriodSelector;