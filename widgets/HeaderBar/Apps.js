"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../../core/Card"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _InputField = _interopRequireDefault(require("../../core/InputField"));

var _url = require("../../utils/url.js");

var _math = require("../../utils/math.js");

var _styles = _interopRequireWildcard(require("./styles.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var createAppNameFilter = function createAppNameFilter(filter) {
  return function (_ref) {
    var name = _ref.name;
    return filter.length > 0 ? name.toLowerCase().match(filter.toLowerCase()) : true;
  };
};

function Search(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      onSettingsClick = _ref2.onSettingsClick,
      onIconClick = _ref2.onIconClick;
  return _react.default.createElement("div", {
    className: (0, _styles.rx)('search')
  }, _react.default.createElement(_InputField.default, {
    value: value,
    name: "filter",
    kind: "filled",
    size: "dense",
    focus: true,
    label: "Search apps",
    onChange: onChange,
    trailIcon: "cancel",
    onTrailIconClick: onIconClick
  }), _react.default.createElement(_Icon.default, {
    name: "settings",
    className: (0, _styles.default)('settings'),
    onClick: onSettingsClick
  }));
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
      img = _ref3.img,
      focused = _ref3.focused;
  return _react.default.createElement("a", {
    href: path,
    className: (0, _styles.rx)('app', focused ? 'selected' : null)
  }, _react.default.createElement("img", {
    src: img,
    alt: "app logo",
    className: (0, _styles.rx)()
  }), _react.default.createElement("div", {
    className: (0, _styles.rx)('name')
  }, name));
}

Item.propTypes = {
  name: _propTypes.default.string,
  path: _propTypes.default.string,
  img: _propTypes.default.string
};

function List(_ref4) {
  var apps = _ref4.apps,
      filter = _ref4.filter,
      firstFocused = _ref4.firstFocused;
  return _react.default.createElement("div", {
    className: (0, _styles.rx)('modules'),
    tabIndex: "-1"
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
      img: img,
      focused: firstFocused && idx === 0
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
      filter: '',
      hasTabbed: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elApps) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var apps = _this.elApps.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _math.isPointInRect)(target, apps) && !(0, _math.isPointInRect)(target, container)) {
          _this.setState({
            show: false,
            hasTabbed: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      return _this.setState({
        show: !_this.state.show,
        hasTabbed: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (_, filter) {
      return _this.setState({
        filter: filter,
        hasTabbed: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSettingsClick", function () {
      return (0, _url.gotoURL)("".concat(_this.props.baseURL, "/dhis-web-menu-management"));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onIconClick", function () {
      return _this.setState({
        filter: '',
        hasTabbed: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyPress", function (evt) {
      var isEnterPress = evt.keyCode === 13 || evt.key === 'Enter';
      var isTabKey = evt.keyCode === 9 | evt.key === 'Tab';

      if (isEnterPress) {
        return _this.handleEnterClick(evt);
      } else if (isTabKey) {
        _this.setState({
          hasTabbed: true
        });
      }
    });

    return _this;
  }

  _createClass(Apps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
      document.addEventListener('keyup', this.onKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
      document.addEventListener('keyup', this.onKeyPress);
    }
  }, {
    key: "handleEnterClick",
    value: function handleEnterClick(evt) {
      // We don't know what app is in focus if the user has tabbed since last search change, so we ignore it
      if (!this.state.show || this.state.hasTabbed) {
        return;
      } // Else we want to follow the link of the first app, as a shortcut


      var byNameFilter = createAppNameFilter(this.state.filter);
      var firstApp = this.props.apps.filter(byNameFilter)[0];

      if (firstApp) {
        window.location = firstApp.path;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: (0, _styles.rx)('apps'),
        ref: function ref(c) {
          return _this2.elContainer = c;
        }
      }, _react.default.createElement(_Icon.default, {
        name: "apps",
        onClick: this.onToggle
      }), this.state.show && _react.default.createElement("div", {
        className: (0, _styles.rx)('contents'),
        ref: function ref(c) {
          return _this2.elApps = c;
        }
      }, _react.default.createElement(_Card.default, null, _react.default.createElement(Search, {
        value: this.state.filter,
        onChange: this.onChange,
        onSettingsClick: this.onSettingsClick,
        onIconClick: this.onIconClick
      }), _react.default.createElement(List, {
        apps: this.props.apps,
        filter: this.state.filter,
        firstFocused: !this.state.hasTabbed
      }))));
    }
  }]);

  return Apps;
}(_react.default.Component);

exports.default = Apps;
Apps.propTypes = {
  baseURL: _propTypes.default.string.isRequired
};