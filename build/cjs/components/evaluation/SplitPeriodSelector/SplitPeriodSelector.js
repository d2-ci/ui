"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireDefault(require("react"));
var _Time = require("../../../utils/Time");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SplitPeriodSelector = ({
  splitPeriods,
  setSelectedSplitPeriod,
  selectedSplitPeriod,
  ...singleSelectFieldProps
}) => {
  const selectedInAvailable = splitPeriods.includes(selectedSplitPeriod);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, _extends({}, singleSelectFieldProps, {
    selected: selectedInAvailable ? selectedSplitPeriod : undefined,
    onChange: e => setSelectedSplitPeriod(e.selected)
  }), splitPeriods.map((splitPeriod, i) => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    key: i,
    label: (0, _Time.getPeriodNameFromId)(splitPeriod),
    value: splitPeriod
  })))));
};
var _default = exports.default = SplitPeriodSelector;