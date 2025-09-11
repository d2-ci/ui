import React from 'react';
import cx from 'classnames';
import styles from './Pill.module.css';
export const Pill = ({
  children,
  variant = 'default'
}) => {
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles.pillWrapper, {
      [styles.default]: variant === 'default',
      [styles.destructive]: variant === 'destructive',
      [styles.info]: variant === 'info',
      [styles.warning]: variant === 'warning',
      [styles.success]: variant === 'success'
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.pill
  }, children));
};