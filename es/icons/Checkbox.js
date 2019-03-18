import React from 'react';

var _ref =
/*#__PURE__*/
React.createElement("path", {
  d: "M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"
});

var _ref2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

export function Unchecked({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref, _ref2);
}

var _ref3 =
/*#__PURE__*/
React.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

var _ref4 =
/*#__PURE__*/
React.createElement("path", {
  d: "M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"
});

export function Checked({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: className
  }, _ref3, _ref4);
}

var _ref5 =
/*#__PURE__*/
React.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
});

export function Indeterminate({
  className
}) {
  return React.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, _ref5);
}