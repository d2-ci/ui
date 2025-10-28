import React from 'react';
import { colors } from '@dhis2/ui';
import cx from 'classnames';
import styles from './Widget.module.css';
export const WidgetNonCollapsible = ({
  header,
  children,
  color = colors.white,
  borderless = false
}) => /*#__PURE__*/React.createElement("div", {
  className: cx(styles.container, {
    [styles.borderless]: borderless
  }),
  style: {
    backgroundColor: color
  }
}, /*#__PURE__*/React.createElement("div", {
  className: styles.headerNonCollapsible,
  "data-test": "widget-header"
}, header), /*#__PURE__*/React.createElement("div", {
  className: styles.contents,
  "data-test": "widget-contents"
}, children));