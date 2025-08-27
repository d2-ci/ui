"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MapContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _mapsGl = _interopRequireDefault(require("@dhis2/maps-gl"));
var _MapItemModule = _interopRequireDefault(require("./MapItem.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const MapContext = exports.MapContext = /*#__PURE__*/(0, _react.createContext)(null);
const MapItem = ({
  syncId,
  children
}) => {
  const [map, setMap] = (0, _react.useState)(null);
  const mapEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const map = new _mapsGl.default(mapEl.current);
    map.once('ready', () => setMap(map));
    map.sync(syncId);
    map.resize();
    return () => {
      map.remove();
    };
  }, [mapEl, syncId]);
  return /*#__PURE__*/_react.default.createElement(MapContext.Provider, {
    value: map
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: mapEl,
    className: _MapItemModule.default.mapItem
  }, map && children));
};
var _default = exports.default = MapItem;