import React from 'react';
import styles from './Legend.module.css';
const Legend = ({
  title,
  bins,
  colors
}) => {
  console.log('Legend:', bins, colors);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.legend
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: styles.legendTitle
  }, title), /*#__PURE__*/React.createElement("div", {
    className: styles.legendSymbols
  }, bins.map((bin, index) => {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.classItem,
      key: index
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.classSymbol,
      style: {
        backgroundColor: colors[index]
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: styles.classLabel
    }, bin.startValue, " - ", bin.endValue));
  })));
};
export default Legend;