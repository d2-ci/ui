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

var _Divider = _interopRequireDefault(require("../../core/Divider"));

var _Menu = _interopRequireDefault(require("../../core/Menu"));

var _MenuItem = _interopRequireDefault(require("../../core/Menu/MenuItem"));

var _Settings = require("../../icons/Settings.js");

var _Info = require("../../icons/Info.js");

var _Help = require("../../icons/Help.js");

var _Exit = require("../../icons/Exit.js");

var _Account = require("../../icons/Account.js");

var _utils = require("../../utils");

var _colors = require("../../core/colors.js");

var _styles = _interopRequireDefault(require("./styles.js"));

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

function TextIcon(_ref) {
  var name = _ref.name,
      onClick = _ref.onClick;
  var title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-".concat(_styles.default.__hash) + " " + "icon"
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "initials"
  }, title), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

TextIcon.defaultProps = {
  onClick: undefined
};
TextIcon.propTypes = {
  name: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};

function ImageIcon(_ref2) {
  var src = _ref2.src,
      onClick = _ref2.onClick;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-".concat(_styles.default.__hash) + " " + "icon"
  }, _react.default.createElement("img", {
    src: src,
    alt: "user avatar",
    className: "jsx-".concat(_styles.default.__hash)
  }), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

ImageIcon.defaultProps = {
  onClick: undefined
};
ImageIcon.propTypes = {
  src: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};

function Header(_ref3) {
  var name = _ref3.name,
      email = _ref3.email,
      img = _ref3.img,
      baseURL = _ref3.baseURL;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "header"
  }, img ? _react.default.createElement(ImageIcon, {
    src: img
  }) : _react.default.createElement(TextIcon, {
    name: name
  }), _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "details"
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "name"
  }, name), _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "email"
  }, email), _react.default.createElement("a", {
    href: "".concat(baseURL, "/dhis-web-user-profile/#/profile"),
    className: "jsx-".concat(_styles.default.__hash) + " " + "edit_profile"
  }, "Edit profile")), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Header.propTypes = {
  name: _propTypes.default.string,
  email: _propTypes.default.string,
  img: _propTypes.default.string,
  baseURL: _propTypes.default.string
};
var iconStyle = {
  styles: _react.default.createElement(_style.default, {
    id: "2762018188"
  }, "svg.jsx-2762018188{fill:".concat(_colors.colors.grey900, ";cursor:pointer;height:24px;width:24px;}")),
  className: "jsx-2762018188"
};
var list = [{
  icon: _react.default.createElement(_Settings.Settings, {
    className: iconStyle.className
  }),
  label: 'Settings',
  value: 'settings'
}, {
  icon: _react.default.createElement(_Account.Account, {
    className: iconStyle.className
  }),
  label: 'Account',
  value: 'account'
}, {
  icon: _react.default.createElement(_Help.Help, {
    className: iconStyle.className
  }),
  label: 'Help',
  value: 'help'
}, {
  icon: _react.default.createElement(_Info.Info, {
    className: iconStyle.className
  }),
  label: 'About DHIS2',
  value: 'about'
}, {
  icon: _react.default.createElement(_Exit.Exit, {
    className: iconStyle.className
  }),
  label: 'Logout',
  value: 'logout'
}];

var _ref4 =
/*#__PURE__*/
_react.default.createElement(_Divider.default, {
  margin: "13px 0 7px 0"
});

var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elContents) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var contents = _this.elContents.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _utils.isPointInRect)(target, contents) && !(0, _utils.isPointInRect)(target, container)) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (value) {
      var baseURL = _this.props.baseURL;
      var paths = {
        edit_profile: "".concat(baseURL, "/dhis-web-user-profile/#/profile"),
        settings: "".concat(baseURL, "/dhis-web-user-profile/#/settings"),
        account: "".concat(baseURL, "/dhis-web-user-profile/#/account"),
        about: "".concat(baseURL, "/dhis-web-user-profile/#/aboutPage"),
        help: 'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
        logout: "".concat(baseURL, "/dhis-web-commons-security/logout.action")
      };

      if (typeof paths[value] !== 'undefined') {
        (0, _utils.gotoURL)(paths[value]);
      } else {
        console.warn('onClick: not implemented', value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHeaderClick", function () {
      return _this.onClick('edit_profile');
    });

    return _this;
  }

  _createClass(Profile, [{
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
    key: "viewIcon",
    value: function viewIcon() {
      if (this.props.profile.img) {
        return _react.default.createElement(ImageIcon, {
          src: this.props.profile.img,
          onClick: this.onToggle
        }, _react.default.createElement(_style.default, {
          id: _styles.default.__hash
        }, _styles.default));
      }

      return _react.default.createElement(TextIcon, {
        name: this.props.profile.name,
        onClick: this.onToggle
      }, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }, {
    key: "viewContents",
    value: function viewContents() {
      var _this2 = this;

      if (!this.state.show) {
        return null;
      }

      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContents = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + "contents"
      }, _react.default.createElement(_Card.default, null, _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "profile-alignment"
      }, _react.default.createElement(Header, {
        baseURL: this.props.baseURL,
        img: this.props.profile.img,
        name: this.props.profile.name,
        email: this.props.profile.email,
        onClick: this.onHeaderClick
      }), _ref4, _react.default.createElement("ul", {
        className: "jsx-".concat(_styles.default.__hash)
      }, list.map(function (_ref5) {
        var label = _ref5.label,
            value = _ref5.value,
            icon = _ref5.icon;
        return _react.default.createElement(_MenuItem.default, {
          key: "h-mi-".concat(value),
          label: label,
          value: value,
          icon: icon,
          onClick: _this2.onClick
        });
      })))), iconStyle.styles, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + "profile"
      }, this.viewIcon(), this.viewContents(), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Profile;
}(_react.default.Component);

exports.default = Profile;
Profile.propTypes = {
  baseURL: _propTypes.default.string,
  profile: _propTypes.default.object
};