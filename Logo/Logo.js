"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

require("./logo.css");

var _dhis2_icon_rgb_negative = _interopRequireDefault(require("./svg/dhis2_icon_rgb_negative.svg"));

var _dhis2_icon_rgb_positive = _interopRequireDefault(require("./svg/dhis2_icon_rgb_positive.svg"));

var _dhis2_logo_rgb_negative = _interopRequireDefault(require("./svg/dhis2_logo_rgb_negative.svg"));

var _dhis2_logo_rgb_positive = _interopRequireDefault(require("./svg/dhis2_logo_rgb_positive.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('logo');
var imageLookup = {
  logo: {
    positive: _dhis2_logo_rgb_positive.default,
    negative: _dhis2_logo_rgb_negative.default
  },
  icon: {
    positive: _dhis2_icon_rgb_positive.default,
    negative: _dhis2_icon_rgb_negative.default
  }
};

var Logo = function Logo(_ref) {
  var reverse = _ref.reverse,
      icon = _ref.icon,
      width = _ref.width,
      altText = _ref.altText;
  var version = icon ? 'icon' : 'logo';
  var variant = reverse ? 'negative' : 'positive';
  var src = imageLookup[version][variant];
  var style = width ? {
    width: width
  } : null;
  return _react.default.createElement("img", {
    alt: altText,
    src: src,
    className: bem.b(version),
    style: style
  });
};

Logo.defaultProps = {
  reverse: false,
  icon: false,
  altText: 'DHIS2 Logo'
};
var _default = Logo;
exports.default = _default;