import React from 'react';
import { Tooltip } from '@dhis2/ui';
export const ConditionalTooltip = props => {
  const {
    enabled,
    wrapperClassName,
    children,
    ...passOnProps
  } = props;
  return enabled ? /*#__PURE__*/React.createElement(Tooltip, passOnProps, ({
    onMouseOver,
    onMouseOut,
    ref
  }) => /*#__PURE__*/React.createElement("span", {
    className: wrapperClassName,
    ref: btnRef => {
      if (btnRef) {
        // @ts-expect-error - pointer events are not supported in older browsers
        btnRef.onpointerenter = onMouseOver;
        // @ts-expect-error - pointer events are not supported in older browsers
        btnRef.onpointerleave = onMouseOut;
        ref.current = btnRef;
      }
    }
  }, children)) : children;
};