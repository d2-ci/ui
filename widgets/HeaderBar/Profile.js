"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Profile;

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _Paper = _interopRequireDefault(require("../../core/Paper"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function TextIcon(_ref) {
  var name = _ref.name;
  var title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return _react.default.createElement("div", {
    className: (0, _styles.default)('icon')
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('initials')
  }, title));
}

function ImageIcon(_ref2) {
  var src = _ref2.src;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('icon')
  }, _react.default.createElement("img", {
    src: src
  }));
}

function Header(_ref3) {
  var name = _ref3.name,
      email = _ref3.email,
      img = _ref3.img,
      baseURL = _ref3.baseURL;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('header')
  }, img ? _react.default.createElement(ImageIcon, {
    src: img
  }) : _react.default.createElement(TextIcon, {
    name: name
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('details')
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('name')
  }, name), _react.default.createElement("div", {
    className: (0, _styles.default)('email')
  }, email), _react.default.createElement("a", {
    className: (0, _styles.default)('edit_profile'),
    href: "".concat(baseURL, "/dhis-web-user-profile/#/profile")
  }, "Edit profile")));
}

function Menu(_ref4) {
  var baseURL = _ref4.baseURL;
  var list = [{
    name: 'settings',
    label: 'Settings',
    onClick: function onClick() {
      return _onClick(baseURL, 'settings');
    }
  }, {
    name: 'account_box',
    label: 'Account',
    onClick: function onClick() {
      return _onClick(baseURL, 'account');
    }
  }, {
    name: 'help',
    label: 'Help',
    onClick: function onClick() {
      return _onClick(baseURL, 'help');
    }
  }, {
    name: 'exit_to_app',
    label: 'Logout',
    onClick: function onClick() {
      return _onClick(baseURL, 'logout');
    }
  }];
  return _react.default.createElement("nav", null, list.map(function (_ref5) {
    var name = _ref5.name,
        label = _ref5.label,
        onClick = _ref5.onClick;
    return _react.default.createElement(Item, {
      key: "profile-mi-".concat(name),
      name: name,
      label: label,
      onClick: onClick
    });
  }));
}

function Item(_ref6) {
  var name = _ref6.name,
      label = _ref6.label,
      onClick = _ref6.onClick;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('item'),
    onClick: onClick
  }, _react.default.createElement(_Icon.default, {
    name: name
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('label')
  }, label));
}

function _onClick(baseURL, actionType) {
  var paths = {
    edit_profile: "".concat(baseURL, "/dhis-web-user-profile/#/profile"),
    settings: "".concat(baseURL, "/dhis-web-user-profile/#/settings"),
    account: "".concat(baseURL, "/dhis-web-user-profile/#/account"),
    help: 'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
    logout: "".concat(baseURL, "/dhis-web-commons-security/logout.action")
  };

  if (typeof paths[actionType] !== 'undefined') {
    window.location = paths[actionType];
  } else {
    console.warn('onClick: not implemented', actionType);
  }
}

function Profile(_ref7) {
  var baseURL = _ref7.baseURL,
      _ref7$profile = _ref7.profile,
      name = _ref7$profile.name,
      email = _ref7$profile.email,
      img = _ref7$profile.img;
  return _react.default.createElement("div", {
    className: (0, _styles.default)('profile')
  }, img ? _react.default.createElement(ImageIcon, {
    src: img
  }) : _react.default.createElement(TextIcon, {
    name: name
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('contents')
  }, _react.default.createElement(_Paper.default, null, _react.default.createElement(Header, {
    name: name,
    email: email,
    img: img,
    baseURL: baseURL,
    onClick: function onClick() {
      return _onClick(baseURL);
    }
  }), _react.default.createElement("div", {
    className: (0, _styles.default)('divider')
  }), _react.default.createElement(Menu, {
    baseURL: baseURL
  }))));
}