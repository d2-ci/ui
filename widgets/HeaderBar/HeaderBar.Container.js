"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderBarContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.js"));

var _api = require("../../utils/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function appIconPath(path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path;
  }

  return "".concat(_api.serverURL, "/api/").concat(path);
}

function appPath(path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path;
  }

  return "".concat(_api.serverURL, "/api/").concat(path);
}

function avatarPath(avatar) {
  if (!avatar) {
    return null;
  }

  return "".concat(_api.serverURL, "/api/fileResources/").concat(avatar.id, "/data");
}

var HeaderBarContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderBarContainer, _React$Component);

  function HeaderBarContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderBarContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderBarContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      type: 'blue',
      instanceName: '',
      messages: {
        count: 0
      },
      interpretations: {
        count: 0
      },
      apps: [],
      profile: {
        name: '',
        email: '',
        src: ''
      }
    });

    return _this;
  }

  _createClass(HeaderBarContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Promise.all([(0, _api.get)('system/info').then(function (r) {
        return r.json();
      }), (0, _api.getAction)("dhis-web-commons/menu/getModules.action?_=".concat(Date.now())).then(function (r) {
        return r.text();
      }).then(function (r) {
        return JSON.parse(r);
      }).then(function (r) {
        return r.modules.filter(function (m) {
          return typeof m.displayName !== 'undefined';
        });
      }), (0, _api.get)('me/dashboard').then(function (r) {
        return r.json();
      }), (0, _api.get)('me.json').then(function (r) {
        return r.json();
      })]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 4),
            info = _ref2[0],
            apps = _ref2[1],
            unread = _ref2[2],
            me = _ref2[3];

        return (0, _api.post)('i18n', JSON.stringify(apps.map(function (a) {
          return a.name;
        }))).then(function (r) {
          return r.json();
        }).then(function (i18n) {
          return {
            instanceName: info.systemName,
            messages: {
              count: unread.unreadMessageConversations
            },
            interpretations: {
              count: unread.unreadInterpretations
            },
            apps: apps.map(function (a) {
              return {
                name: i18n[a.name] || a.name,
                path: appPath(a.defaultAction),
                img: appIconPath(a.icon)
              };
            }),
            profile: {
              name: me.name,
              email: me.email,
              img: avatarPath(me.avatar)
            }
          };
        });
      }).then(function (res) {
        return _this2.setState(res);
      }).catch(function (e) {
        return console.error('HeaderBar failed to mount because of API errors.', e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          type = _this$state.type,
          messages = _this$state.messages,
          interpretations = _this$state.interpretations,
          apps = _this$state.apps,
          profile = _this$state.profile;
      return _react.default.createElement(_HeaderBar.default, {
        baseURL: _api.serverURL,
        type: type,
        instanceName: this.state.instanceName,
        appName: this.props.appName,
        apps: apps,
        profile: profile,
        messages: messages,
        interpretations: interpretations
      });
    }
  }]);

  return HeaderBarContainer;
}(_react.default.Component);

exports.HeaderBarContainer = HeaderBarContainer;
HeaderBarContainer.propTypes = {
  appName: _propTypes.default.string.isRequired
};
var _default = HeaderBarContainer;
exports.default = _default;