"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _appRuntime = require("@dhis2/app-runtime");
var _utils = require("../components/maps/utils");
const REQUEST = {
  orgUnits: {
    resource: 'geoFeatures.json',
    params: ({
      orgUnits
    }) => ({
      ou: 'ou:' + orgUnits.join(';')
    })
  }
};
const useOrgUnits = orgUnitIds => {
  const [orgUnits, setOrgunits] = (0, _react.useState)();
  const {
    loading,
    error
  } = (0, _appRuntime.useDataQuery)(REQUEST, {
    variables: {
      orgUnits: orgUnitIds
    },
    onComplete: data => setOrgunits((0, _utils.parseOrgUnits)(data.orgUnits))
  });
  return {
    orgUnits,
    error,
    loading
  };
};
var _default = exports.default = useOrgUnits;