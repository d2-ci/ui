import React from 'react';
import styles from './Card.module.css';
import { clsx } from 'clsx';
export const Card = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(styles.card, className)
  }, children);
};