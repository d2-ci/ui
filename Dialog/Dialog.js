"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _utils = require("../utils");

require("./dialog.css");

var _Paper = _interopRequireDefault(require("../Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var bem = (0, _utils.bemClassNames)('d2ui-dialog');

var Dialog =
/*#__PURE__*/
function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDialogWindowRef", function (node) {
      return _this.dialogWindowRef = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setBackdropRef", function (node) {
      return _this.dialogWindowRef = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBackdropClick", function () {
      var _this$props = _this.props,
          dismissible = _this$props.dismissible,
          closeHandler = _this$props.closeHandler;

      if (dismissible) {
        _this.setState({
          hidden: true
        });

        closeHandler && closeHandler();
      }
    });

    _this.state = {
      hidden: false
    };
    _this.backdropRef = null;
    _this.dialogWindowRef = null;
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('open was: ', prevProps.open, ' and now is: ', this.props.open);
      console.log('hidden was: ', prevState.hidden, ' and now is: ', this.state.hidden);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var title = this.props.title;

      if (!title) {
        return null;
      }

      var isText = ['string', 'number'].includes(_typeof(title));
      return _react.default.createElement("div", {
        className: bem.e('title')
      }, isText ? _react.default.createElement("h4", null, title) : title);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var actions = this.props.actions;

      if (_react.default.Children.count(actions) === 0) {
        return null;
      }

      return _react.default.createElement("div", {
        className: bem.e('footer')
      }, _react.default.Children.toArray(actions));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          content = _this$props2.content,
          open = _this$props2.open;
      var hidden = this.state.hidden;

      if (!open || hidden) {
        return null;
      }

      console.log('render');
      return _reactDom.default.createPortal(_react.default.createElement("div", {
        className: bem.b()
      }, _react.default.createElement("div", {
        className: bem.e('backdrop'),
        ref: this.setBackdropRef,
        onClick: this.onBackdropClick
      }), _react.default.createElement("div", {
        className: bem.e('window', size),
        ref: this.setDialogWindowRef
      }, _react.default.createElement(_Paper.default, {
        elevation: 12
      }, this.renderTitle(), _react.default.createElement("div", {
        className: bem.e('content')
      }, content), this.renderFooter()))), document.body);
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.defaultProps = {
  size: 'medium',
  dismissible: true
};
var _default = Dialog;
exports.default = _default;