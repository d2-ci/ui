function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  return _temp = class AnimatedClose extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        isAnimatingOut: false
      });

      _defineProperty(this, "onAnimationStart", () => this.setState({
        isAnimatingOut: true
      }));

      _defineProperty(this, "onAnimationEnd", () => this.setState({
        isAnimatingOut: false
      }));
    }

    shouldComponentUpdate(nextProps) {
      if (!nextProps.open && this.props.open && !this.state.isAnimatingOut) {
        this.onAnimationStart();
        return false;
      }

      return true;
    }

    render() {
      return React.createElement(WrappedComponent, _extends({}, this.props, {
        isAnimatingOut: this.state.isAnimatingOut,
        onAnimationEnd: this.onAnimationEnd
      }));
    }

  }, _temp;
}