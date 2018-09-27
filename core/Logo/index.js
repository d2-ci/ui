"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = Logo;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

require("./styles.css");

var _iconBlue = _interopRequireDefault(require("./svg/icon-blue.svg"));

var _iconWhite = _interopRequireDefault(require("./svg/icon-white.svg"));

var _logoBlue = _interopRequireDefault(require("./svg/logo-blue.svg"));

var _logoWhite = _interopRequireDefault(require("./svg/logo-white.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('logo');
var images = {
  'icon-blue': _iconBlue.default,
  'icon-white': _iconWhite.default,
  'logo-blue': _logoBlue.default,
  'logo-white': _logoWhite.default
};

function Logo(_ref) {
  var type = _ref.type,
      color = _ref.color,
      width = _ref.width,
      alt = _ref.alt;
  var src = images["".concat(type, "-").concat(color)];
  var style = width ? {
    width: width
  } : null;
  return _react.default.createElement("img", {
    alt: alt,
    src: src,
    className: bem.b(type),
    style: style
  });
}

Logo.defaultProps = {
  type: 'icon',
  color: 'blue',
  alt: 'DHIS2 logo'
};
var _default = Logo;
exports.default = _default;