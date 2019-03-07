"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../../core/Card"));

var _InputField = _interopRequireDefault(require("../../core/InputField"));

var _utils = require("../../utils");

var _Settings = require("../../icons/Settings.js");

var _Apps = require("../../icons/Apps.js");

var _Cancel = require("../../icons/Cancel.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _theme = require("../../core/theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "3606299726"
  }, "svg.jsx-3606299726{fill:".concat(_theme.colors.white, ";cursor:pointer;height:24px;width:24px;}")),
  className: "jsx-3606299726"
};
var trailIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "2424046279"
  }, "svg.jsx-2424046279{fill:".concat(_theme.colors.grey900, ";cursor:pointer;height:24px;width:24px;margin-right:8px;margin-top:4px;}")),
  className: "jsx-2424046279"
};
var settingsIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "3823001888"
  }, "svg.jsx-3823001888{margin:8px 8px 0 16px;color:".concat(_theme.colors.grey900, ";height:24px;width:24px;}")),
  className: "jsx-3823001888"
};

function TrailIcon(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement("a", {
    onClick: onClick
  }, _react.default.createElement(_Cancel.Cancel, {
    className: trailIcon.className
  }));
}

function Search(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      onSettingsClick = _ref2.onSettingsClick,
      onIconClick = _ref2.onIconClick;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('search') || "")
  }, _react.default.createElement(_InputField.default, {
    value: value,
    name: "filter",
    kind: "filled",
    size: "dense",
    focus: true,
    label: "Search apps",
    onChange: onChange,
    trailIcon: _react.default.createElement(TrailIcon, {
      onClick: onIconClick
    })
  }), _react.default.createElement("a", {
    onClick: onSettingsClick,
    className: "jsx-".concat(_styles.default.__hash)
  }, _react.default.createElement(_Settings.Settings, {
    className: settingsIcon.className
  })), trailIcon.styles, settingsIcon.styles, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Search.defaultProps = {
  onIconClick: null
};
Search.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onSettingsClick: _propTypes.default.func.isRequired,
  onIconClick: _propTypes.default.func
};

function Item(_ref3) {
  var name = _ref3.name,
      path = _ref3.path,
      img = _ref3.img;
  return _react.default.createElement("a", {
    href: path,
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('app') || "")
  }, _react.default.createElement("img", {
    src: img,
    alt: "app logo",
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)() || "")
  }), _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('name') || "")
  }, name), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Item.propTypes = {
  name: _propTypes.default.string,
  path: _propTypes.default.string,
  img: _propTypes.default.string
};

function List(_ref4) {
  var apps = _ref4.apps,
      filter = _ref4.filter;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('modules') || "")
  }, apps.filter(function (_ref5) {
    var name = _ref5.name;
    return filter.length > 0 ? name.toLowerCase().match(filter.toLowerCase()) : true;
  }).map(function (_ref6, idx) {
    var name = _ref6.name,
        path = _ref6.path,
        img = _ref6.img;
    return _react.default.createElement(Item, {
      key: "app-".concat(name, "-").concat(idx),
      name: name,
      path: path,
      img: img
    });
  }), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

var Apps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Apps, _React$Component);

  function Apps() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Apps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Apps)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      filter: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elApps) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var apps = _this.elApps.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _utils.isPointInRect)(target, apps) && !(0, _utils.isPointInRect)(target, container)) {
          _this.setState({
            show: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      return _this.setState({
        show: !_this.state.show
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (_, filter) {
      return _this.setState({
        filter: filter
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSettingsClick", function () {
      return (0, _utils.gotoURL)("".concat(_this.props.baseURL, "/dhis-web-menu-management"));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onIconClick", function () {
      return _this.setState({
        filter: ''
      });
    });

    return _this;
  }

  _createClass(Apps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('apps') || "")
      }, _react.default.createElement("a", {
        onClick: this.onToggle,
        className: "jsx-".concat(_styles.default.__hash)
      }, _react.default.createElement(_Apps.Apps, {
        className: appIcon.className
      })), this.state.show && _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elApps = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('contents') || "")
      }, _react.default.createElement(_Card.default, null, _react.default.createElement(Search, {
        value: this.state.filter,
        onChange: this.onChange,
        onSettingsClick: this.onSettingsClick,
        onIconClick: this.onIconClick
      }), _react.default.createElement(List, {
        apps: this.props.apps,
        filter: this.state.filter
      }))), appIcon.styles, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Apps;
}(_react.default.Component);

exports.default = Apps;
Apps.propTypes = {
  baseURL: _propTypes.default.string.isRequired
};