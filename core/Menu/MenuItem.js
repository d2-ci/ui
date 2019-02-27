"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _index = _interopRequireDefault(require("./index"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subChevron = {
  styles: _react.default.createElement(_style.default, {
    id: "3358657644"
  }, "i.jsx-3358657644{margin:0 -14px 0 auto;font-size:18px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"),
  className: "jsx-3358657644"
};

function SubMenu(_ref) {
  var size = _ref.size,
      list = _ref.list,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('sub-menu') || "")
  }, _react.default.createElement(_index.default, {
    size: size,
    list: list,
    onClick: onClick
  }), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

function MenuItem(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      icon = _ref2.icon,
      list = _ref2.list,
      active = _ref2.active,
      disabled = _ref2.disabled,
      size = _ref2.size,
      _onClick = _ref2.onClick;
  var hasMenu = list.length > 0;
  return _react.default.createElement("li", {
    onClick: function onClick(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      _onClick(value);
    },
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('item', {
      disabled: disabled,
      active: active
    }) || "")
  }, icon, _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "label"
  }, label), hasMenu && _react.default.createElement(_Icon.default, {
    name: "chevron_right",
    className: subChevron.className
  }), hasMenu && _react.default.createElement(SubMenu, {
    size: size,
    list: list,
    onClick: _onClick
  }), subChevron.styles, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

MenuItem.defaultProps = {
  list: [],
  size: 'default',
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  icon: _propTypes.default.element,
  list: _propTypes.default.array,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired
};