import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { Card, MenuItem, Divider, Menu } from '../../core';
import { gotoURL, isPointInRect } from '../../utils';
import s from './styles';

function TextIcon(_ref) {
  var name = _ref.name,
      onClick = _ref.onClick;
  var title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return React.createElement("div", {
    className: s('reset', 'icon'),
    onClick: onClick
  }, React.createElement("div", {
    className: s('reset', 'initials')
  }, title));
}

TextIcon.defaultProps = {
  onClick: undefined
};
TextIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

function ImageIcon(_ref2) {
  var src = _ref2.src,
      onClick = _ref2.onClick;
  return React.createElement("div", {
    className: s('reset', 'icon'),
    onClick: onClick
  }, React.createElement("img", {
    src: src,
    alt: "user avatar"
  }));
}

ImageIcon.defaultProps = {
  onClick: undefined
};
ImageIcon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

function Header(_ref3) {
  var name = _ref3.name,
      email = _ref3.email,
      img = _ref3.img,
      baseURL = _ref3.baseURL;
  return React.createElement("div", {
    className: s('reset', 'header')
  }, img ? React.createElement(ImageIcon, {
    src: img
  }) : React.createElement(TextIcon, {
    name: name
  }), React.createElement("div", {
    className: s('reset', 'details')
  }, React.createElement("div", {
    className: s('reset', 'name')
  }, name), React.createElement("div", {
    className: s('reset', 'email')
  }, email), React.createElement("a", {
    className: s('reset', 'edit_profile'),
    href: "".concat(baseURL, "/dhis-web-user-profile/#/profile")
  }, "Edit profile")));
}

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
  baseURL: PropTypes.string
};
var list = [{
  icon: 'settings',
  label: 'Settings',
  value: 'settings'
}, {
  icon: 'account_box',
  label: 'Account',
  value: 'account'
}, {
  icon: 'help',
  label: 'Help',
  value: 'help'
}, {
  icon: 'exit_to_app',
  label: 'Logout',
  value: 'logout'
}];

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

        if (!isPointInRect(target, contents) && !isPointInRect(target, container)) {
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
        help: 'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
        logout: "".concat(baseURL, "/dhis-web-commons-security/logout.action")
      };

      if (typeof paths[value] !== 'undefined') {
        gotoURL(paths[value]);
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
        return React.createElement(ImageIcon, {
          src: this.props.profile.img,
          onClick: this.onToggle
        });
      }

      return React.createElement(TextIcon, {
        name: this.props.profile.name,
        onClick: this.onToggle
      });
    }
  }, {
    key: "viewContents",
    value: function viewContents() {
      var _this2 = this;

      if (!this.state.show) {
        return null;
      }

      return React.createElement("div", {
        className: s('reset', 'contents'),
        ref: function ref(c) {
          return _this2.elContents = c;
        }
      }, React.createElement(Card, {
        height: "298px"
      }, React.createElement("div", {
        className: s('reset', 'profile-alignment')
      }, React.createElement(Header, {
        baseURL: this.props.baseURL,
        img: this.props.profile.img,
        name: this.props.profile.name,
        email: this.props.profile.email,
        onClick: this.onHeaderClick
      }), React.createElement(Divider, {
        margin: "13px 0 7px 0"
      }), React.createElement("ul", {
        className: s('reset')
      }, list.map(function (_ref4) {
        var label = _ref4.label,
            value = _ref4.value,
            icon = _ref4.icon;
        return React.createElement(MenuItem, {
          key: "h-mi-".concat(value),
          label: label,
          value: value,
          icon: icon,
          onClick: _this2.onClick
        });
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", {
        className: s('reset', 'profile'),
        ref: function ref(c) {
          return _this3.elContainer = c;
        }
      }, this.viewIcon(), this.viewContents());
    }
  }]);

  return Profile;
}(React.Component);

export { Profile as default };
Profile.propTypes = {
  baseURL: PropTypes.string,
  profile: PropTypes.object
};