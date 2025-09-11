import React, { useRef, useState } from 'react';
import i18n from '@dhis2/d2-i18n';
import { Button, Layer, Popper } from '@dhis2/ui';
export const OverflowButton = ({
  label,
  primary,
  secondary,
  small,
  large,
  disabled,
  onClick: handleClick,
  open: propsOpen,
  icon,
  dataTest,
  component
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);
  const open = propsOpen !== undefined ? propsOpen : isOpen;
  const toggle = () => {
    if (propsOpen === undefined) {
      setIsOpen(prev => !prev);
    }
    handleClick === null || handleClick === void 0 || handleClick();
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: anchorRef
  }, /*#__PURE__*/React.createElement(Button, {
    title: label !== null && label !== void 0 ? label : i18n.t('More'),
    primary: primary,
    secondary: secondary,
    dataTest: dataTest,
    disabled: disabled,
    small: small,
    large: large,
    onClick: toggle,
    icon: icon
  }, label), open && /*#__PURE__*/React.createElement(Layer, {
    onBackdropClick: toggle
  }, /*#__PURE__*/React.createElement(Popper, {
    reference: anchorRef,
    placement: "bottom-start"
  }, component)));
};