"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Profile;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

var _Paper = _interopRequireDefault(require("../../core/Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function TextIcon(_ref) {
  var name = _ref.name;
  var title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return _react.default.createElement("div", {
    className: "icon"
  }, _react.default.createElement("div", {
    className: "initials"
  }, title));
}

function ImageIcon(_ref2) {
  var src = _ref2.src;
  return _react.default.createElement("div", {
    className: "icon"
  }, _react.default.createElement("img", {
    src: src
  }));
}

function Header(_ref3) {
  var name = _ref3.name,
      email = _ref3.email,
      img = _ref3.img,
      _onClick = _ref3.onClick;
  return _react.default.createElement("div", {
    className: "header"
  }, img ? _react.default.createElement(ImageIcon, {
    src: img
  }) : _react.default.createElement(TextIcon, {
    name: name
  }), _react.default.createElement("div", {
    className: "details"
  }, _react.default.createElement("div", {
    className: "name"
  }, name), _react.default.createElement("div", {
    className: "email"
  }, email), _react.default.createElement("div", {
    className: "edit_profile",
    onClick: function onClick() {
      return _onClick('edit_profile');
    }
  }, "Edit profile")));
}

function Menu() {
  return _react.default.createElement("div", {
    className: "menu"
  }, _react.default.createElement(Item, {
    name: "settings",
    label: "Settings"
  }), _react.default.createElement(Item, {
    name: "account_box",
    label: "Account"
  }), _react.default.createElement(Item, {
    name: "help",
    label: "Help"
  }), _react.default.createElement(Item, {
    name: "exit_to_app",
    label: "Logout"
  }));
}

function Item(_ref4) {
  var name = _ref4.name,
      label = _ref4.label;
  return _react.default.createElement("div", {
    className: "item",
    onClick: function onClick() {
      return _onClick2(name);
    }
  }, _react.default.createElement(_Icon.default, {
    name: name
  }), _react.default.createElement("div", {
    className: "label"
  }, label));
}

function _onClick2(actionType) {
  console.log('onClick', actionType);
}

function Profile(_ref5) {
  var name = _ref5.name,
      email = _ref5.email,
      img = _ref5.img;
  return _react.default.createElement("div", {
    className: "profile"
  }, img ? _react.default.createElement(ImageIcon, {
    src: img
  }) : _react.default.createElement(TextIcon, {
    name: name
  }), _react.default.createElement("div", {
    className: "contents"
  }, _react.default.createElement(_Paper.default, null, _react.default.createElement(Header, {
    name: name,
    img: img,
    email: email,
    onClick: _onClick2
  }), _react.default.createElement("div", {
    className: "divider"
  }), _react.default.createElement(Menu, null))));
}