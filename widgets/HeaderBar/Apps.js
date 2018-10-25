"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../../core/Card"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _InputField = _interopRequireDefault(require("../../core/InputField"));

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Search(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onSettingsClick = _ref.onSettingsClick;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('search')
  }, _react.default.createElement(_InputField.default, {
    name: "filter",
    value: value,
    kind: "filled",
    size: "dense",
    label: "Search apps",
    onChange: onChange
  }), _react.default.createElement(_Icon.default, {
    name: "settings",
    className: (0, _styles.default)('settings'),
    onClick: onSettingsClick
  }));
}

Search.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onSettingsClick: _propTypes.default.func.isRequired
};

function Item(_ref2) {
  var name = _ref2.name,
      path = _ref2.path,
      img = _ref2.img;
  return _react.default.createElement("a", {
    href: path,
    className: (0, _styles.default)('app')
  }, _react.default.createElement("img", {
    src: img,
    alt: "app logo"
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('name')
  }, name));
}

Item.propTypes = {
  name: _propTypes.default.string,
  path: _propTypes.default.string,
  img: _propTypes.default.string
};

function List(_ref3) {
  var apps = _ref3.apps,
      filter = _ref3.filter;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('modules')
  }, apps.filter(function (_ref4) {
    var name = _ref4.name;
    return filter.length > 0 ? name.toLowerCase().includes(filter.toLowerCase()) : true;
  }).map(function (_ref5, idx) {
    var name = _ref5.name,
        path = _ref5.path,
        img = _ref5.img;
    return _react.default.createElement(Item, {
      key: "app-".concat(name, "-").concat(idx),
      name: name,
      path: path,
      img: img
    });
  }));
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
      return (0, _utils.gotoURL)("".concat(_this.props.baseURL, "/dhis-web-user-profile/#/account"));
    });

    return _this;
  }

  _createClass(Apps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: (0, _styles.default)('apps'),
        ref: function ref(c) {
          return _this2.elContainer = c;
        }
      }, _react.default.createElement(_Icon.default, {
        name: "apps",
        onClick: this.onToggle
      }), this.state.show && _react.default.createElement("div", {
        className: (0, _styles.default)('contents'),
        ref: function ref(c) {
          return _this2.elApps = c;
        }
      }, _react.default.createElement(_Card.default, {
        width: "416px",
        height: "301px"
      }, _react.default.createElement(Search, {
        value: this.state.filter,
        onChange: this.onChange,
        onSettingsClick: this.onSettingsClick
      }), _react.default.createElement(List, {
        apps: this.props.apps,
        filter: this.state.filter
      }))));
    }
  }]);

  return Apps;
}(_react.default.Component);

exports.default = Apps;
Apps.propTypes = {
  baseURL: _propTypes.default.string.isRequired
};