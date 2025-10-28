import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { colors, IconChevronUp24 } from '@dhis2/ui';
import { IconButton } from '../IconButton';
import styles from './Widget.module.css';
export const WidgetCollapsible = ({
  header,
  open,
  onOpen,
  onClose,
  color = colors.white,
  borderless = false,
  children
}) => {
  const [childrenVisible, setChildrenVisibility] = useState(open); // controls whether children are rendered to the DOM
  const [animationsReady, setAnimationsReadyStatus] = useState(false);
  const [postEffectOpen, setPostEffectOpenStatus] = useState(open);
  const hideChildrenTimeoutRef = useRef(null);
  const initialRenderRef = useRef(true);
  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    if (!animationsReady) {
      setAnimationsReadyStatus(true);
    }
    setPostEffectOpenStatus(open);
    clearTimeout(hideChildrenTimeoutRef.current);
    if (open) {
      setChildrenVisibility(true);
    } else {
      hideChildrenTimeoutRef.current = setTimeout(() => {
        setChildrenVisibility(false);
      }, 200);
    }
  }, [open, animationsReady]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(styles.headerContainer, {
      [styles.headerContainerChildrenVisible]: childrenVisible,
      [styles.borderless]: borderless
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.headerCollapsible
  }, header, /*#__PURE__*/React.createElement(IconButton, {
    dataTest: "widget-open-close-toggle-button",
    className: cx(styles.toggleButton, {
      [styles.toggleButtonCloseInit]: !animationsReady && !postEffectOpen,
      [styles.toggleButtonOpen]: animationsReady && postEffectOpen,
      [styles.toggleButtonClose]: animationsReady && !postEffectOpen
    }),
    onClick: open ? onClose : onOpen
  }, /*#__PURE__*/React.createElement(IconChevronUp24, null)))), childrenVisible ? /*#__PURE__*/React.createElement("div", {
    "data-test": "widget-contents",
    className: cx(styles.children, {
      [styles.childrenOpen]: animationsReady && open,
      [styles.childrenClose]: animationsReady && !open,
      [styles.borderless]: borderless
    })
  }, children) : null);
};