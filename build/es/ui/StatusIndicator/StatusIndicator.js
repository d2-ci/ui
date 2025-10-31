import React from 'react';
import { Pill } from '../Pill';
import { Ping } from '../Ping';
import styles from './StatusIndicator.module.css';
export const StatusIndicator = ({
  label,
  variant = 'default',
  active = false
}) => {
  return /*#__PURE__*/React.createElement(Pill, {
    variant: variant
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.contentWrapper
  }, /*#__PURE__*/React.createElement(Ping, {
    variant: variant,
    active: active
  }), /*#__PURE__*/React.createElement("span", null, label)));
};