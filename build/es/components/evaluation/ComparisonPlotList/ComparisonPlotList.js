function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { ComparisonPlot } from '../ComparisonPlot/ComparisonPlot';
import { Virtuoso } from 'react-virtuoso';
export const ComparisonPlotList = ({
  evaluationPerOrgUnits,
  useVirtuoso = true,
  useVirtuosoWindowScroll = false,
  virtuosoProps,
  nameLabel
}) => {
  if (!useVirtuoso) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, evaluationPerOrgUnits.map(orgUnitsData => {
      if (!orgUnitsData) {
        return null;
      }
      return /*#__PURE__*/React.createElement(ComparisonPlot, {
        key: orgUnitsData.orgUnitId,
        orgUnitsData: orgUnitsData,
        nameLabel: nameLabel
      });
    }));
  }
  return /*#__PURE__*/React.createElement(Virtuoso, _extends({}, virtuosoProps, {
    style: {
      height: '100%'
    },
    useWindowScroll: useVirtuosoWindowScroll,
    totalCount: evaluationPerOrgUnits.length,
    itemContent: index => /*#__PURE__*/React.createElement(ComparisonPlot, {
      orgUnitsData: evaluationPerOrgUnits[index],
      nameLabel: nameLabel
    })
  }));
};