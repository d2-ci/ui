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

var _regex = require("../../utils/regex.js");

var _memoize = _interopRequireDefault(require("../../utils/memoize.js"));

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
    return filter.length > 0 ? name.toLowerCase().match((0, _regex.escapeRegExp)(filter.toLowerCase())) : true;
  };
};

var isEnterKey = function isEnterKey(evt) {
  return evt.keyCode === 13 || evt.key === 'Enter';
};

var isTabKey = function isTabKey(evt) {
  return evt.keyCode === 9 || evt.key === 'Tab';
};

var isEsc = function isEsc(evt) {
  return evt.keyCode === 27 || evt.key === 'Escape';
};

var isUpArrow = function isUpArrow(evt) {
  return evt.keyCode === 38 || evt.key === 'ArrowUp';
};

var isDownArrow = function isDownArrow(evt) {
  return evt.keyCode === 40 || evt.key === 'ArrowDown';
};

function Search(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      onSettingsClick = _ref2.onSettingsClick,
      onIconClick = _ref2.onIconClick,
      inputRef = _ref2.inputRef;
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
    onTrailIconClick: onIconClick,
    ref: inputRef
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
      focused = _ref3.focused,
      idx = _ref3.idx;
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
      selectedIndex = _ref4.selectedIndex;
  return _react.default.createElement("div", {
    className: (0, _styles.rx)('modules')
  }, apps.map(function (_ref5, idx) {
    var name = _ref5.name,
        path = _ref5.path,
        img = _ref5.img;
    return _react.default.createElement(Item, {
      key: "app-".concat(name, "-").concat(idx),
      name: name,
      path: path,
      img: img,
      focused: idx === selectedIndex,
      idx: idx
    });
  }));
}

var Apps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Apps, _React$Component);

  function Apps(props) {
    var _this;

    _classCallCheck(this, Apps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Apps).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      filter: '',
      selectedIndex: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      // When tabbing we remove the "simulated" focus, and let native-tabbing take control
      if (isTabKey(evt) && _this.state.selectedIndex !== -1) {
        _this.setState({
          selectedIndex: -1
        });
      }

      if (isUpArrow(evt) || isDownArrow(evt)) {
        // prevent moving arrow in searchbox
        evt.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDocClick", function (evt) {
      if (_this.elContainer && _this.elApps) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var apps = _this.elApps.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _math.isPointInRect)(target, apps) && !(0, _math.isPointInRect)(target, container)) {
          _this.handleClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function () {
      return _this.setState({
        show: !_this.state.show,
        selectedIndex: 0
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchChange", function (_, filter) {
      return _this.setState({
        filter: filter,
        selectedIndex: 0
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSettingsClick", function () {
      return (0, _url.gotoURL)("".concat(_this.props.baseURL, "/dhis-web-menu-management"));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleIconClick", function () {
      return _this.setState({
        filter: '',
        selectedIndex: 0
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyUp", function (evt) {
      if (isEsc(evt)) {
        _this.handleClose(evt);
      } else if (_this.searchRef.current.isFocused()) {
        // we enable these escape-hatches only when focused
        if (isEnterKey(evt)) {
          _this.handleEnterClick(evt);
        } else if (isUpArrow(evt) || isDownArrow(evt)) {
          evt.preventDefault();

          _this.handleAppNavigation(evt, isUpArrow(evt));
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAppNavigation", function (evt) {
      var backwards = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var apps = _this.filterApps(_this.props.apps, _this.state.filter);

      if (backwards) {
        if (_this.state.selectedIndex > 0) {
          _this.setState(function (state) {
            return {
              selectedIndex: state.selectedIndex - 1
            };
          });
        }
      } else {
        if (_this.state.selectedIndex < apps.length - 1) {
          _this.setState(function (state) {
            return {
              selectedIndex: state.selectedIndex + 1
            };
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnterClick", function (evt) {
      var selectedApp = _this.filterApps(_this.props.apps, _this.state.filter)[_this.state.selectedIndex];

      if (selectedApp) {
        window.location = selectedApp.path;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterApps", (0, _memoize.default)(function (list, filter) {
      var byNameFilter = createAppNameFilter(filter);
      return list.filter(byNameFilter);
    }));

    _this.searchRef = _react.default.createRef();
    return _this;
  }

  _createClass(Apps, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // We remove listeners here as well as when closing the overlay,
      // just in case the component is nmounted without didUpdate catching it
      this.removeEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isShown = this.state.show;
      var didChange = prevState.show !== isShown; // Component is long lived, so we add listeners only when apps menu is opened

      if (didChange) {
        if (isShown) {
          document.addEventListener('click', this.handleDocClick);
          document.addEventListener('keyup', this.handleKeyUp);
          document.addEventListener('keydown', this.handleKeyDown);
        } else {
          this.removeEventListeners();
        }
      }
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      document.removeEventListener('click', this.handleDocClick);
      document.removeEventListener('keyup', this.handleKeyUp);
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "handleClose",
    value: function handleClose(evt) {
      this.setState({
        show: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filteredApps = this.filterApps(this.props.apps, this.state.filter);
      return _react.default.createElement("div", {
        className: (0, _styles.rx)('apps'),
        ref: function ref(c) {
          return _this2.elContainer = c;
        }
      }, _react.default.createElement(_Icon.default, {
        name: "apps",
        onClick: this.handleToggle
      }), this.state.show && _react.default.createElement("div", {
        className: (0, _styles.rx)('contents'),
        ref: function ref(c) {
          return _this2.elApps = c;
        }
      }, _react.default.createElement(_Card.default, null, _react.default.createElement(Search, {
        value: this.state.filter,
        onChange: this.handleSearchChange,
        onSettingsClick: this.handleSettingsClick,
        onIconClick: this.handleIconClick,
        inputRef: this.searchRef
      }), _react.default.createElement(List, {
        apps: filteredApps,
        selectedIndex: this.state.selectedIndex
      }))));
    }
  }]);

  return Apps;
}(_react.default.Component);

exports.default = Apps;
Apps.propTypes = {
  baseURL: _propTypes.default.string.isRequired
};