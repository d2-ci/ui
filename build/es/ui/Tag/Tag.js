import React from 'react';
import { IconCross16 } from '@dhis2/ui';
import cx from 'classnames';
import styles from './Tag.module.css';
export const Tag = ({
  children,
  variant = 'default',
  onRemove,
  className
}) => {
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles.tagWrapper, {
      [styles.default]: variant === 'default',
      [styles.destructive]: variant === 'destructive',
      [styles.info]: variant === 'info',
      [styles.warning]: variant === 'warning',
      [styles.success]: variant === 'success'
    }, className)
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.tag
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.content
  }, children), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles.removeButton,
    onClick: onRemove,
    "aria-label": "Remove"
  }, /*#__PURE__*/React.createElement(IconCross16, null))));
};