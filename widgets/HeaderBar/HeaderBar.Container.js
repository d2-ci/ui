import _JSON$stringify from "@babel/runtime-corejs2/core-js/json/stringify";
import _slicedToArray from "@babel/runtime-corejs2/helpers/esm/slicedToArray";
import _Date$now from "@babel/runtime-corejs2/core-js/date/now";
import _Promise from "@babel/runtime-corejs2/core-js/promise";
import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './HeaderBar.Component';
import { get, post, getAction, serverURL } from '../../utils';

function appIconPath(path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path;
  }

  return "".concat(serverURL, "/api/").concat(path);
}

function appPath(path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path;
  }

  return "".concat(serverURL, "/api/").concat(path);
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

      _Promise.all([get('system/info').then(function (r) {
        return r.json();
      }), getAction("dhis-web-commons/menu/getModules.action?_=".concat(_Date$now())).then(function (r) {
        return r.text();
      }).then(function (r) {
        return JSON.parse(r);
      }).then(function (r) {
        return r.modules.filter(function (m) {
          return typeof m.displayName !== 'undefined';
        });
      }), get('me/dashboard').then(function (r) {
        return r.json();
      }), get('me.json').then(function (r) {
        return r.json();
      })]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 4),
            info = _ref2[0],
            apps = _ref2[1],
            unread = _ref2[2],
            me = _ref2[3];

        return post('i18n', _JSON$stringify(apps.map(function (a) {
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
              email: me.email
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
      return React.createElement(HeaderBar, {
        baseURL: serverURL,
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
}(React.Component);

HeaderBarContainer.propTypes = {
  appName: PropTypes.string.isRequired
};
export { HeaderBarContainer };
export default HeaderBarContainer;