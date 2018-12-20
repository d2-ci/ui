import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
/**
 * This HOC adds a "isAnimatingOut" (bool) and "onAnimationEnd" (fn) property
 * to a wrapped component. The "isAnimatingOut" can be used to add a CSS class
 * based keyframe animation to hide a component before it is removed from the DOM.
 * This HOC makes quite a few assumptions about the wrapped component, so won't be
 * suitable for any given situation:
 *
 * 1. It has an "open" property which is used to toggle visiblity.
 * 2. It renders content if `open || isAnimatingOut` is true
 * 3. It adds some CSS class to an element if isAnimatingOut is true.
 * 4. This CSS class has a keyframe animation attached to it
 * 5. The animated element to wait for has an "onAnimationEnd" property with the
 *    callback from the HOC
 */

export function withAnimatedClose(WrappedComponent) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(AnimatedClose, _React$Component);

    function AnimatedClose() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AnimatedClose);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimatedClose)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        isAnimatingOut: false
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAnimationStart", function () {
        return _this.setState({
          isAnimatingOut: true
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAnimationEnd", function () {
        return _this.setState({
          isAnimatingOut: false
        });
      });

      return _this;
    }

    _createClass(AnimatedClose, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        if (!nextProps.open && this.props.open && !this.state.isAnimatingOut) {
          this.onAnimationStart();
          return false;
        }

        return true;
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          isAnimatingOut: this.state.isAnimatingOut,
          onAnimationEnd: this.onAnimationEnd
        }));
      }
    }]);

    return AnimatedClose;
  }(React.Component), _temp;
}