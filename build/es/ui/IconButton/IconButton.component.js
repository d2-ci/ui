function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import cx from 'classnames';
import styles from './iconButton.module.css';
export const IconButton = ({
  children,
  className,
  dataTest,
  onClick,
  disabled,
  ...passOnProps
}) => /*#__PURE__*/React.createElement("button", _extends({}, passOnProps, {
  onClick: onClick,
  disabled: disabled,
  "data-test": dataTest,
  className: cx(styles.button, {
    disabled,
    ...(className ? {
      [className]: true
    } : {})
  }),
  type: "button",
  tabIndex: 0
}), children);