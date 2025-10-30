import React from 'react';
import { WidgetCollapsible } from './WidgetCollapsible.component';
import { WidgetNonCollapsible } from './WidgetNonCollapsible.component';
export const Widget = ({
  noncollapsible = false,
  ...passOnProps
}) => {
  if (!noncollapsible) {
    const collapsibleProps = passOnProps;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WidgetCollapsible, collapsibleProps));
  }
  const nonCollapsibleProps = passOnProps;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WidgetNonCollapsible, nonCollapsibleProps));
};