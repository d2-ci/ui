"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = Tooltip;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * `position="bottom"` (default) works fine with block level elements, but
 * other positions work best with `inline` or `inline-block` elements.
 */
function Tooltip(_ref) {
  var text = _ref.text,
      position = _ref.position,
      multiline = _ref.multiline,
      children = _ref.children;
  var tooltipProps = {
    'data-d2ui-tooltip': text,
    'data-d2ui-tooltip-position': position
  };

  if (multiline) {
    tooltipProps['data-d2ui-tooltip-multiline'] = true;
  }

  return _react.default.createElement("a", _extends({
    className: "d2ui-tooltip"
  }, tooltipProps), children);
}

Tooltip.defaultProps = {
  position: 'bottom',
  multiline: false
};