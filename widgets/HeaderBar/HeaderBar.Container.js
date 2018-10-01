"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderBarContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.date.now");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.string.starts-with");

var _react = _interopRequireDefault(require("react"));

var _HeaderBar = _interopRequireDefault(require("./HeaderBar.Component"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  return "".concat(_utils.serverURL, "/api/").concat(path);
}

function appPath(path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path;
  }

  return "".concat(_utils.serverURL, "/api/").concat(path);
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
      title: '',
      selection: '',
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
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetch();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _ref, systemName, _ref2, modules, apps, i18n, _ref3, unreadInterpretations, unreadMessageConversations, me;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _utils.get)('system/info').then(function (r) {
                  return r.json();
                });

              case 3:
                _ref = _context2.sent;
                systemName = _ref.systemName;
                _context2.next = 7;
                return (0, _utils.getAction)("dhis-web-commons/menu/getModules.action?_=".concat(Date.now())).then(function (r) {
                  return r.text();
                }).then(function (r) {
                  return JSON.parse(r);
                });

              case 7:
                _ref2 = _context2.sent;
                modules = _ref2.modules;
                apps = modules.filter(function (m) {
                  return typeof m.displayName !== 'undefined';
                }); // Translations for module names

                _context2.next = 12;
                return (0, _utils.post)('i18n', JSON.stringify(apps.map(function (a) {
                  return a.name;
                }))).then(function (r) {
                  return r.json();
                });

              case 12:
                i18n = _context2.sent;
                _context2.next = 15;
                return (0, _utils.get)('me/dashboard').then(function (r) {
                  return r.json();
                });

              case 15:
                _ref3 = _context2.sent;
                unreadInterpretations = _ref3.unreadInterpretations;
                unreadMessageConversations = _ref3.unreadMessageConversations;
                _context2.next = 20;
                return (0, _utils.get)('me.json').then(function (r) {
                  return r.json();
                });

              case 20:
                me = _context2.sent;
                this.setState({
                  title: systemName,
                  messages: {
                    count: unreadMessageConversations
                  },
                  interpretations: {
                    count: unreadInterpretations
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
                    email: me.email
                  }
                });
                _context2.next = 26;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](0);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 24]]);
      }));

      return function fetch() {
        return _fetch.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          type = _this$state.type,
          title = _this$state.title,
          selection = _this$state.selection,
          messages = _this$state.messages,
          interpretations = _this$state.interpretations,
          apps = _this$state.apps,
          profile = _this$state.profile;
      return _react.default.createElement(_HeaderBar.default, {
        type: type,
        title: title,
        selection: selection,
        messages: messages,
        interpretations: interpretations,
        apps: apps,
        profile: profile
      });
    }
  }]);

  return HeaderBarContainer;
}(_react.default.Component);

exports.HeaderBarContainer = HeaderBarContainer;
var _default = HeaderBarContainer;
exports.default = _default;