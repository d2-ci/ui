import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../core/Card';
import Icon from '../../core/Icon';
import InputField from '../../core/InputField';
import { gotoURL, isPointInRect } from '../../utils';
import cx, { rx } from './styles';

function Search(_ref) {
  var onChange = _ref.onChange,
      onSettingsClick = _ref.onSettingsClick;
  return React.createElement("div", {
    className: rx('search')
  }, React.createElement(InputField, {
    name: "filter",
    kind: "filled",
    size: "dense",
    focus: true,
    label: "Search apps",
    onChange: onChange
  }), React.createElement(Icon, {
    name: "settings",
    className: cx('settings'),
    onClick: onSettingsClick
  }));
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired
};

function Item(_ref2) {
  var name = _ref2.name,
      path = _ref2.path,
      img = _ref2.img;
  return React.createElement("a", {
    href: path,
    className: rx('app')
  }, React.createElement("img", {
    src: img,
    alt: "app logo",
    className: rx()
  }), React.createElement("div", {
    className: rx('name')
  }, name));
}

Item.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  img: PropTypes.string
};

function List(_ref3) {
  var apps = _ref3.apps,
      filter = _ref3.filter;
  return React.createElement("div", {
    className: rx('modules')
  }, apps.filter(function (_ref4) {
    var name = _ref4.name;
    return filter.length > 0 ? name.toLowerCase().includes(filter.toLowerCase()) : true;
  }).map(function (_ref5, idx) {
    var name = _ref5.name,
        path = _ref5.path,
        img = _ref5.img;
    return React.createElement(Item, {
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

        if (!isPointInRect(target, apps) && !isPointInRect(target, container)) {
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
      return gotoURL("".concat(_this.props.baseURL, "/dhis-web-menu-management"));
    });

    return _this;
  }

  _createClass(Apps, [{
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
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: rx('apps'),
        ref: function ref(c) {
          return _this2.elContainer = c;
        }
      }, React.createElement(Icon, {
        name: "apps",
        onClick: this.onToggle
      }), this.state.show && React.createElement("div", {
        className: rx('contents'),
        ref: function ref(c) {
          return _this2.elApps = c;
        }
      }, React.createElement(Card, null, React.createElement(Search, {
        onChange: this.onChange,
        onSettingsClick: this.onSettingsClick
      }), React.createElement(List, {
        apps: this.props.apps,
        filter: this.state.filter
      }))));
    }
  }]);

  return Apps;
}(React.Component);

export { Apps as default };
Apps.propTypes = {
  baseURL: PropTypes.string.isRequired
};