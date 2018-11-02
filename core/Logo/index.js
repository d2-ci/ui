"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoIcon = LogoIcon;
exports.Logo = Logo;
exports.default = exports.LogoWhite = exports.LogoIconWhite = void 0;

require("core-js/modules/es6.array.fill");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LogoIcon(_ref) {
  var fill = _ref.fill;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 182"
  }, _react.default.createElement("defs", null), _react.default.createElement("path", {
    fill: fill,
    d: "M191.73,60,109,6.34a19.73,19.73,0,0,0-20.32,0L8.31,58.43a12,12,0,0,0-.25,20.63L88.6,134a19.37,19.37,0,0,0,20.37.25l82.76-53.65a11.88,11.88,0,0,0,0-20.59Zm-91,61.45a4.29,4.29,0,0,1-3.49-.05l-77-52.49L97,19.13a4.76,4.76,0,0,1,3.74,0L179.6,70.28Z"
  }), _react.default.createElement("path", {
    fill: fill,
    d: "M88.66,47.82,45.1,76.06l13.61,9.33L97,60.61a4.76,4.76,0,0,1,3.74,0l39.37,25.52,14-9.06L109,47.82A19.76,19.76,0,0,0,88.66,47.82Z"
  }), _react.default.createElement("path", {
    fill: fill,
    d: "M191.73,101.46l-8.62-5.59-14.05,9.06,10.53,6.83-78.91,51.15a4.37,4.37,0,0,1-3.49,0l-77-52.5,10-6.47L16.55,94.57,8.31,99.91a12,12,0,0,0-.25,20.63L88.6,175.46a19.34,19.34,0,0,0,20.37.24l82.75-53.65a11.88,11.88,0,0,0,0-20.59Z"
  }));
}

LogoIcon.defaultProps = {
  fill: '#0080d4'
};
LogoIcon.propTypes = {
  fill: _propTypes.default.string
};

var LogoIconWhite = function LogoIconWhite() {
  return _react.default.createElement(LogoIcon, {
    fill: "#fff"
  });
};

exports.LogoIconWhite = LogoIconWhite;

function Logo(_ref2) {
  var fill1 = _ref2.fill1,
      fill2 = _ref2.fill2;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 600 182"
  }, _react.default.createElement("path", {
    fill: fill1,
    d: "M191.91,60,109.17,6.34a19.75,19.75,0,0,0-20.33,0L8.49,58.43a12,12,0,0,0-.25,20.63L88.78,134a19.39,19.39,0,0,0,20.38.25l82.75-53.65a11.87,11.87,0,0,0,0-20.59Zm-91,61.45a4.29,4.29,0,0,1-3.49-.05l-77-52.49L97.13,19.13a4.76,4.76,0,0,1,3.74,0l78.91,51.15Z"
  }), _react.default.createElement("path", {
    fill: fill1,
    d: "M88.84,47.82,45.28,76.06,58.9,85.39,97.13,60.61a4.76,4.76,0,0,1,3.74,0l39.37,25.52,14-9.06L109.17,47.82A19.78,19.78,0,0,0,88.84,47.82Z"
  }), _react.default.createElement("path", {
    fill: fill1,
    d: "M191.91,101.46l-8.62-5.59-14,9.06,10.52,6.83-78.91,51.15a4.37,4.37,0,0,1-3.49,0l-77-52.5,10-6.47L16.74,94.57,8.49,99.91a12,12,0,0,0-.25,20.63l80.54,54.92a19.36,19.36,0,0,0,20.38.24l82.74-53.65a11.87,11.87,0,0,0,0-20.59Z"
  }), _react.default.createElement("path", {
    fill: fill2,
    d: "M293.59,70.72q-6.91-11-20.62-11a29.31,29.31,0,0,0-22.88,10.39Q240.76,80.82,240.76,98t9.78,28.3A30.15,30.15,0,0,0,274,137q14,0,20.78-13.39l2.1,11.29h14.6V31.59H293.59Zm0,31.76a18,18,0,0,1-5.27,13.25,16.12,16.12,0,0,1-24.53-1.13q-5.12-6.24-5.12-16.48t5-16.33a15.65,15.65,0,0,1,12.57-6.1q7.53,0,12,4.51A18.36,18.36,0,0,1,293.59,93Z"
  }), _react.default.createElement("path", {
    fill: fill2,
    d: "M368.85,59.73q-14.44,0-22,13.85v-42H329.12V134.85h17.76V101q.3-12.65,5.34-19t12.12-6.32q7.07,0,11,4.14t3.91,12.27v42.75H397V92.1q0-14.61-6.85-23.49T368.85,59.73Z"
  }), _react.default.createElement("rect", {
    fill: fill2,
    x: "414.01",
    y: "61.54",
    width: "17.76",
    height: "73.31"
  }), _react.default.createElement("path", {
    fill: fill2,
    d: "M422.89,27.67q-5.26,0-8.13,2.79a10.15,10.15,0,0,0-2.86,7.6,10.13,10.13,0,0,0,2.86,7.6c1.91,1.86,4.62,2.78,8.13,2.78s6.1-.92,8.05-2.78a10,10,0,0,0,2.94-7.6,10,10,0,0,0-2.94-7.6C429,28.6,426.3,27.67,422.89,27.67Z"
  }), _react.default.createElement("path", {
    fill: fill2,
    d: "M494.39,95.56l-17.31-6.47q-8.88-2.57-8.88-7.83,0-3,3.24-5.35c2.15-1.55,5.19-2.33,9.1-2.33s6.93.71,9,2.11A7.38,7.38,0,0,1,493,81.41h16.71a20.11,20.11,0,0,0-7.91-15.51q-7.6-6.17-21.67-6.17t-22.43,5.65q-8.36,5.64-8.36,15,0,14,17.76,20.17l16,5.71a22.53,22.53,0,0,1,7.08,3.32,6.18,6.18,0,0,1,2.25,5.12c0,2.2-1.23,4.14-3.68,5.79a16.49,16.49,0,0,1-9.41,2.48q-14.89,0-15.21-10.38H447.58q.15,11.6,9,18T480.09,137q14.6,0,23.48-6.92,8.58-6.63,8.58-15.65a15.31,15.31,0,0,0-4.59-11.52Q503,98.42,494.39,95.56Z"
  }), _react.default.createElement("path", {
    fill: fill2,
    d: "M544.06,118.59V115a8.65,8.65,0,0,1,2.79-6.55c1.85-1.75,4.89-3.19,9.11-4.29l15.8-3.92Q585,96.92,591,90.82t5.95-17.24q0-11.13-9.18-18.66-9.5-7.83-24.24-7.83-15.79,0-25.29,6.77Q528.26,61.09,528,74.64h19.72q1.5-12,16.71-12,6.92,0,10.83,3.31a10.42,10.42,0,0,1,3.92,8.29,11.34,11.34,0,0,1-3.39,8.35q-3.39,3.39-11.67,5.49L549.79,91.5q-12.21,3-17.77,9.33-5.71,6.77-5.72,19.26v14.76h71.2V118.59Z"
  }));
}

Logo.defaultProps = {
  fill1: '#0080d4',
  fill2: '#212225'
};
Logo.propTypes = {
  fill1: _propTypes.default.string,
  fill2: _propTypes.default.string
};

var LogoWhite = function LogoWhite() {
  return _react.default.createElement(Logo, {
    fill1: "#ffffff",
    fill2: "#ffffff"
  });
};

exports.LogoWhite = LogoWhite;
var _default = Logo;
exports.default = _default;