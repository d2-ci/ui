"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rx = exports.default = void 0;

var _css = _interopRequireDefault(require("../../utils/css"));

require("../../defaults/colors.css");

require("../../defaults/common.css");

var _common2 = _interopRequireDefault(require("../../defaults/common.json"));

require("./styles.css");

var _styles2 = _interopRequireDefault(require("./styles.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cx = (0, _css.default)(_objectSpread({}, _common2.default, _styles2.default));
var _default = cx;
exports.default = _default;

var rx = function rx() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return cx.apply(void 0, ['reset'].concat(args));
};

exports.rx = rx;