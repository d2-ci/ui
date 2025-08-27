import React from 'react';
import styles from './Card.module.css';
export const Card = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles.card} ${className || ''}`
  }, children);
};