"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _MapItem = require("./MapItem");
const Basemap = () => {
  const map = (0, _react.useContext)(_MapItem.MapContext);
  (0, _react.useEffect)(() => {
    map.addLayer(map.createLayer({
      type: 'tileLayer',
      url: '//cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }));
  }, [map]);
  return null;
};
var _default = exports.default = Basemap;